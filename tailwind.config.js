const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                sans: ['Roboto', ...fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
