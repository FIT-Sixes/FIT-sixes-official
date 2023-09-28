/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            screens: {
                'toggleStepper': '595px',
                'xs': '480px',
            },
        },
    },
    plugins: [],
};