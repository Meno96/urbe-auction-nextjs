import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Toggle from "@/components/Toggler"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { useDarkMode } from "../components/useDarkMode"
import { lightTheme, darkTheme } from "../components/Themes"
import { useRouter } from "next/router"
import { GlobalStateProvider } from "../utils/GlobalStateContext"
import FetchUserInfo from "@/utils/FetchUserInfo"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
})

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const isSignInPage = router.pathname === "/sign-in"
    const isSignUpPage = router.pathname === "/sign-up"

    const [theme, themeToggler] = useDarkMode()
    const themeMode = theme === "light" ? lightTheme : darkTheme

    return (
        <GlobalStateProvider>
            <div>
                <Head>
                    <title>UrbE Auction</title>
                    <meta name="description" content="UrbE Auction" />
                    <link rel="icon" href="/next/img.png" />
                </Head>
                <ThemeProvider theme={themeMode}>
                    <GlobalStyles />
                    <MoralisProvider initializeOnMount={false}>
                        <ApolloProvider client={client}>
                            <NotificationProvider>
                                {!isSignInPage && !isSignUpPage ? (
                                    <FetchUserInfo theme={theme} themeToggler={themeToggler} />
                                ) : (
                                    <div className="absolute top-3 right-3">
                                        <Toggle theme={theme} toggleTheme={themeToggler} />
                                    </div>
                                )}
                                <Component {...pageProps} />
                            </NotificationProvider>
                        </ApolloProvider>
                    </MoralisProvider>
                </ThemeProvider>
            </div>
        </GlobalStateProvider>
    )
}
