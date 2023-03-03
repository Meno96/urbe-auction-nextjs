import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../components/Themes"
import React, { useState, useEffect, useContext } from "react"
import { useDarkMode } from "../components/useDarkMode"
import Toggle from "../components/Toggler"
import Image from "next/image"
import urbEAuctionAbi from "../constants/UrbEAuction.json"
import nftAbi from "../constants/UrbEVehicleNft.json"
import { useWeb3Contract, useMoralis } from "react-moralis"
import networkMapping from "../constants/networkMapping.json"
import { useRouter } from "next/router"
import axios from "axios"
import { GlobalStateContext } from "../utils/GlobalStateContext"

export default function Header(props) {
    const { isWeb3Enabled } = useMoralis()
    const router = useRouter()
    const currentPath = router.asPath.split("?")[0]

    const { globalState } = useContext(GlobalStateContext)

    const [username, setUsername] = useState(null)
    const [isStaff, setIsStaff] = useState(null)

    useEffect(() => {
        setUsername(globalState.username)
        setIsStaff(globalState.isStaff)
    }, [globalState.username, globalState.isStaff])

    async function handleLogout() {
        try {
            await axios.post("/logout")
            router.push("/sign-in")
        } catch (error) {
            console.error(error)
        }
    }

    if (username == null || isStaff == null) {
        return <div>Loading...</div>
    } else {
        return (
            <nav className="px-5 border-b-[1px] border-green-600 shadow-md sticky top-0 z-10 ">
                <div className="max-w-7xl mx-auto flex flex-row items-center justify-between backdrop-blur-lg">
                    <div className="flex-1">
                        <Link href={"/"}>
                            <div className="p-1 w-[190px] h-[60px] cursor-pointer hover:scale-125 flex items-center">
                                <Image src="next/Logo.png" height="60" width="190" />
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-row flex-none items-center justify-center">
                        <Link href={"/"}>
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
                        {isStaff && isWeb3Enabled && (
                            <Link href={"/add-nft"}>
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
                        )}

                        {isStaff && isWeb3Enabled && (
                            <Link href={"/sell-nft"}>
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
                        )}

                        {isWeb3Enabled && (
                            <Link href={"/account"}>
                                <a
                                    className={`mr-4 p-6 hover:scale-125 ${
                                        currentPath === "/account"
                                            ? "text-green-600 hover:text-green-600"
                                            : "hover:text-slate-500 dark:hover:text-gray-100"
                                    } `}
                                >
                                    Account
                                </a>
                            </Link>
                        )}
                    </div>
                    <div className="flex flex-row flex-1 w-[330px] items-center justify-end">
                        <div className="flex flex-col">
                            <div className="flex justify-center">
                                <span>Hello, {username}</span>
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
}
