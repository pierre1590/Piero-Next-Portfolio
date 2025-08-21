// tailwind.config.mjs

import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp,
  ],
};

export default config;