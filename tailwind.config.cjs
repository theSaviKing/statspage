/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Syne", ...defaultTheme.fontFamily.sans],
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                serif: ["'DM Serif Display'", ...defaultTheme.fontFamily.serif],
                mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono]
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                umary: {
                    secondary: "#00355D",
                    primary: "#377CFB",
                    accent: "#FF671D",
                    neutral: "#b3bbcc",
                    "base-100": "#0D0D0D",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
};
