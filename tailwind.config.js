/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-1": "#E2D4F0",
        "primary-2": "#D0B7E6",
        "primary-3": "#A06ECE",
        "primary-4": "#7126B5",
        "primary-5": "#4B1979",
        "secondary-1": "#FFF8ED",
        "secondary-2": "#FFF0DC",
        "secondary-3": "#FFE9CA",
        "secondary-4": "#D4C2A8",
        "secondary-5": "#AA9B87",
        warning: "#F9CC00",
        danger: "#FF0000",
        success: "#73CA5C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
      padding: {
        4.5: "1.125rem"
      },
      screens: {
				xs: "460px",
			},
      boxShadow: {
        "xs": "0px 0px 10px rgba(0, 0, 0, 0.15)"
      },
      translate: {
        center: "(-50%, -50%)"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
			addVariant("active", "&:active");
		},
  ],
}
