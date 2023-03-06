import { Form } from "@web3uikit/core"
import { useNotification } from "web3uikit"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"
import nftAbi from "../constants/UrbEVehicleNft.json"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import networkMapping from "../constants/networkMapping.json"
import { useEffect, useState } from "react"
import { CircleLoading } from "react-loadingg"

export default function SellNft() {
    // Get contract addresses based on chainId from networkMapping object
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const urbEAuctionAddress = chainId
        ? networkMapping[chainString].UrbEAuction.slice(-1)[0]
        : null
    const urbEVehicleNftAddress = chainId
        ? networkMapping[chainString].UrbEVehicleNft.slice(-1)[0]
        : null

    // Get dispatch function from useNotification hook
    const dispatch = useNotification()

    // Define state variables
    const [selectNames, setSelectNames] = useState("")
    const [selectedId, setSelectedId] = useState(null)
    const [names, setNames] = useState(null)
    const [loading, setLoading] = useState(false)

    // Get runContractFunction from useWeb3Contract hook
    const { runContractFunction } = useWeb3Contract()

    // Function to sell NFTs
    async function sellNfts(data) {
        console.log("Minting...")
        setLoading(true)

        // Get necessary data for minting NFT
        const nftAddress = urbEVehicleNftAddress
        const index = selectedId
        const price = data.data[1].inputResult
            ? ethers.utils.parseUnits(data.data[1].inputResult, "ether").toString()
            : "0"
        const biddingTime = data.data[2].inputResult.toString()

        // Get the next token ID to use
        const tokenId = await getTokenCounter()

        // Define options for minting NFT contract function
        const mintOptions = {
            abi: nftAbi,
            contractAddress: nftAddress,
            functionName: "mintNft",
            params: {
                index: index,
            },
        }

        // Call the mintNft contract function
        await runContractFunction({
            params: mintOptions,
            onSuccess: (tx) => handleMintSuccess(tx, nftAddress, tokenId, price, biddingTime),
            onError: (error) => {
                setLoading(false)
                console.log(error)
            },
        })
    }

    // Function to handle successful minting of NFT
    async function handleMintSuccess(tx, nftAddress, tokenId, price, biddingTime) {
        const receipt = await tx.wait()
        if (receipt.status === 1) {
            console.log("Approving...")
            dispatch({
                type: "success",
                title: "Minted!",
                position: "topR",
            })

            // Define options for approving NFT transfer to auction contract
            const approveOptions = {
                abi: nftAbi,
                contractAddress: nftAddress,
                functionName: "approve",
                params: {
                    to: urbEAuctionAddress,
                    tokenId: tokenId,
                },
            }

            // Call the approve contract function
            await runContractFunction({
                params: approveOptions,
                onSuccess: (tx) =>
                    handleApproveSuccess(tx, nftAddress, tokenId, price, biddingTime),
                onError: (error) => {
                    setLoading(false)
                    console.log(error)
                },
            })
        } else {
            setLoading(false)
            console.error("Transaction failed")
            dispatch({
                type: "error",
                title: "Mint failed",
                position: "topR",
            })
        }
    }

    // Function to handle successful approve of NFT
    async function handleApproveSuccess(tx, nftAddress, tokenId, price, biddingTime) {
        const receipt = await tx.wait()
        if (receipt.status === 1) {
            console.log("Ok! Now time to list")
            dispatch({
                type: "success",
                title: "Approved!",
                position: "topR",
            })

            // Define options for listing NFT on auction contract
            const listOptions = {
                abi: urbEAuctionAbi,
                contractAddress: urbEAuctionAddress,
                functionName: "listItem",
                params: {
                    nftAddress: nftAddress,
                    tokenId: tokenId,
                    price: price,
                    biddingTime: biddingTime,
                },
            }

            // Call the listItem contract function
            await runContractFunction({
                params: listOptions,
                onSuccess: (tx) => handleListSuccess(tx),
                onError: (error) => {
                    setLoading(false)
                    console.log(error)
                },
            })
        } else {
            setLoading(false)
            console.error("Transaction failed")
            dispatch({
                type: "error",
                title: "Approve failed",
                position: "topR",
            })
        }
    }

    // Function to handle successful list of NFT
    async function handleListSuccess(tx) {
        const receipt = await tx.wait()
        setLoading(false)
        if (receipt.status === 1) {
            console.log("NFT listed!")
            dispatch({
                type: "success",
                title: "NFT listed!",
                position: "topR",
            })
        } else {
            console.error("Transaction failed")
            dispatch({
                type: "error",
                title: "List failed",
                position: "topR",
            })
        }
    }

    // Get contract function getNftInfos from useWeb3Contract hook
    const { runContractFunction: getNftInfos } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: urbEVehicleNftAddress,
        functionName: "getNftInfos",
        params: {},
    })

    // Get contract function getTokenCounter from useWeb3Contract hook
    const { runContractFunction: getTokenCounter } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: urbEVehicleNftAddress,
        functionName: "getTokenCounter",
        params: {},
    })

    // Fetch NFT names when web3 is enabled
    useEffect(() => {
        if (isWeb3Enabled) {
            async function getNameNfts() {
                const nfts = await getNftInfos()

                // Extract names from NFT data
                const names = []
                for (const nft of nfts) {
                    const name = nft.name
                    names.push(name)
                }
                setNames(names)

                // Create select options from NFT names
                const selectNames = names.map((name, index) => {
                    return { id: index, label: name }
                })

                setSelectNames(selectNames)
            }

            getNameNfts()
        }
    }, [isWeb3Enabled])

    // Handle selection of NFT name
    function handleNftNameChange(e) {
        if (e.target.id === "Nft Name_0") {
            setSelectedId(e.target.value)
        }
    }

    return (
        <div className="w-[100%] h-[100vh] flex justify-center">
            <div className="m-24">
                {/* Show loading spinner if loading state is true */}
                {loading && (
                    <div className="absolute top-0 left-0 z-50 w-screen h-screen backdrop-blur-md transition-all duration-500 ease-out">
                        <CircleLoading />
                    </div>
                )}
                {/* Show form if web3 is enabled, chainId is available, and NFT names have been fetched */}
                {isWeb3Enabled && chainId && selectNames ? (
                    <Form
                        buttonConfig={{
                            onClick: function noRefCheck() {},
                            theme: "outline",
                        }}
                        onSubmit={sellNfts}
                        data={[
                            {
                                name: "Nft Name",
                                id: "select",
                                selectOptions: selectNames,
                                type: "select",
                                value: "",
                                validation: {
                                    required: true,
                                },
                            },
                            {
                                name: "Price (in ETH)",
                                type: "number",
                                value: "0",
                                key: "price",
                            },
                            {
                                name: "Auction Time (in hour)",
                                type: "number",
                                value: "",
                                key: "time",
                                validation: {
                                    required: true,
                                },
                            },
                        ]}
                        onChange={handleNftNameChange}
                        title="Sell an NFT!"
                        id="Sell NFT Form"
                    />
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
