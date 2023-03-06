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

// Instantiate the Apollo client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
})

export default function App({ Component, pageProps }) {
    // Get the current route
    const router = useRouter()
    const isSignInPage = router.pathname === "/sign-in"
    const isSignUpPage = router.pathname === "/sign-up"

    // Set up the theme and theme toggler
    const [theme, themeToggler] = useDarkMode()
    const themeMode = theme === "light" ? lightTheme : darkTheme

    return (
        // Use the global state provider to manage global state
        <GlobalStateProvider>
            <div>
                <Head>
                    <title>UrbE Auction</title>
                    <meta name="description" content="UrbE Auction" />
                    <link rel="icon" href="/next/img.png" />
                </Head>
                {/* Use the styled components provider to apply the theme */}
                <ThemeProvider theme={themeMode}>
                    <GlobalStyles />
                    {/* Use the Moralis provider for web3 integration */}
                    <MoralisProvider initializeOnMount={false}>
                        {/* Use the Apollo provider for GraphQL integration */}
                        <ApolloProvider client={client}>
                            {/* Use the notification provider for web3 notifications */}
                            <NotificationProvider>
                                {/* If not on the sign in or sign up page, fetch user info, else display only the theme toggler */}
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
