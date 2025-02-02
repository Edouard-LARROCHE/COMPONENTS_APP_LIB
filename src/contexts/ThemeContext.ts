import { createContext } from "react"

interface ThemeContextType {
	isDarkMode: boolean
	toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
	isDarkMode: false,
	toggleDarkMode: () => {},
})

