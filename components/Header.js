import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../components/Themes"
import React, { useState, useEffect } from "react"
import { useDarkMode } from "../components/useDarkMode"
import Toggle from "../components/Toggler"
import Image from "next/image"

export default function Header(props) {
    return (
        <nav className="px-5 border-b-[1px] shadow-md">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
                <Link href="/">
                    <a className="flex flex-row items-center dark:hover:text-gray-100 hover:text-slate-500">
                        <Image src="Logo.png" height="60" width="190" />
                    </a>
                </Link>
                <div className="flex flex-row items-center">
                    <Link href="/">
                        <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                            Home
                        </a>
                    </Link>
                    <Link href="/sell-nft">
                        <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                            Sell NFT
                        </a>
                    </Link>
                    <ConnectButton moralisAuth={false} />
                    <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
                </div>
            </div>
        </nav>
    )
}
