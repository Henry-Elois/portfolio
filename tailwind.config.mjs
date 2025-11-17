/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        eloishenry: {
          "primary": "#ff076f",
          "primary-content": "#ffffff",
          "secondary": "#ffc700",
          "secondary-content": "#000000",
          "accent": "#101828",
          "accent-content": "#ffffff",
          "neutral": "#000000",
          "neutral-content": "#ffffff",
          "base-100": "#fafafa",
          "base-200": "#f0f0f0",
          "base-300": "#e5e5e5",
          "base-content": "#000000",
          "info": "#3abff8",
          "info-content": "#ffffff",
          "success": "#36d399",
          "success-content": "#ffffff",
          "warning": "#fbbd23",
          "warning-content": "#000000",
          "error": "#f87272",
          "error-content": "#ffffff",
        },
      },
    ],
  },
}
