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
import axios from "axios"

export default function Header(props) {
    const { isWeb3Enabled } = useMoralis()
    const router = useRouter()
    const currentPath = router.asPath.split("?")[0]

    console.log(currentPath)

    async function handleLogout() {
        try {
            await axios.post("/logout")
            router.push("/sign-in")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <nav className="px-5 border-b-[1px] shadow-md">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
                <div
                    className={`p-1 hover:scale-125 ${
                        currentPath === "/"
                            ? "text-green-600 hover:text-green-600"
                            : "hover:text-slate-500 dark:hover:text-gray-100"
                    } `}
                >
                    <Link href={{ pathname: "/", query: { username: props.username } }}>
                        <a>
                            <Image src="next/Logo.png" height="60" width="190" />
                        </a>
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <Link href={{ pathname: "/", query: { username: props.username } }}>
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
                        <Link href={{ pathname: "/add-nft", query: { username: props.username } }}>
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
                        <Link
                            href={{ pathname: "/sell-nft", query: { username: props.username } }}
                        >
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
                        <Link
                            href={{ pathname: "/sell-nft", query: { username: props.username } }}
                        >
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
                </div>
                <div className="flex flex-row items-center justify-self-end">
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <span>Hello, {props.username}</span>
                            <a
                                href="#"
                                className="ml-3 text-green-600 italic hover:scale-125"
                                onClick={handleLogout}
                            >
                                Logout
                            </a>
                        </div>
                        <ConnectButton moralisAuth={false} />
                    </div>
                    <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
                </div>
            </div>
        </nav>
    )
}
