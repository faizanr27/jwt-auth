const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgb(30 41 59 / var(--tw-bg-opacity))',
      },
      opacity: {
        'custom-opacity': '0.3',
      },
    },
  },
  plugins: [],
});

