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
      boxShadow: {
        "xs": "0px 0px 10px rgba(0, 0, 0, 0.15)",
        "2xs": "0px 0px 4px rgba(0, 0, 0, 0.15)"
      },
      colors: {
        "neutral-1": "#FFFFFF",
        "neutral-2": "#D0D0D0",
        "neutral-3": "#8A8A8A",
        "neutral-4": "#3C3C3C",
        "neutral-5": "#151515",
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
        "warning": "#F9CC00",
        "danger": "#FF0000",
        "success": "#73CA5C"
      },
      fontSize: {
        "2xs": ["0.625rem", "0.875rem"],
        "xs": ["0.75rem", "1.125rem"],
        "lg": ["1.125rem", "1.625rem"],
        "xl": ["1.25rem", "1.875rem"],
        "2xl": ["1.5rem", "2.25rem"],
      },
      flex: {
        "2": "2 2 0%"
      },
      gap: {
       "4.5": "1.125rem"
      },
      maxWidth: {
        "8xl": "90rem"
      },
      padding: {
        "4.5": "1.125rem"
      },
      screens: {
        "2xs": "375px",
				"xs": "460px",
        "2md": "992px",
        "2xl": "1440px"
			},
      translate: {
        "center": "(-50%, -50%)"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hocustive", ["&:hover", "&:focus", "&:active"]);
      addVariant("hocus", ["&:hover", "&:focus"]);
			addVariant("active", "&:active");
		},
  ],
}
