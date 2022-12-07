/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { min: '375px' },
      // => @media (min-width: 375px) { ... }

      desktop: { min: '1024px' },
      // => @media (min-width: 1024px) { ... }

      // '2xl': '1440px',
      // "3xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }
    },
    colors: {
      primary: {
        orange: 'hsl(var(--soft-orange) / <alpha-value>)',
        red: 'hsl(var(--soft-red) / <alpha-value>)',
      },
      netral: {
        white: 'hsl(var(--off-white) / <alpha-value>)',
        blue: 'hsl(var(--grayish-blue) / <alpha-value>)',
        darkblue: 'hsl(var(--dark-grayish-blue) / <alpha-value>)',
        verydarkblue: 'hsl(var(--very-dark-blue) / <alpha-value>)',
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
