import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				grow: "grow 3s infinite",
				slide: "slide 3s infinite normal",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"retro-cyan": "#60fdff",
				"retro-darkCyan": "#00c5c7",
				"retro-blue": "#6871ff",
				"retro-darkBlue": "#5259c1",
				"retro-green": "#5ffa68",
				"retro-darkGreen": "#00c200",
				"retro-purple": "#ff77ff",
				"retro-darkPurple": "#ca30c7",
				"retro-red": "#ff6e67",
				"retro-darkRed": "#b63b28",
				"retro-yellow": "#fffc67",
				"retro-darkYellow": "#c7c400",
			},
			keyframes: {
				grow: {
					"0%": { transform: "scale(0.4)" },
					"33%": { transform: "scale(0.8)" },
					"66%": { transform: "scale(1.2)" },
					"100%": { transform: "scale(1.6)" },
				},
				slide: {
					"0%": { transform: "translateX(-50px)" },
					"100%": { transform: "translateX(50px)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
