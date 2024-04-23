/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        // helve: "HelveticaNeue",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-gradient": 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%);',
        'bg_image': "url('/assets/images/headerbg.png')",
        'bg-cards': "url('/assets/images/cardframe.png')",
        'bg-Targetbg': "url('/assets/images/troupt.png')",
        'bg-footerbg': "url('/assets/images/footerbg.png')",
        'bg-meetingcard': "url('/assets/images/meetingcard.png')",
        'bg-yourex': "url('/assets/images/yourex.png')",
        "text-gradient": "linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%);",
        "bg_gradient": " linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%);"

      },
      backgroundSize: {
        "BgSize": "56% 100%"
      },
    },
  },
  plugins: [],
};
