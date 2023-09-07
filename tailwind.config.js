/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'cm-black': '#210124',
                'cm-green': '#2A6041',
                'cm-tomato': '#F06449',
                'cm-white': '#a2d2ff',
            },
        },
    },
    plugins: [],
}
