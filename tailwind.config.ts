import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F03683',
        secondary: '#FFE086'
      },
    },
  },
  plugins: [],
} satisfies Config;
