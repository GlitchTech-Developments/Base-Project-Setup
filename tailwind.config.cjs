/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{tsx,ts,astro,jsx,js,cjs,mjs,mdx,html,svelte,vue}"],
  theme: {},
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require.resolve("tailwindcss-animate"),
    require.resolve("@tailwindcss/aspect-ratio"),
    require.resolve("@tailwindcss/container-queries"),
  ],
};
