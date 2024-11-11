/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#FCFFA9', 
        'bg-2': '#AE7DFD', 
        'bg-3': '#FF60D2', 
        'bg-4': '#FFA287', 
        'bg-5': '#FFF07D', 
        'tx-1': '#FCFFA9', 
        'tx-2': '#AE7DFD', 
        'tx-3': '#FF60D2', 
        'tx-4': '#FFA287', 
        'tx-5': '#FFF07D', 
          'primary': '#fff', 
          'secondary': '#252525', 
          
        },
      },
    },
    plugins: [],
  }