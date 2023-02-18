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
    const [endTime, setEndTime] = useState("")
    const [startTime, setStartTime] = useState("")
    const [timeRemaining, setTimeRemaining] = useState("")
    const [intervalId, setIntervalId] = useState(null)
    const [isTimeUp, setIsTimeUp] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => setShowModal(false)
    const dispatch = useNotification()

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

    const { runContractFunction: getHighestBidder } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "getHighestBidder",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
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

    const { runContractFunction: auctionEnd } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "auctionEnd",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
    })

    async function updateUI() {
        const tokenURI = await getTokenURI()
        // console.log(`The TokenURI is ${tokenURI}`)
        // We are going to cheat a little here...
        if (tokenURI) {
            // IPFS Gateway: A server that will return IPFS files from a "normal" URL.
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json()
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setImageURI(imageURIURL)
            setTokenName(tokenURIResponse.name)
            setTokenDescription(tokenURIResponse.description)
            // We could render the Image on our sever, and just call our sever.
            // For testnets & mainnet -> use moralis server hooks
            // Have the world adopt IPFS
            // Build our own IPFS gateway
        }
        // get the tokenURI
        // using the image tag from the tokenURI, get the image
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
                const startTime = listedItem.startTime
                const highestBidder = listedItem.highestBidder
                setEndTime(endTime)
                setStartTime(startTime)
                setHighestBidder(highestBidder)

                setIntervalId(
                    setInterval(async () => {
                        const currentTimestamp = Math.floor(Date.now() / 1000) // converti il timestamp corrente in secondi
                        const timeRemainingInSeconds = endTime - currentTimestamp // calcola il tempo rimanente in secondi
                        setTimeRemaining(timeRemainingInSeconds) // aggiorna lo stato del tempo rimanente

                        if (timeRemainingInSeconds <= 0) {
                            // console.log("ok")
                            setTimeRemaining(0)
                            clearInterval(intervalId)
                        }
                    }, 1000) // aggiorna il timer ogni secondo
                )
            }

            initializeCard()
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        if (timeRemaining === 0 && !isTimeUp) {
            setIsTimeUp(true)
            callAuctionEnd()
        }
    }, [timeRemaining])

    async function callAuctionEnd() {
        // console.log(highestBidder)
        await auctionEnd(nftAddress, tokenId)
    }

    const isHighestBidder =
        highestBidder.toLowerCase() === account.toLowerCase() || highestBidder === undefined
    const formattedHighestBidderAddress = isHighestBidder
        ? "You"
        : truncateStr(highestBidder || "", 15)

    const handleCardClick = async () => {
        const deployer = await getDeployer()
        // console.log(deployer)

        const isDeployer =
            deployer.toLowerCase() === account.toLowerCase() || deployer === undefined
        // console.log(isDeployer)
        isDeployer
            ? cancelListing({
                  onError: (error) => console.log(error),
                  onSuccess: () => handleCancelItemSuccess(),
              })
            : setShowModal(true)
    }

    const handleCancelItemSuccess = () => {
        dispatch({
            type: "success",
            message: "Item canceled!",
            title: "Item canceled",
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
                        />

                        <Card
                            title={tokenName}
                            description={tokenDescription}
                            onClick={handleCardClick}
                        >
                            <div className="p-2 dark:text-gray-300">
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
                                    {price > 0 ? (
                                        <div className="mb-5 italic text-sm self-end">
                                            Highest bidder: {formattedHighestBidderAddress}
                                        </div>
                                    ) : (
                                        <div className="mb-5 italic text-sm self-end">No Bid</div>
                                    )}
                                    <Image
                                        loader={() => imageURI}
                                        src={imageURI}
                                        height="200"
                                        width="200"
                                    />
                                    <div className="mt-5 font-bold self-end">
                                        {ethers.utils.formatUnits(price, "ether")} ETH
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}
