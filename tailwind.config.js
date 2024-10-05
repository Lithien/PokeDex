import { content as _content, plugin } from "flowbite-react/tailwind"
export const content = ['./src/**/*.{html,js}', _content()]
export const theme = {
  darkMode: 'media',
  plugins: [
    plugin()
  ],
  extend: {
    colors: {
      red: {
        500: '#F44336'
      },
      white: {
        500: '#FFFFFF'
      },
      black: {
        500: '#000000'
      },
      gray: {
        100: '#E0E0E0',
        700: '#424242'
      },
      green: {
        500: '#00796B',
        300: '#81C784'
      },
      yellow: {
        500: '#FFEB3B'
      }
    }
  }
}
