import { ReactNode, useState } from "react"
import { ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

