module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "eol-last": "warn",
        "no-multiple-empty-lines": "warn",
        "semi": "warn",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
    },
    settings: {
    }
};