/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
    content: ['./src/**/*.{js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'gradient-pattern': `linear-gradient(
                    to bottom,
                    ${theme('colors.gradient-top')} 3.65%, 
                    ${theme('colors.gradient-middle')} 20.31%, 
                    ${theme('colors.gradient-bottom')} 100%
                ), url(./src/assets/pattern.webp);`
            }),
            colors: {
                'gradient-top': '#07334Efa',
                'gradient-middle': '#151632fa',
                'gradient-bottom': '#151632fa'
            },
        },
    },
    plugins: [],
});
