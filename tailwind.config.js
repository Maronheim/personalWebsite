/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Existing files
    './src/lib/**/*.{html,js,svelte,ts}', // Library folder explicitly
  ],
    theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Include DaisyUI if you're using it
  ],
  daisyui: {
    themes: ['dracula', 'acid'], // Configure themes
  },
}