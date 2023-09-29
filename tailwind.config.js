/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            textColor: {
                '00C2FF': '#00C2FF',
            },
            backgroundColor: {
                151632: '#151632',
            },
        },
    },
    plugins: [],
};
