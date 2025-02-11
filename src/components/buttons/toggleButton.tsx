import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

import IconSun from "../../assets/icons/sun.svg?react"
import IconMoon from "../../assets/icons/moon.svg?react"

export default function ToggleButton() {
	const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

	return (
		<div
			className="cursor-pointer border border-gray-300 dark:border-gray-600 rounded-full p-0.5 w-14 h-6 bg-gray-200 dark:bg-gray-700 transition-colors duration-300 mt-[.1rem]"
			onClick={toggleDarkMode}
		>
			<div className="relative w-full h-full">
				<div
					className={`bg-gray-50 dark:bg-slate-800 border-gray-300 border-[.01rem] w-6 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out translate-y-[-.08rem] ${
						isDarkMode ? "translate-x-6.5" : "translate-x-0"
					}`}
				>
					{isDarkMode ? (
						<IconMoon className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-amber-50" />
					) : (
						<IconSun className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-smoth-black" />
					)}
				</div>
			</div>
		</div>
	)
}

