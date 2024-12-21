// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: "expo",
	plugins: ["react-native"],
	rules: {
		"react-native/no-unused-styles": "error",
		"react-native/no-inline-styles": "error",
		"react-native/no-color-literals": "warn",
	},
};
