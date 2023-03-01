import { Button, Notification } from "@web3uikit/core"
import { useNotification } from "web3uikit"
import { GET_BUYED_ITEMS, GET_SOLD_ITEMS } from "@/constants/subgraphQueries"
import { useQuery } from "@apollo/client"
import { useWeb3Contract, useMoralis } from "react-moralis"
import networkMapping from "../constants/networkMapping.json"
import { useEffect, useState, useContext } from "react"
import OwnedNFTBox from "@/components/OwnedNFTBox"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import { ethers } from "ethers"
import { GlobalStateContext } from "../utils/GlobalStateContext"

export default function Account() {
    const { chainId, isWeb3Enabled, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const urbEAuctionAddress = chainId ? networkMapping[chainString].UrbEAuction[0] : null
    const { runContractFunction } = useWeb3Contract()
    const dispatch = useNotification()
    const { globalState, setGlobalState } = useContext(GlobalStateContext)

    const [deployer, setDeployer] = useState(null)
    const [proceeds, setProceeds] = useState("0")

    const { runContractFunction: getDeployer } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "getDeployer",
        params: {},
        onError: (error) => console.log(error),
    })

    const { runContractFunction: getProceeds } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "getProceeds",
        params: {
            seller: account,
        },
        onError: (error) => console.log(error),
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            async function fetchDeployer() {
                const deployer = await getDeployer()
                setDeployer(deployer)
            }
            fetchDeployer()
        }
    }, [isWeb3Enabled])

    const {
        loading,
        error,
        data: ownedNfts,
    } = useQuery(GET_BUYED_ITEMS, {
        pollInterval: 5000,
        variables: { account: account, deployer: deployer },
    })

    const {
        loading: loadingSold,
        error: errorSold,
        data: soldNfts,
    } = useQuery(GET_SOLD_ITEMS, {
        pollInterval: 5000,
        variables: { seller: account },
    })

    async function setupUI() {
        const returnedProceeds = await getProceeds()
        if (returnedProceeds) {
            setProceeds(returnedProceeds.toString())
        }
    }

    const handleWithdrawSuccess = () => {
        dispatch({
            type: "success",
            message: "Withdrawing proceeds",
            position: "topR",
        })
    }

    useEffect(() => {
        setupUI()
    }, [proceeds, account, isWeb3Enabled, chainId])

    return (
        // <div className="max-w-[1536px] min-w-[880px] w-auto mx-auto flex flex-col">
        <div className="flex flex-col items-center">
            <div className="border-4 border-solid border-green-600 rounded-2xl p-4 m-5 max-w-[1536px] flex flex-col">
                {globalState.isStaff ? (
                    <h1 className="mb-5 font-bold text-2xl">Sold NFTs</h1>
                ) : (
                    <h1 className="mb-5 font-bold text-2xl">Owned NFTs</h1>
                )}
                <div className="flex flex-row flex-wrap justify-center">
                    {globalState.isStaff ? (
                        isWeb3Enabled && chainId && soldNfts ? (
                            loadingSold ? (
                                <div>Loading...</div>
                            ) : soldNfts.auctionEndeds.length ? (
                                soldNfts.auctionEndeds.map((nft) => {
                                    const { price, nftAddress, tokenId, winner } = nft

                                    return urbEAuctionAddress ? (
                                        <OwnedNFTBox
                                            price={price}
                                            nftAddress={nftAddress}
                                            tokenId={tokenId}
                                            urbEAuctionAddress={urbEAuctionAddress}
                                            sellerWinner={winner}
                                            key={`${nftAddress}${tokenId}`}
                                        />
                                    ) : (
                                        <div>
                                            Network error, please switch to a supported network.
                                        </div>
                                    )
                                })
                            ) : (
                                <div>No NFTs sold</div>
                            )
                        ) : (
                            <div>Web3 Currently Not Enabled</div>
                        )
                    ) : isWeb3Enabled && chainId && ownedNfts ? (
                        loading ? (
                            <div>Loading...</div>
                        ) : ownedNfts.auctionEndeds.length ? (
                            ownedNfts.auctionEndeds.map((nft) => {
                                const { price, nftAddress, tokenId, seller } = nft

                                return urbEAuctionAddress ? (
                                    <OwnedNFTBox
                                        price={price}
                                        nftAddress={nftAddress}
                                        tokenId={tokenId}
                                        urbEAuctionAddress={urbEAuctionAddress}
                                        sellerWinner={seller}
                                        key={`${nftAddress}${tokenId}`}
                                    />
                                ) : (
                                    <div>Network error, please switch to a supported network.</div>
                                )
                            })
                        ) : (
                            <div>No NFTs owned</div>
                        )
                    ) : (
                        <div>Web3 Currently Not Enabled</div>
                    )}
                </div>
            </div>
            <div className="border-4 border-solid border-green-600 rounded-2xl p-4 m-5 self-center ">
                <h1 className="mb-5 font-bold text-2xl">Withdraw Proceeds</h1>
                {proceeds != 0 && (
                    <div className="mb-2">Withdraw {ethers.utils.formatEther(proceeds)} ETH</div>
                )}
                {proceeds != "0" ? (
                    <Button
                        theme="outline"
                        onClick={() => {
                            runContractFunction({
                                params: {
                                    abi: urbEAuctionAbi,
                                    contractAddress: urbEAuctionAddress,
                                    functionName: "withdrawProceeds",
                                    params: {},
                                },
                                onError: (error) => console.log(error),
                                onSuccess: () => handleWithdrawSuccess,
                            })
                        }}
                        text="Withdraw"
                        type="button"
                    />
                ) : (
                    <div>No proceeds detected</div>
                )}
            </div>
        </div>
    )
}
