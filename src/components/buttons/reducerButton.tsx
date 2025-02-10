import { Dispatch, SetStateAction, useState } from "react"

interface ReducerButtonProps {
	color: string
	borderColor: string
	setContainerHeight: Dispatch<SetStateAction<number>>
	initialHeight: number
	customHeight: number
}

export default function ReducerButton({
	color,
	borderColor,
	setContainerHeight,
	initialHeight,
	customHeight,
}: ReducerButtonProps) {
	const [isHovered, setIsHovered] = useState(false)
	const [isReduce, setIsReduce] = useState(false)

	function reducerContainer() {
		if (isReduce) {
			setContainerHeight(initialHeight)
			setIsReduce(false)
		} else {
			setContainerHeight(customHeight)
			setIsReduce(true)
		}
	}

	return (
		<div
			className="transition-all duration-300 ease-in-out cursor-pointer absolute right-5 bottom-[-.8rem] border-2 rounded-full"
			onClick={reducerContainer}
			style={{
				borderColor: isHovered
					? `var(--${borderColor})`
					: `var(--${"color-sky-300"})`,
			}}
		>
			<div
				className="relative w-6 h-6"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<span
					className={`absolute ${
						isReduce
							? "left-[0.30rem] top-[.2rem]"
							: "left-[0.30rem] top-[.1rem]"
					} flex items-center justify-center text-sm transition-transform duration-400 ${
						isHovered ? "rotate-[360deg]" : ""
					}`}
					style={{
						color: isHovered
							? `var(--${color})`
							: `var(--${"color-sky-300"})`,
					}}
				>
					{isReduce ? "▼" : "▲"}
				</span>
			</div>
		</div>
	)
}
