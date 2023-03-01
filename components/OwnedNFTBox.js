import { useState, useEffect, useContext } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import nftAbi from "../constants/UrbEVehicleNft.json"
import Image from "next/image"
import { Card, useNotification } from "web3uikit"
import { ethers } from "ethers"
import UpdateListingModal from "./UpdateListingModal"
import Web3 from "web3"
import { format, intervalToDuration } from "date-fns"
import { GlobalStateContext } from "@/utils/GlobalStateContext"
import axios from "axios"

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

export default function NFTBox({ price, nftAddress, tokenId, urbEAuctionAddress, sellerWinner }) {
    const { chainId, isWeb3Enabled, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null

    const [imageURI, setImageURI] = useState("")
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")
    const [highestBidder, setHighestBidder] = useState("")
    const [deployer, setDeployer] = useState("")
    const [seller, setSeller] = useState("")
    const [intervalId, setIntervalId] = useState(null)
    const [isTimeUp, setIsTimeUp] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const hideModal = () => setShowModal(false)
    const dispatch = useNotification()
    const { globalState, setGlobalState } = useContext(GlobalStateContext)

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
                const seller = listedItem.seller
                const deployer = await getDeployer()
                setDeployer(deployer)
                setHighestBidder(highestBidder)
                setSeller(seller)
            }
            initializeCard()
        }
    }, [isWeb3Enabled])

    const handleCardClick = async () => {
        setIsFlipped(!isFlipped)
    }

    const handleButtonClick = async () => {
        async function fetchTxHash() {
            try {
                const response = await axios.get("/api/fetch-txHash/", {
                    headers: {
                        tokenId: tokenId,
                    },
                })
                const txHash = response.data.txHash

                if (txHash) {
                    let etherscanLink = ""
                    if (chainString === "5") {
                        etherscanLink = `https://goerli.etherscan.io/tx/${txHash}`
                    } else if (chainString === "1") {
                        etherscanLink = `https://etherscan.io/tx/${txHash}`
                    }

                    window.open(etherscanLink, "_blank")
                }
            } catch (error) {
                console.error("Failed to fetch:", error)
            }
        }

        fetchTxHash()
    }

    return (
        <div className="m-2">
            {imageURI ? (
                <div className="group [perspective:400px] hover:scale-110 transition-all duration-500">
                    <div
                        onClick={handleCardClick}
                        className={`h-[410px] w-[250px] relative cursor-pointer rounded-3xl sc-iveFHk kKQXBH transition-all duration-500 [transform-style:preserve-3d]  ${
                            isFlipped ? "[transform:rotateY(180deg)]" : ""
                        }  `}
                    >
                        <div className="absolute h-full w-full p-5 dark:text-gray-300 [backface-visibility:hidden]">
                            <div className=" flex flex-col gap-2 ">
                                <div className="flex flex-row items-center justify-between">
                                    <div>#{tokenId}</div>
                                    {globalState.isStaff ? (
                                        <div className="italic text-sm">
                                            Winner: {truncateStr(sellerWinner || "", 15)}
                                        </div>
                                    ) : (
                                        <div className="italic text-sm">
                                            Sold by: {truncateStr(sellerWinner || "", 15)}
                                        </div>
                                    )}
                                </div>
                                <div className="h-[250px] w-[200px]">
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
                                <button
                                    onClick={handleButtonClick}
                                    className="btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800"
                                >
                                    Check Etherscan!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}
