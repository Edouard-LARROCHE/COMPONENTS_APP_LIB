import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export default function ToggleButton() {
	const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

	return (
		<button className="cursor-pointer" onClick={toggleDarkMode}>
			{isDarkMode ? "Mode clair" : "Mode sombre"}
		</button>
	)
}

