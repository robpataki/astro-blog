/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
