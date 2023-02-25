import { useEffect, useState } from "react"
export const useDarkMode = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme")
            if (storedTheme) {
                return storedTheme
            }
        }

        return "light"
    })

    const colorTheme = theme === "dark" ? "light" : "dark"

    const setMode = (mode) => {
        window.localStorage.setItem("theme", mode)
        setTheme(mode)
    }

    const themeToggler = () => {
        theme === "light" ? setMode("dark") : setMode("light")
    }

    useEffect(() => {
        const root = window.document.documentElement
        const localTheme = window.localStorage.getItem("theme")

        root.classList.remove(colorTheme)
        root.classList.add(localTheme)
    }, [theme])
    return [theme, themeToggler]
}
