import { Modal, Input, useNotification } from "web3uikit"
import { useWeb3Contract } from "react-moralis"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import { ethers } from "ethers"
import { useState, useEffect } from "react"

export default function UpdateListingModal({
    nftAddress,
    tokenId,
    isVisible,
    urbEAuctionAddress,
    onClose,
}) {
    const dispatch = useNotification()

    const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0)

    const handleUpdateListingSuccess = () => {
        dispatch({
            type: "success",
            message: "Bid Placed",
            title: "Bid Placed - please refresh (and move blocks)",
            position: "topR",
        })
        onClose && onClose()
        setPriceToUpdateListingWith("0")
    }

    const { runContractFunction: placeBid } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "placeBid",
        msgValue: ethers.utils.parseEther(priceToUpdateListingWith || "0"),
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
    })

    return (
        <Modal
            isVisible={isVisible}
            onCancel={onClose}
            onCloseButtonPressed={onClose}
            width={"400px"}
            onOk={() => {
                placeBid({
                    onError: (error) => {
                        console.log(error)
                    },
                    onSuccess: () => handleUpdateListingSuccess(),
                })
            }}
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
