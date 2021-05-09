module.exports = {
	purge: ['./src/**/*.js', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				750: '750px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
