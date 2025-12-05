/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                zinc: {
                    50: '#f5e0dc',  // Rosewater
                    100: '#f2cdcd', // Flamingo
                    200: '#cba6f7', // Mauve
                    300: '#89b4fa', // Blue
                    400: '#a6adc8', // Subtext0
                    500: '#9399b2', // Overlay2
                    600: '#585b70', // Surface2
                    700: '#45475a', // Surface1
                    800: '#313244', // Surface0
                    900: '#1e1e2e', // Base
                    950: '#11111b', // Crust
                },
                // Add explicit dark/light text overrides if needed, but sticky with zinc mapping for now
            }
        },
    },
    plugins: [],
}
