module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: {
          light: '#203636',
          DEFAULT: '#0D1616',
        },
        text: '#E5E5E5',
        primary: {
          light: '#d3bc8c',
          DEFAULT: '#C6A869',
          dark: '#b59144',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
