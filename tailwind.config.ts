import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mygray: {
          300: '#f0f0f0',
          400: '#D9D9D9',
          500: '#777777',
          600: '#222222',
        },
      },
    },
  },
  plugins: [],
};
export default config;
