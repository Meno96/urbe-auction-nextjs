import { Form, Upload, Button } from "@web3uikit/core"
import { useState, useEffect } from "react"
import axios from "axios"
import { useWeb3Contract, useMoralis } from "react-moralis"
import networkMapping from "../constants/networkMapping.json"
import nftAbi from "../constants/UrbEVehicleNft.json"

export default function AddNft() {
    const { chainId } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const urbEVehicleNftAddress = chainId ? networkMapping[chainString].UrbEVehicleNft[0] : null

    const [tokenUri, setTokenUri] = useState("")

    const { runContractFunction: updateArrayUri } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: urbEVehicleNftAddress,
        functionName: "updateArrayUri",
        params: {
            _newUri: tokenUri,
        },
    })

    const { runContractFunction: getvehicleURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: urbEVehicleNftAddress,
        functionName: "getvehicleURI",
        params: {
            index: 1,
        },
    })

    async function handleSubmit(data) {
        const name = data.data[0].inputResult
        const imageFile = data.data[1].inputResult

        // console.log(imageFile)

        const formData = new FormData()
        formData.append("name", name)
        formData.append("image", imageFile)

        try {
            const response = await axios.post("/add-nft", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            const tokenUri = response.data.tokenUri
            setTokenUri(tokenUri)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (tokenUri) {
            updateArrayUri()
        }
    }, [tokenUri, updateArrayUri])

    async function handleClick() {
        await updateArrayUri()
        console.log("ok")
    }

    async function handleClick2() {
        const uri = await getvehicleURI()
        console.log(uri)
    }

    return (
        <div className="flex justify-center">
            <div className="m-5">
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
            <Button onClick={handleClick} />
            <Button onClick={handleClick2} />
        </div>
    )
}
