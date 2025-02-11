import { useState } from "react"

import ReducerButton from "../components/buttons/reducerButton"
import ToggleButton from "../components/buttons/toggleButton"
import packageJson from "../../package.json"

import IconComponentCarft from "../assets/icons/component-craft.svg?react"

export default function HeaderNav() {
	const initialHeight = 150
	const customHeight = 80

	const [containerHeight, setContainerHeight] = useState(initialHeight)

	return (
		<div
			className={`bg-neutral-100 dark:bg-slate-800 flex items-start relative`}
			style={{ height: `${containerHeight}px` }}
		>
			<div className="flex items-center pl-2">
				<div className="w-12 h-full">
					{" "}
					<IconComponentCarft className="w-full" />{" "}
				</div>
				<div className="title gradient-text">ComponentCraft</div>
			</div>
			<ReducerButton
				color={"color-gray-500"}
				borderColor={"color-gray-500"}
				setContainerHeight={setContainerHeight}
				initialHeight={initialHeight}
				customHeight={customHeight}
			/>
			<div className="relative w-[100%] h-[100%] flex justify-end align-middle p-2">
				<div className="h-7 w-[.05rem] mr-3 ml-3 bg-gray-800 dark:bg-black opacity-10 dark:opacity-50" />
				<div className="rounded-full h-[max-content] pt-0 pl-2.5 pr-2.5 mt-1 bg-gray-200 dark:bg-gray-700 text-sm">
					{packageJson.version}
				</div>
				<div className="h-7 w-[.05rem] mr-3 ml-3 bg-gray-800 dark:bg-black opacity-10 dark:opacity-50" />
				<ToggleButton />
			</div>
		</div>
	)
}

