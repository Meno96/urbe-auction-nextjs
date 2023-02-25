import { Form, Button } from "@web3uikit/core"
import { useNotification } from "web3uikit"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"
import nftAbi from "../constants/UrbEVehicleNft.json"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import networkMapping from "../constants/networkMapping.json"
import { useEffect, useState } from "react"

export default function SellNft() {
    const { chainId, isWeb3Enabled, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const urbEAuctionAddress = chainId ? networkMapping[chainString].UrbEAuction[0] : null
    const urbEVehicleNftAddress = chainId ? networkMapping[chainString].UrbEVehicleNft[0] : null

    const [selectNames, setSelectNames] = useState("")
    const [selectedId, setSelectedId] = useState(null)
    const [names, setNames] = useState(null)

    const dispatch = useNotification()

    const { runContractFunction } = useWeb3Contract()

    async function sellNfts(data) {
        console.log("Minting...")
        const nftAddress = urbEVehicleNftAddress
        const index = selectedId
        const price = data.data[1].inputResult
            ? ethers.utils.parseUnits(data.data[1].inputResult, "ether").toString()
            : "0"
        const biddingTime = (data.data[2].inputResult * 3600).toString()

        const tokenId = await getTokenCounter()

        const approveOptions = {
            abi: nftAbi,
            contractAddress: nftAddress,
            functionName: "mintNft",
            params: {
                index: index,
            },
        }

        await runContractFunction({
            params: approveOptions,
            onSuccess: (tx) => handleMintSuccess(tx, nftAddress, tokenId, price, biddingTime),
            onError: (error) => {
                console.log(error)
            },
        })
    }

    async function handleMintSuccess(tx, nftAddress, tokenId, price, biddingTime) {
        console.log("Approving...")
        await tx.wait()
        const approveOptions = {
            abi: nftAbi,
            contractAddress: nftAddress,
            functionName: "approve",
            params: {
                to: urbEAuctionAddress,
                tokenId: tokenId,
            },
        }

        await runContractFunction({
            params: approveOptions,
            onSuccess: (tx) => handleApproveSuccess(tx, nftAddress, tokenId, price, biddingTime),
            onError: (error) => {
                console.log(error)
            },
        })
    }

    async function handleApproveSuccess(tx, nftAddress, tokenId, price, biddingTime) {
        console.log("Ok! Now time to list")
        await tx.wait()
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

        await runContractFunction({
            params: listOptions,
            onSuccess: () => handleListSuccess(),
            onError: (error) => console.log(error),
        })
    }

    async function handleListSuccess() {
        console.log("NFT listed!")
        dispatch({
            type: "success",
            message: "NFT listing",
            title: "NFT listed",
            position: "topR",
        })
    }

    const { runContractFunction: getNftInfos } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: urbEVehicleNftAddress,
        functionName: "getNftInfos",
        params: {},
    })

    const { runContractFunction: getTokenCounter } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: urbEVehicleNftAddress,
        functionName: "getTokenCounter",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            async function getNameNfts() {
                const nfts = await getNftInfos()

                const names = []
                for (const nft of nfts) {
                    const name = nft.name
                    names.push(name)
                }
                setNames(names)

                const selectNames = names.map((name, index) => {
                    return { id: index, label: name }
                })

                setSelectNames(selectNames)
            }

            getNameNfts()
        }
    }, [isWeb3Enabled])

    function handleNftNameChange(e) {
        if (e.target.id === "Nft Name_0") {
            setSelectedId(e.target.value)
        }
    }

    return (
        <div className="flex justify-center">
            <div className="m-5">
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
