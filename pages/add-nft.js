import { Form, Upload, Button } from "@web3uikit/core"
import { useState, useEffect } from "react"
import axios from "axios"
import { useWeb3Contract, useMoralis } from "react-moralis"
import networkMapping from "../constants/networkMapping.json"
import nftAbi from "../constants/UrbEVehicleNft.json"
import { CircleLoading } from "react-loadingg"
import { useNotification } from "web3uikit"

export default function AddNft() {
    const { chainId } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null

    // Get UrbEVehicleNft contract address from networkMapping based on chain ID
    const urbEVehicleNftAddress = chainId ? networkMapping[chainString].UrbEVehicleNft[0] : null

    // Get runContractFunction and dispatch function using custom hooks
    const { runContractFunction } = useWeb3Contract()
    const dispatch = useNotification()

    // Define loading state for form submission
    const [loading, setLoading] = useState(false)

    // Define async function to handle form submission
    async function handleSubmit(data) {
        setLoading(true)

        // Get name and image file from form data
        const name = data.data[0].inputResult
        const imageFile = data.data[1].inputResult

        // Create new FormData object with name and image file
        const formData = new FormData()
        formData.append("name", name)
        formData.append("image", imageFile)

        try {
            // Send POST request to backend API to add new NFT to IPFS and Pinata
            const response = await axios.post("/add-nft", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            // Get token URI of newly created NFT
            const tokenUri = response.data.tokenUri

            // Define updateMappingNftOptions object with necessary parameters
            const updateMappingNftOptions = {
                abi: nftAbi,
                contractAddress: urbEVehicleNftAddress,
                functionName: "updateMappingNft",
                params: {
                    _uri: tokenUri,
                    _name: name,
                },
            }

            // Call runContractFunction to update mapping NFT with newly created NFT URI
            await runContractFunction({
                params: updateMappingNftOptions,
                onSuccess: (tx) => handleUpdateMappingNftSuccess(tx),
                onError: (error) => {
                    setLoading(false)
                    console.log(error)
                },
            })

            // Define function to handle successful contract function call
            async function handleUpdateMappingNftSuccess(tx) {
                const receipt = await tx.wait()
                setLoading(false)

                // If transaction is successful, show success notification
                if (receipt.status === 1) {
                    dispatch({
                        type: "success",
                        title: "Mapping Nfts Update!",
                        position: "topR",
                    })
                } else {
                    console.error("Transaction failed")
                    dispatch({
                        type: "error",
                        title: "Mapping Nfts Update failed",
                        position: "topR",
                    })
                }
            }
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }

    return (
        <div className="flex justify-center">
            <div className="m-24">
                {loading && (
                    <div className="absolute top-0 left-0 z-50 w-screen h-screen backdrop-blur-md transition-all duration-500 ease-out">
                        <CircleLoading />
                    </div>
                )}
                <Form
                    buttonConfig={{
                        onClick: function noRefCheck() {},
                        theme: "outline",
                    }}
                    onSubmit={handleSubmit}
                    data={[
                        {
                            name: "NFT Name",
                            type: "text",
                            validation: {
                                required: true,
                            },
                            inputWidth: "50%",
                            value: "",
                            key: "nftName",
                        },
                        {
                            inputWidth: "100%",
                            name: "Image",
                            type: "file",
                            validation: {
                                required: true,
                            },
                            value: "",
                            key: "nftImage",
                        },
                    ]}
                    title="Add NFT to URI Array!"
                    id="Add NFT Form"
                />
            </div>
        </div>
    )
}
