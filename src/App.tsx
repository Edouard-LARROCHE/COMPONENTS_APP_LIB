import { useContext } from "react"
import { ThemeContext } from "./contexts/ThemeContext"

import HeaderNav from "./layout/headerNav"

function App() {
	const { isDarkMode } = useContext(ThemeContext)

	return (
		<div className={`App ${isDarkMode ? "dark-theme" : ""}`}>
			<HeaderNav />
		</div>
	)
}

export default App

