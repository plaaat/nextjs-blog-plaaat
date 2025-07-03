// 파일 이름: tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/posts/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'nanum-square': ['NanumSquare', 'sans-serif'],
                'nanum-gothic': ['Nanum Gothic', 'sans-serif'],
                'nanum-gothic-coding': ['Nanum Gothic Coding', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
export default config