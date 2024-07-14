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
				"retro-blue": "#6871ff",
				"retro-darkBlue": "#0225c7",
				"retro-green": "#5ffa68",
				"retro-darkGreen": "#00c200",
				"retro-yellow": "#fffc67",
				"retro-darkYellow": "#c7c400",
			},
		},
	},
	plugins: [],
};
export default config;
