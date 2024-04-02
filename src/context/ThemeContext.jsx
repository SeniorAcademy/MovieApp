import React, { createContext, useContext, useEffect,useState } from "react";

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const initialTheme = localStorage.getItem("theme" || "light")
    const [theme, setTheme] = useState(initialTheme)

    const toogleTheme = () => {
        if (theme === "dark") {
            document.body.classList.add("dark")
        }
        else {
            document.body.classList.remove("dark")
        }
    }

    const handleSwitch = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }


    useEffect(() => {
        toogleTheme()
        localStorage.setItem("theme", theme)
    }, [theme])

    const themeValue = {
        theme,
        handleSwitch
    }

    const Component = ThemeContext.Provider
    return <Component value={themeValue}>{children}</Component>
}
const useThemeContext = () => useContext(ThemeContext)
export { ThemeContextProvider, useThemeContext }