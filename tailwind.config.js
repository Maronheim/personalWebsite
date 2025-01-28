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
    themes: [
      // Custom Lemonade Theme with Modified Neutral
      {
        lemonade: {
          ...require("daisyui/src/colors/themes")["[data-theme=lemonade]"], // Clone the Lemonade theme
          neutral: require("daisyui/src/colors/themes")["[data-theme=lemonade]"]["base-200"], // Override only the neutral color
        },
      },
      "dracula", // Add Dracula theme
    ],
    // Set the default theme to 'dracula'
    theme: 'lemonade',
  },
}