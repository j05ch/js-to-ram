module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				750: '750px',
				100: '100%',
			},
			maxWidth: {
				1200: '1200px',
			},
			minWidth: {
				800: '800px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
