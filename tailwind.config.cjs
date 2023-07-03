/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const chroma = require('chroma-js')
module.exports = {
    content: ["./src/**/*.{astro,html,svg,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["'Syne Variable'", ...defaultTheme.fontFamily.sans],
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
                    "base-200": chroma("#0D0D0D").brighten(0.25).hex(),
                    "base-300": chroma("#0D0D0D").brighten(0.5).hex(),
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
};