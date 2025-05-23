/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a73e8', // Un azul vibrante
          dark: '#4285f4', // Un azul ligeramente diferente para modo oscuro
          50: '#e8f0fe',
          100: '#d2e3fc',
          200: '#a6c7f7',
          300: '#7aabf2',
          400: '#4d8feb',
          500: '#1a73e8',
          600: '#1766d0',
          700: '#135ac1',
          800: '#0f4c9e',
          900: '#0b3f7b',
        },
        accent: {
          DEFAULT: '#0f9d58', // Un verde/teal
          dark: '#34a853', // Un verde ligeramente diferente para modo oscuro
          50: '#e6f4ea',
          100: '#d4ebd9',
          200: '#aedac1',
          300: '#88c8a9',
          400: '#62b791',
          500: '#0f9d58',
          600: '#0d8c4e',
          700: '#0b7b45',
          800: '#096a3b',
          900: '#075932',
        },
        // Puedes ajustar los grises si es necesario o usar los por defecto de Tailwind
        gray: {
           50: '#f8f9fa',
           100: '#e9ecef',
           200: '#dee2e6',
           300: '#ced4da',
           400: '#adb5bd',
           500: '#6c757d',
           600: '#495057',
           700: '#343a40',
           800: '#212529',
           900: '#1a1d20',
        }
      }
    },
  },
  plugins: [],
};