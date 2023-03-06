import { useState, useEffect, useContext } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import nftAbi from "../constants/UrbEVehicleNft.json"
import Image from "next/image"
import { ethers } from "ethers"
import { GlobalStateContext } from "@/utils/GlobalStateContext"
import axios from "axios"

// Function to truncate a string and add the separator in the middle
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

export default function OwnedNFTBox({ price, nftAddress, tokenId, sellerWinner }) {
    // Use Moralis to get the current chain id and check if web3 is enabled
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null

    // State variables for the image URI, token name, and whether the card is flipped or not
    const [imageURI, setImageURI] = useState("")
    const [tokenName, setTokenName] = useState("")
    const [isFlipped, setIsFlipped] = useState(false)
    const { globalState } = useContext(GlobalStateContext)

    // Get the token URI from the NFT contract and update the UI with the image and token name
    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
            tokenId: tokenId,
        },
    })

    async function updateUI() {
        const tokenURI = await getTokenURI()
        if (tokenURI) {
            // Replace the IPFS URL with a proxy URL to avoid CORS issues
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json()
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setImageURI(imageURIURL)
            setTokenName(tokenURIResponse.name)
        }
    }

    // Update the UI when web3 is enabled
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    // Event handler for clicking on the card
    const handleCardClick = async () => {
        setIsFlipped(!isFlipped)
    }

    // Event handler for clicking on the "Check Etherscan!" button
    const handleButtonClick = async () => {
        async function fetchTxHash() {
            try {
                // Call the backend API to fetch the transaction hash for the sale
                const response = await axios.get("/api/fetch-txHash/", {
                    headers: {
                        tokenId: tokenId,
                    },
                })
                const txHash = response.data.txHash

                // If a transaction hash is returned, open the corresponding Etherscan link in a new tab
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
                        className={`h-[410px] w-[250px] relative cursor-pointer rounded-3xl transition-all duration-500 [transform-style:preserve-3d] border-solid border border-gray-200 dark:border-gray-700 ${
                            isFlipped ? "[transform:rotateY(180deg)]" : ""
                        }  `}
                    >
                        {/* Front of the card */}
                        <div className="absolute h-full w-full p-5 dark:text-gray-300 rounded-3xl backdrop-blur-md [backface-visibility:hidden]">
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
                            <div className="flex justify-center mt-3 font-semibold text-lg text-sky-500">
                                <h2>{tokenName}</h2>
                            </div>
                        </div>
                        {/* Back of the card */}
                        <div className="absolute h-full w-full p-5 flex justify-center transition duration-500 dark:text-gray-300 rounded-3xl backdrop-blur-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
