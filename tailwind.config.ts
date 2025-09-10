import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "text-100": "100px",
            },
            colors: {
                brand: "#1E40AF",
            },
        },
    },
    plugins: [],
};

export default config;
