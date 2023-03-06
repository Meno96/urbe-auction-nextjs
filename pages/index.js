import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { useMoralis } from "react-moralis"
import networkMapping from "../constants/networkMapping.json"
import { GET_ACTIVE_ITEMS } from "@/constants/subgraphQueries"
import { useQuery } from "@apollo/client"
import NFTBox from "@/components/NFTBox"
import { useState, useEffect, useContext } from "react"
import { list } from "postcss"
import axios from "axios"
import { GlobalStateContext } from "../utils/GlobalStateContext"

export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const urbEAuctionAddress = chainId ? networkMapping[chainString].UrbEAuction[0] : null
    const { globalState, setGlobalState } = useContext(GlobalStateContext)

    // Query for get listed NFTs
    const {
        loading,
        error,
        data: listedNfts,
        startPolling,
        stopPolling,
    } = useQuery(GET_ACTIVE_ITEMS, {
        pollInterval: 1000, // polling every 1s
    })

    useEffect(() => {
        if (isWeb3Enabled && chainId) {
            startPolling(1000)
            return () => stopPolling()
        }
    }, [isWeb3Enabled, chainId, startPolling, stopPolling])

    return (
        <div className="container mx-auto mt-24">
            {globalState.checkIp && (
                <div className="flex justify-center">
                    <p className="p-5 text-red-600 font-semibold">
                        Your actual ip address is different from the last login. We suggest you to
                        change password.
                    </p>
                </div>
            )}
            <h1 className="p-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled && chainId ? (
                    loading || !listedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            const { price, nftAddress, tokenId } = nft

                            return urbEAuctionAddress ? (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    urbEAuctionAddress={urbEAuctionAddress}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            ) : (
                                <div>Network error, please switch to a supported network.</div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
