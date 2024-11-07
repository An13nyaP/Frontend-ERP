/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Ensure all components are scanned
	],
	theme: {
		extend: {
			colors: {
				'custom-light-blue': '#F6F8FC',
			},
			fontFamily: {
				kanit: ['Kanit', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				nova: ['Nova Square', 'cursive'],
			},
		},
	},
	plugins: [],
};
