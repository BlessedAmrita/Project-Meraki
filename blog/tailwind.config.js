/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluishBlack:'#030712',
        maroon:'#840032',
        yellow:'#e59500',
        blush:'#e5dada',
        skyBlue:'#7ea8be',
      },
      fontFamily:{
        allison:"Allison",
        greatVibes:"Great Vibes",
        roboto:"Roboto",
      },
      dropShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.75)',
        'starGlow': '0 0 10px #e5dd00e3',
      },
      animation:{
        glow:"glow 1s ease-in-out infinite"
      },
      keyframes:{
        glow:{
          "0%,100%":{
            filter: 'brightness(50%))'
          },
          "50%":{
            filter: 'brightness(180%) drop-shadow(0 0 11px rgba(255, 255, 255, 1))'
          }
        }
      },
    },
  },
  plugins: [],
}