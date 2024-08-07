/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#32445a",
                secondary: "#2b3548",
                zinc: {
                    50: "#fafafa",
                    100: "#f4f4f5",
                    200: "#e4e4e7",
                    300: "#d4d4d8",
                    400: "#a1a1aa",
                    500: "#71717a",
                    600: "#52525b",
                    700: "#3f3f46",
                    800: "#27272a",
                    900: "#18181b",
                    950: "#09090b",
                },
            },
            fontSize: {
                15: "0.938rem",
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                13: "repeat(13, minmax(0, 1fr))",
                14: "repeat(14, minmax(0, 1fr))",
                15: "repeat(15, minmax(6.66667%, 1fr))",
            },
            gridTemplateRows: {
                // Simple 8 row grid
                6: "repeat(6, minmax(16.66667%, 1fr))",
            },
        },
    },
    plugins: [],
};
