/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 170s linear infinite",
        "reverse-loop": "reverse-loop 170s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "reverse-loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
