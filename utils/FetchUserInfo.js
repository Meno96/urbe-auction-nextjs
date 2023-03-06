import { useContext, useEffect } from "react"
import axios from "axios"
import { GlobalStateContext } from "../utils/GlobalStateContext"
import Header from "@/components/Header"

// Component for fetching user info and updating global state
export default function FetchUserInfo(props) {
    const { globalState, setGlobalState } = useContext(GlobalStateContext)

    // Fetch user info on component mount
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8000/api/user-info/")
                const userInfo = response.data
                const isStaff = userInfo.isStaff
                const username = userInfo.username
                const checkIp = userInfo.checkIp

                // Update global state with user info
                setGlobalState({
                    ...globalState,
                    isStaff: isStaff,
                    username: username,
                    checkIp: checkIp,
                })
            } catch (error) {
                console.error("Failed to fetch user info:", error)
                // Update global state with default values in case of error
                setGlobalState({
                    ...globalState,
                    isStaff: false,
                    username: null,
                    checkIp: null,
                })
            }
        }

        fetchData()
    }, [])

    // Render Header component with updated global state values
    return (
        <Header
            theme={props.theme}
            themeToggler={props.themeToggler}
            username={globalState.username}
            isStaff={globalState.isStaff}
        />
    )
}
