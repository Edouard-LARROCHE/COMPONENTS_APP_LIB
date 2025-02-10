import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import svgr from "vite-plugin-svgr"
import dts from "vite-plugin-dts"
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxRuntime: "automatic",
		}),
		tailwindcss(),
		svgr({
			include: "**/*.svg?react",
		}),
		dts({ rollupTypes: true }),
	],
	server: {
		open: true,
		port: 3000,
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/components/index.ts"),
			name: "ComponentsAppLib",
			fileName: (format) => `index.${format}`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "tailwindcss"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					tailwindcss: "tailwindcss",
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
})

