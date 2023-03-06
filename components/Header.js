import { ConnectButton } from "web3uikit"
import Link from "next/link"
import React, { useState, useEffect, useContext } from "react"
import Toggle from "../components/Toggler"
import Image from "next/image"
import { useMoralis } from "react-moralis"
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

    // Set username and isStaff values on global state change
    useEffect(() => {
        setUsername(globalState.username)
        setIsStaff(globalState.isStaff)
    }, [globalState.username, globalState.isStaff])

    // Function to handle logout
    async function handleLogout() {
        try {
            // Logout user and redirect to sign-in page
            await axios.post("http://localhost:8000/logout")
            router.push("/sign-in")
        } catch (error) {
            console.error(error)
        }
    }

    // Render loading message if username or isStaff values are not set yet, else render header
    if (username == null || isStaff == null) {
        return <div>Loading...</div>
    } else {
        return (
            <nav className="px-5 border-b-[1px] border-green-600 shadow-md fixed w-full top-0 z-10 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto flex flex-row items-center justify-between ">
                    <div className="flex-1">
                        {/* Render logo and link to home page */}
                        <Link href={"/"}>
                            <div className="p-1 w-[190px] h-[60px] cursor-pointer hover:scale-125 flex items-center">
                                <Image src="next/Logo.png" height="60" width="190" />
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-row flex-none items-center justify-center">
                        {/* Render links to home page, add NFT page, sell NFT page, and account page */}
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
                            {/* Display username and logout button */}
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
                            {/* Render the connect button */}
                            <ConnectButton moralisAuth={false} />
                        </div>
                        {/* Render the toggle for dark mode */}
                        <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
                    </div>
                </div>
            </nav>
        )
    }
}
