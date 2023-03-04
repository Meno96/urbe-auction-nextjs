import { useContext, useEffect } from "react"
import axios from "axios"
import { GlobalStateContext } from "../utils/GlobalStateContext"
import Header from "@/components/Header"

export default function FetchUserInfo(props) {
    const { globalState, setGlobalState } = useContext(GlobalStateContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "https://urbe-auction.herokuapp.com/api/user-info/"
                )
                const userInfo = response.data
                const isStaff = userInfo.isStaff
                const username = userInfo.username
                const checkIp = userInfo.checkIp

                setGlobalState({
                    ...globalState,
                    isStaff: isStaff,
                    username: username,
                    checkIp: checkIp,
                })
            } catch (error) {
                console.error("Failed to fetch user info:", error)
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

    console.log(globalState.username)
    return (
        <Header
            theme={props.theme}
            themeToggler={props.themeToggler}
            username={globalState.username}
            isStaff={globalState.isStaff}
        />
    )
}
