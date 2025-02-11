import { useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(
		() => localStorage.getItem("theme") === "dark"
	)

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark")
			localStorage.setItem("theme", "dark")
		} else {
			document.documentElement.classList.remove("dark")
			localStorage.setItem("theme", "light")
		}
	}, [isDarkMode])

	const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

