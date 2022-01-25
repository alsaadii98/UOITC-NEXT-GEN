module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'sub':'#727272',
      'main':'#555555',
      'heroColor1':'#F3FEE2',
      'heroColor2':'#DFE9FE;'
    },
  },
  plugins:  [
        require('@themesberg/flowbite/plugin')
    ],
}