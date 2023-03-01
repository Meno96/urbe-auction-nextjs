import { useState, useEffect } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import nftAbi from "../constants/UrbEVehicleNft.json"
import Image from "next/image"
import { Card, useNotification } from "web3uikit"
import { ethers } from "ethers"
import UpdateListingModal from "./UpdateListingModal"
import Web3 from "web3"
import { format, intervalToDuration } from "date-fns"
import axios from "axios"
import Cookies from "js-cookie"

const truncateStr = (fullStr, strLen) => {
    if (fullStr.length <= strLen) return fullStr

    const separator = "..."
    const seperatorLength = separator.length
    const charsToShow = strLen - seperatorLength
    const frontChars = Math.ceil(charsToShow / 2)
    const backChars = Math.floor(charsToShow / 2)
    return (
        fullStr.substring(0, frontChars) +
        separator +
        fullStr.substring(fullStr.length - backChars)
    )
}

const toHHMMSS = (seconds) => {
    var sec_num = seconds // don't forget the second param
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor((sec_num - hours * 3600) / 60)
    var seconds = sec_num - hours * 3600 - minutes * 60

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    return hours + "h " + minutes + "m " + seconds + "s"
}

export default function NFTBox({ price, nftAddress, tokenId, urbEAuctionAddress }) {
    const { isWeb3Enabled, account } = useMoralis()
    const [imageURI, setImageURI] = useState("")
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")
    const [highestBidder, setHighestBidder] = useState("")
    const [seller, setSeller] = useState("")
    const [endTime, setEndTime] = useState("")
    const [startTime, setStartTime] = useState("")
    const [isFlipped, setIsFlipped] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState("")
    const [deployer, setDeployer] = useState(true)
    const [intervalId, setIntervalId] = useState(null)
    const [data, setData] = useState(null)
    const [isTimeUp, setIsTimeUp] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => setShowModal(false)
    const dispatch = useNotification()
    const csrfToken = Cookies.get("csrftoken")

    const { runContractFunction } = useWeb3Contract()

    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
            tokenId: tokenId,
        },
    })

    const { runContractFunction: cancelListing } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "cancelListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
    })

    const { runContractFunction: getDeployer } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "getDeployer",
        params: {},
    })

    const { runContractFunction: getListing } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "getListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
    })

    async function updateUI() {
        const tokenURI = await getTokenURI()
        if (tokenURI) {
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json()
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setImageURI(imageURIURL)
            setTokenName(tokenURIResponse.name)
            setTokenDescription(tokenURIResponse.description)
        }
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        if (isWeb3Enabled) {
            async function initializeCard() {
                const listedItem = await getListing(nftAddress, tokenId)
                const endTime = listedItem.endTime
                const highestBidder = listedItem.highestBidder
                const seller = listedItem.seller
                const deployer = await getDeployer()
                setDeployer(deployer)
                setHighestBidder(highestBidder)
                setSeller(seller)

                if (endTime != 0) {
                    setIntervalId(
                        setInterval(async () => {
                            const currentTimestamp = Math.floor(Date.now() / 1000) // converti il timestamp corrente in secondi
                            const timeRemainingInSeconds = endTime - currentTimestamp // calcola il tempo rimanente in secondi
                            setTimeRemaining(timeRemainingInSeconds) // aggiorna lo stato del tempo rimanente

                            if (timeRemainingInSeconds <= 0) {
                                setTimeRemaining(0)
                                clearInterval(intervalId)
                            }
                        }, 1000) // aggiorna il timer ogni secondo
                    )
                }
            }

            initializeCard()
        }
    }, [isWeb3Enabled, endTime])

    useEffect(() => {
        if (timeRemaining === 0 && !isTimeUp) {
            setIsTimeUp(true)
            callAuctionEnd()
        }
    }, [timeRemaining])

    async function callAuctionEnd() {
        try {
            const listedItem = await getListing(nftAddress, tokenId)
            const priceETH = ethers.utils.formatEther(listedItem.price)

            const auctionData = {
                nftId: tokenId,
                winner: listedItem.highestBidder,
                priceETH: priceETH.toString(),
            }

            const auctionJson = JSON.stringify(auctionData)
            const auctionBytes = new TextEncoder().encode(auctionJson)

            const auctionHexString = []
            auctionBytes.forEach((byte) => {
                auctionHexString.push(("0" + byte.toString(16)).slice(-2))
            })

            const auctionString = "0x" + auctionHexString.join("")

            const auctionEndOptions = {
                abi: urbEAuctionAbi,
                contractAddress: urbEAuctionAddress,
                functionName: "auctionEnd",
                params: {
                    nftAddress: nftAddress,
                    tokenId: tokenId,
                    auctionJson: auctionString,
                },
            }

            const tx = await runContractFunction({
                params: auctionEndOptions,
                onSuccess: (tx) => handleAuctionEndSuccess(tx, listedItem),
                onError: (error) => console.log(error),
            })
        } catch (error) {
            console.error(error)
        }
    }

    async function handleAuctionEndSuccess(tx, listedItem) {
        const receipt = await tx.wait()
        if (receipt.status === 1) {
            dispatch({
                type: "success",
                title: "Nft Transfered!",
                position: "topR",
            })

            const formData = new FormData()
            formData.append("nftId", tokenId)
            formData.append("winner", listedItem.highestBidder)
            formData.append("price", listedItem.price)
            formData.append("txHash", tx.hash)

            try {
                const response = await axios.post("/end-auction", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRFToken": csrfToken,
                    },
                })
            } catch (error) {
                console.error(error)
            }
        } else {
            dispatch({
                type: "error",
                title: "Nft Transfer failed!",
                position: "topR",
            })
        }
    }

    const isHighestBidder =
        highestBidder.toLowerCase() === account.toLowerCase() || highestBidder === undefined
    const formattedHighestBidderAddress = isHighestBidder
        ? "You"
        : truncateStr(highestBidder || "", 15)

    const handleCardClick = async () => {
        setIsFlipped(!isFlipped)
    }

    const handleButtonClick = async () => {
        const isSeller = seller.toLowerCase() === account.toLowerCase() || seller === undefined

        isSeller
            ? cancelListing({
                  onError: (error) => console.log(error),
                  onSuccess: () => handleCancelItemSuccess(),
              })
            : setShowModal(true)
    }

    const handleCancelItemSuccess = () => {
        dispatch({
            type: "success",
            title: "Item canceled!",
            position: "topR",
        })
    }

    return (
        <div className="m-2">
            <div>
                {imageURI ? (
                    <div>
                        <UpdateListingModal
                            isVisible={showModal}
                            tokenId={tokenId}
                            urbEAuctionAddress={urbEAuctionAddress}
                            nftAddress={nftAddress}
                            onClose={hideModal}
                            nftId={tokenId}
                            seller={seller}
                        />
                        <div className="group [perspective:400px] hover:scale-110 transition-all duration-500">
                            <div
                                onClick={handleCardClick}
                                className={`relative h-[410px] !w-[250px] cursor-pointer rounded-3xl sc-iveFHk kKQXBH transition-all duration-500 [transform-style:preserve-3d]  ${
                                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                                }  `}
                            >
                                <div className="absolute h-full w-full p-5 dark:text-gray-300 [backface-visibility:hidden]">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row justify-between">
                                            <div>#{tokenId}</div>
                                            {timeRemaining <= 0 ? (
                                                <div className="italic text-sm">
                                                    The auction has ended
                                                </div>
                                            ) : (
                                                <div className="italic text-sm">
                                                    {toHHMMSS(timeRemaining)}
                                                </div>
                                            )}
                                        </div>
                                        {highestBidder.toLowerCase() != seller.toLowerCase() ? (
                                            <div className="mb-5 italic text-sm self-end">
                                                Highest bidder: {formattedHighestBidderAddress}
                                            </div>
                                        ) : (
                                            <div className="mb-5 italic text-sm self-end">
                                                No Bid
                                            </div>
                                        )}
                                        <div className="h-[200px] w-[200px] relative">
                                            <Image
                                                loader={() => imageURI}
                                                src={imageURI}
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                        <div className="mt-5 font-bold self-end">
                                            {ethers.utils.formatUnits(price, "ether")} ETH
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-3 font-semibold text-lg">
                                        <h2>{tokenName}</h2>
                                    </div>
                                </div>
                                <div className="absolute h-full w-full p-5 flex justify-center transition duration-500 dark:text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <div className="flex  items-center">
                                        {account.toLowerCase() === seller.toLowerCase() ? (
                                            <button
                                                onClick={handleButtonClick}
                                                className="btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800"
                                            >
                                                Cancel Listing
                                            </button>
                                        ) : (
                                            timeRemaining > 0 &&
                                            account.toLowerCase() !== deployer.toLowerCase() && (
                                                <button
                                                    onClick={handleButtonClick}
                                                    className="btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800"
                                                >
                                                    Place a Bid!
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}
