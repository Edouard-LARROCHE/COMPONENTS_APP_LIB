import { useState } from "react"
import IconComponentCarft from "../assets/icons/component-craft.svg?react"
import ReducerButton from "../components/buttons/reducerButton"

export default function HeaderNav() {
	const initialHeight = 28
	const customHeight = 15

	const [containerHeight, setContainerHeight] = useState(initialHeight)

	return (
		<div
			className={`h-${containerHeight} bg-neutral-100 flex items-start relative`}
		>
			<div className="flex items-center">
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
		</div>
	)
}

