import preset from "nativewind/preset";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "html",
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
