import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../components/Themes"
import React, { useState, useEffect } from "react"
import { useDarkMode } from "../components/useDarkMode"
import Toggle from "../components/Toggler"
import Image from "next/image"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import nftAbi from "../constants/UrbEVehicleNft.json"
import { useWeb3Contract, useMoralis } from "react-moralis"
import networkMapping from "../constants/networkMapping.json"
import { useRouter } from "next/router"

export default function Header(props) {
    const { chainId, isWeb3Enabled, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const urbEAuctionAddress = chainId ? networkMapping[chainString].UrbEAuction[0] : null
    const router = useRouter()
    const currentPath = router.asPath

    const [deployer, setDeployer] = useState(null)

    const { runContractFunction: getDeployer } = useWeb3Contract({
        abi: urbEAuctionAbi,
        contractAddress: urbEAuctionAddress,
        functionName: "getDeployer",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            getDeployer().then(setDeployer)
        }
    }, [isWeb3Enabled])

    return (
        <nav className="px-5 border-b-[1px] shadow-md">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
                <Link href="/">
                    <a
                        className={`mr-4 p-6 hover:scale-125 ${
                            currentPath === "/"
                                ? "text-green-600 hover:text-green-600"
                                : "hover:text-slate-500 dark:hover:text-gray-100"
                        } `}
                    >
                        <Image src="next/Logo.png" height="60" width="190" />
                    </a>
                </Link>
                <div className="flex flex-row items-center">
                    <Link href="/">
                        <a
                            className={`mr-4 p-6 hover:scale-125 ${
                                currentPath === "/"
                                    ? "text-green-600 hover:text-green-600"
                                    : "hover:text-slate-500 dark:hover:text-gray-100"
                            } `}
                        >
                            Home
                        </a>
                    </Link>

                    {isWeb3Enabled ? (
                        <Link href="/add-nft">
                            <a
                                className={`mr-4 p-6 hover:scale-125 ${
                                    currentPath === "/add-nft"
                                        ? "text-green-600 hover:text-green-600"
                                        : "hover:text-slate-500 dark:hover:text-gray-100"
                                } `}
                            >
                                Add NFT
                            </a>
                        </Link>
                    ) : null}

                    {isWeb3Enabled ? (
                        <Link href="/sell-nft">
                            <a
                                className={`mr-4 p-6 hover:scale-125 ${
                                    currentPath === "/sell-nft"
                                        ? "text-green-600 hover:text-green-600"
                                        : "hover:text-slate-500 dark:hover:text-gray-100"
                                } `}
                            >
                                Sell NFT
                            </a>
                        </Link>
                    ) : null}

                    {isWeb3Enabled ? (
                        <Link href="/sell-nft">
                            <a
                                className={`mr-4 p-6 hover:scale-125 ${
                                    currentPath === "/sell-nft"
                                        ? "text-green-600 hover:text-green-600"
                                        : "hover:text-slate-500 dark:hover:text-gray-100"
                                } `}
                            >
                                Admin
                            </a>
                        </Link>
                    ) : null}
                    <ConnectButton moralisAuth={false} />
                    <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
                </div>
            </div>
        </nav>
    )
}
