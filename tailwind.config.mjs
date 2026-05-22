/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pastelPink: "#f8c8d8",
        pastelPurple: "#d8b4e2",
        pastelGreen: "#c1e1c1",
        pastelBlue: "#dbeafe",
        pastelYellow: "#fef08a",
        darkBlue: "#0f172a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
