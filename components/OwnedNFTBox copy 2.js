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
    const [deployer, setDeployer] = useState(true)
    const [intervalId, setIntervalId] = useState(null)
    const [isTimeUp, setIsTimeUp] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
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
                const highestBidder = listedItem.highestBidder
                const deployer = await getDeployer()
                setDeployer(deployer)
                setHighestBidder(highestBidder)
            }
            initializeCard()
        }
    }, [isWeb3Enabled])

    const isHighestBidder =
        highestBidder.toLowerCase() === account.toLowerCase() || highestBidder === undefined
    const formattedHighestBidderAddress = isHighestBidder
        ? "You"
        : truncateStr(highestBidder || "", 15)

    const handleCardClick = async () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="m-2">
            <div>
                {imageURI ? (
                    <div className="group [perspective:400px]">
                        <div
                            onClick={handleCardClick}
                            className={`sc-iveFHk kKQXBH transition-all duration-500 [transform-style:preserve-3d]  ${
                                isFlipped ? "[transform:rotateY(180deg)]" : ""
                            }  `}
                        >
                            <div className="p-2 dark:text-gray-300 [backface-visibility:hidden]">
                                <div className="flex flex-col gap-2 ">
                                    <div>#{tokenId}</div>
                                    <div className="h-[200px] w-[200px]">
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
                            </div>
                            <div className=" p-2 transition duration-500 dark:text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div>Retro della card</div>
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
