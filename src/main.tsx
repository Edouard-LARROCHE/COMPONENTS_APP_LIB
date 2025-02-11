import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./tailwind.css"

import { ThemeProvider } from "./contexts/ThemeProvider"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
)

