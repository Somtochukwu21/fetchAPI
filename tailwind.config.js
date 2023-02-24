/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px",
      },

      backgroundImage: {
        linear: "linear-gradient(131.83deg, #f5e4e4 0%, #FFF7F7 99.21%)",
        pseudo:
          "linear-gradient(312.25deg, #FFC4BC 0%, rgba(255, 255, 255, 0) 66.19%)",
      },

      fontFamily: {
        kumb: "Kumbh Sans, sans-serif",
      },

      transformOrigin: {
        tb: " 50% 0%",
      },

      scale: {
        scale3d: "scale3d(1, 1, 1)",
      },

      animation: {
        expand: " expand 0.8s 0.6s ease-out forwards",
        bump: "bump 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
// backgroundImage: {
//   beauty: "linear-gradient(131.83deg, #FFFAFA 0%, #FFF7F7 99.21%)",
// },
