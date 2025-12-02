/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx,html}",
        "./public/**/*.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Spline Sans', 'sans-serif'],
            },
            colors: {
                brand: {
                    blue: '#3b82f6',
                    green: '#10b981',
                    dark: '#050505',
                    card: '#0a0a0a',
                    border: 'rgba(255, 255, 255, 0.05)'
                }
            },
            animation: {
                'beam-fall-1': 'beam-fall 6s linear infinite',
                'beam-fall-2': 'beam-fall 8s linear infinite',
                'beam-fall-3': 'beam-fall 7s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                'beam-fall': {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '5%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                    '95%': { opacity: '0.5' },
                    '100%': { transform: 'translateY(100vh)', opacity: '0' },
                }
            }
        }
    },
    plugins: [],
}
