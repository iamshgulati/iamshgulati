/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	overrides: [
		{
			files: ["*.toml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
		{
			files: ["*.mdx", "*.md"],
			options: {
				printWidth: 80,
			},
		},
	],
};
