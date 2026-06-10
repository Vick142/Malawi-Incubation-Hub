import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#1E3A8A",
          vibrant: "#2563EB",
          cyan: "#38BDF8",
        },
        navy: "#1E3A8A",
        "digital-blue": "#3B82F6",
        "metric-green": "#10B981",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
