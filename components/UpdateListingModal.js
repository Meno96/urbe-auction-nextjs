import { Modal, Input, useNotification } from "web3uikit"
import { useWeb3Contract, useMoralis } from "react-moralis"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import { ethers } from "ethers"
import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"

export default function UpdateListingModal({
    nftAddress,
    tokenId,
    isVisible,
    urbEAuctionAddress,
    onClose,
    nftId,
    seller,
}) {
    const { account } = useMoralis()
    const dispatch = useNotification()
    const { runContractFunction } = useWeb3Contract()
    const csrfToken = Cookies.get("csrftoken")

    const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0)

    async function handleUpdateListingSuccess() {
        try {
            const receipt = await tx.wait()
            if (receipt.status === 1) {
                dispatch({
                    type: "success",
                    title: "Bid Placed",
                    position: "topR",
                })
                const formData = new FormData()
                formData.append("bidPrice", priceToUpdateListingWith)
                formData.append("bidder", account)
                formData.append("nftId", nftId)

                try {
                    const response = await axios.post("/", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "X-CSRFToken": csrfToken,
                        },
                    })
                } catch (error) {
                    console.error(error)
                }
                onClose && onClose()
                setPriceToUpdateListingWith("0")
            } else {
                console.error("Transaction failed")
                dispatch({
                    type: "error",
                    title: "Transaction failed",
                    message: "The transaction was not successful",
                    position: "topR",
                })
            }
        } catch (error) {
            console.error(error)
            dispatch({
                type: "error",
                title: "Transaction failed",
                message: "The transaction was not successful",
                position: "topR",
            })
        }
    }

    async function handleSubmit() {
        const placeBidOptions = {
            abi: urbEAuctionAbi,
            contractAddress: urbEAuctionAddress,
            functionName: "placeBid",
            msgValue: ethers.utils.parseEther(priceToUpdateListingWith || "0"),
            params: {
                nftAddress: nftAddress,
                tokenId: tokenId,
            },
        }

        await runContractFunction({
            params: placeBidOptions,
            onError: (error) => {
                console.log(error)
            },
            onSuccess: (tx) => handleUpdateListingSuccess(tx),
        })
    }

    return (
        <Modal
            isVisible={isVisible && account.toLowerCase() !== seller.toLowerCase()}
            onCancel={onClose}
            onCloseButtonPressed={onClose}
            width={"400px"}
            onOk={handleSubmit}
        >
            <Input
                label="Update listing price in L1 Currency (ETH)"
                name="New listing price"
                type="number"
                onChange={(event) => {
                    setPriceToUpdateListingWith(event.target.value)
                }}
            />
        </Modal>
    )
}
