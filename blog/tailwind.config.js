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
        glow:"glow 1s ease-in-out infinite",
        meraki:"meraki 1.4s ease-out",
        layoutUp:"layoutUp 1.4s ease-out",
        leftSlide:"leftSlide 1.4s ease-out",
        reveal:"reveal 2s",
      },
      keyframes:{
        glow:{
          "0%,100%":{
            filter: 'brightness(50%))'
          },
          "50%":{
            filter: 'brightness(180%) drop-shadow(0 0 11px rgba(255, 255, 255, 1))'
          }
        },
        meraki:{
          "0%":{
            'padding-top':'0px',
            'overflow-y':'clip',
          },
          "100%":{
            'padding-top':'390px',
            'overflow-y':'clip',
          }
        },
        layoutUp:{
          "0%":{
            'padding-top':'300px',
            'overflow-y':'clip',
          },
          "100%":{
            'padding-top':'0px',
            'overflow-y':'clip',
          }
        },
        leftSlide:{
          "0%":{
            'transform':'translateX(-20%)',
          },
          "100%":{
            'transform':'translateX(0%)',
          }
        },
        reveal:{
          "0%":{
            'opacity': '0%',
          },
          "100%":{
            'opacity': '100%',
          }
        },
        
      },
    },
  },
  plugins: [],
}