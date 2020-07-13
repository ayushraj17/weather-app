module.exports = {
	purge: [
		"src/**/*.js",
		"src/**/*.jsx",
		"src/**/*.ts",
		"src/**/*.tsx",
		"public/**/*.html",
	],

	theme: {
		height: {
			lg: "18rem",
			xl: "20rem",
		},
		extend: {},
		container: {
			center: true,
			padding: {
				default: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
			},
		},
		textShadow: {
			// defaults to {}
			default: "0 2px 5px rgba(0, 0, 0, 0.5)",
			lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
		},
	},
	variants: {},
	plugins: [],
};
