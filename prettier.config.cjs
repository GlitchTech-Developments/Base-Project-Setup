/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  // Import sorting - add regex depending on your taste
  importOrder: [
    "^@/(.css)$",
    "^(.css)$",
    "^next/(.*)$",
    "^@next/(.*)$",
    "^react/(.*)$",
    "^@react/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Tailwind CSS plugin config
  tailwindAttributes: ["class", "className", "classes"],
  tailwindFunctions: ["cn", "clsx", "twMerge"],
  tailwindConfig: "./tailwind.config.cjs",
};
