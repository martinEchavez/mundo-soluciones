/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './JS/main.js'],
    theme: {
        extend: {
            colors: {
                primary: '#1F3A93',
                'primary-dark': '#142766',
                'primary-light': '#EEF2FF',
                accent: '#E8B23A',
                'accent-dark': '#9A6B0B',
                whatsapp: '#25d366',
            }
        }
    }
};
