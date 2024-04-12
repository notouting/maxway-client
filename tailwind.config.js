import { blackA, green, mauve, violet } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				...blackA,
				...green,
				...mauve,
				...violet,
				primary: '#222124',
				secondary: '#F1B301',
				purple: '#800A7A',
			},
		},
	},
	plugins: [],
}
