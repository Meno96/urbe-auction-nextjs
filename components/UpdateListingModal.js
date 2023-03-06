import { Modal, Input, useNotification } from "web3uikit"
import { useWeb3Contract, useMoralis } from "react-moralis"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import { ethers } from "ethers"
import { useState, useEffect } from "react"
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
    const { isWeb3Enabled, account } = useMoralis()
    const dispatch = useNotification()
    const { runContractFunction } = useWeb3Contract()
    const csrfToken = Cookies.get("csrftoken")

    // State to hold the user's updated listing price
    const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0)
    // State to hold the current price of the listing
    const [price, setPrice] = useState(null)

    // Function to retrieve the current price of the listing from the blockchain
    const { runContractFunction: getListing } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "getListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
    })

    // Effect hook to update the current price when the component mounts or when the user changes their wallet connection status
    useEffect(() => {
        if (isWeb3Enabled) {
            async function getPrice() {
                const listedItem = await getListing(nftAddress, tokenId)
                const price = listedItem.price
                setPrice(price)
            }

            getPrice()
        }
    }, [isWeb3Enabled])

    // Function to handle a successful contract function call to update the listing price
    async function handleUpdateListingSuccess(tx) {
        try {
            // Close the modal
            onClose && onClose()
            // Wait for the transaction to be confirmed
            const receipt = await tx.wait()
            if (receipt.status === 1) {
                dispatch({
                    type: "success",
                    title: "Bid Placed!",
                    position: "topR",
                })

                // Submit the updated price to the server
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
                setPriceToUpdateListingWith("0")
            } else {
                // Display an error notification if the transaction fails
                console.error("Transaction failed")
                dispatch({
                    type: "error",
                    title: "Transaction failed",
                    position: "topR",
                })
            }
        } catch (error) {
            console.error(error)
            dispatch({
                type: "error",
                title: "Transaction failed",
                position: "topR",
            })
        }
    }

    // Function to handle submit
    async function handleSubmit() {
        if (priceToUpdateListingWith > price) {
            const placeBidOptions = {
                abi: urbEAuctionAbi,
                contractAddress: urbEAuctionAddress,
                functionName: "placeBid",
                msgValue: priceToUpdateListingWith,
                params: {
                    nftAddress: nftAddress,
                    tokenId: tokenId,
                },
            }

            // Call placeBidFunction of the smart contract
            await runContractFunction({
                params: placeBidOptions,
                onError: (error) => {
                    console.log(error)
                },
                onSuccess: (tx) => handleUpdateListingSuccess(tx),
            })
        } else {
            console.log("Price too low!")
        }
    }

    return (
        <Modal
            isVisible={isVisible && account.toLowerCase() !== seller.toLowerCase()}
            onCancel={onClose}
            onCloseButtonPressed={onClose}
            width={"400px"}
            onOk={handleSubmit}
        >
            {priceToUpdateListingWith <= price && priceToUpdateListingWith > 0 && (
                <div className="mb-5 text-red-600">Price too low.</div>
            )}
            <Input
                label="Update listing price in L1 Currency (ETH)"
                name="New listing price"
                type="number"
                onChange={(event) => {
                    setPriceToUpdateListingWith(ethers.utils.parseEther(event.target.value || "0"))
                }}
            />
        </Modal>
    )
}
