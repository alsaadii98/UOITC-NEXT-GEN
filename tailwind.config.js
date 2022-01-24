module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'sub':'#727272',
      'main':'#555555'
    },
  },
  plugins:  [
        require('@themesberg/flowbite/plugin')
    ],
}