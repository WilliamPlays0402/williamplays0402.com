/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        green: {
          100: '#dcfce7',
          200: '#bbf7d0',
          800: '#166534',
          900: '#14532d',
        },
        purple: {
          100: '#f3e8ff',
          200: '#e9d5ff',
          800: '#7c3aed',
          900: '#581c87',
        },
        yellow: {
          100: '#fef3c7',
          200: '#fed7aa',
          800: '#92400e',
          900: '#78350f',
        },
        red: {
          100: '#fee2e2',
          200: '#fecaca',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        teal: {
          100: '#ccfbf1',
          200: '#99f6e4',
          800: '#115e59',
          900: '#134e4a',
        },
        indigo: {
          100: '#e0e7ff',
          200: '#c7d2fe',
          800: '#3730a3',
          900: '#312e81',
        },
        pink: {
          100: '#fce7f3',
          200: '#fbcfe8',
          800: '#be185d',
          900: '#831843',
        },
        orange: {
          100: '#fed7aa',
          200: '#fcd34d',
          800: '#9a3412',
          900: '#7c2d12',
        }
      }
    },
  },
  plugins: [],
}
