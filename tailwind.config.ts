import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"retro-cyan": "#60fdff",
				"retro-darkCyan": "#00c5c7",
				"retro-blue": "#6871ff",
				"retro-darkBlue": "#0225c7",
				"retro-green": "#5ffa68",
				"retro-darkGreen": "#00c200",
				"retro-purple": "#ff77ff",
				"retro-darkPurple": "#ca30c7",
				"retro-red": "#ff6e67",
				"retro-darkRed": "#c91b00",
				"retro-yellow": "#fffc67",
				"retro-darkYellow": "#c7c400",
			},
		},
	},
	plugins: [],
};
export default config;
