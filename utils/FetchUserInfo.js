import { useContext, useEffect } from "react"
import axios from "axios"
import { GlobalStateContext } from "../utils/GlobalStateContext"
import Header from "@/components/Header"

export default function FetchUserInfo(props) {
    const { globalState, setGlobalState } = useContext(GlobalStateContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/user-info/")
                const userInfo = response.data
                const isStaff = userInfo.isStaff
                const username = userInfo.username

                console.log(username)

                setGlobalState({ ...globalState, isStaff: isStaff, username: username })
            } catch (error) {
                console.error("Failed to fetch user info:", error)
                setGlobalState({
                    ...globalState,
                    isStaff: false,
                    username: null,
                })
            }
        }

        fetchData()
    }, [])

    return (
        <Header
            theme={props.theme}
            themeToggler={props.themeToggler}
            username={globalState.username}
            isStaff={globalState.isStaff}
        />
    )
}
