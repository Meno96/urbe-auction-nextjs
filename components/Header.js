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

export default function Header(props) {
    const [deployer, setDeployer] = useState(null)

    const { chainId, isWeb3Enabled, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const urbEAuctionAddress = chainId ? networkMapping[chainString].UrbEAuction[0] : null

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
                    <a className="flex flex-row items-center dark:hover:text-gray-100 hover:text-slate-500">
                        <Image src="next/Logo.png" height="60" width="190" />
                    </a>
                </Link>
                <div className="flex flex-row items-center">
                    <Link href="/">
                        <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                            Home
                        </a>
                    </Link>

                    {isWeb3Enabled && account && deployer ? (
                        account.toLowerCase() === deployer.toLowerCase() ? (
                            <Link href="/add-nft">
                                <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                                    Add NFT
                                </a>
                            </Link>
                        ) : null
                    ) : null}

                    {isWeb3Enabled && account && deployer ? (
                        account.toLowerCase() === deployer.toLowerCase() ? (
                            <Link href="/mint-nft">
                                <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                                    Mint NFT
                                </a>
                            </Link>
                        ) : null
                    ) : null}

                    {isWeb3Enabled && account && deployer ? (
                        account.toLowerCase() === deployer.toLowerCase() ? (
                            <Link href="/sell-nft">
                                <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                                    Admin
                                </a>
                            </Link>
                        ) : null
                    ) : null}
                    <ConnectButton moralisAuth={false} />
                    <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
                </div>
            </div>
        </nav>
    )
}
