/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            backgroundImage: (_theme_) => ({
                "back-image": "url('/src/assets/background.png')",
            }),
            colors: {
                "bg-top": "rgba(7, 51, 78, 0.8)",
                "bg-middle": "rgba(21, 22, 50, 0.9)",
                "bg-bottom": "rgba(21, 22, 50, 0.9)",
            }
        },
    },
    plugins: [],
};