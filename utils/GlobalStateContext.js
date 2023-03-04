import { createContext } from "react"
import { useState } from "react"

export const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
    console.log("ciao")
    const [globalState, setGlobalState] = useState({
        isStaff: false,
        username: null,
        checkIp: null,
    })

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalStateContext.Provider>
    )
}
