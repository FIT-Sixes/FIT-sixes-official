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
                'accent': '#20CDD3',

                'gradient-top': '#07334Ef3',
                'gradient-middle': '#151632f3',
                'gradient-bottom': '#151632f3'
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            fontSize: {
                '10xl': '10rem',
            }
        },
    },
    plugins: [],
});
