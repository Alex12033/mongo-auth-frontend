module.exports = {
  mode: "jit",
  content: ["./**/*.html"],
  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bg-image": "url('/src/assets/bg-01.jpg')",
      }),

      screens: {
        sm: "480px",
        md: "768px",
        lg: "1028px",
        xl: "1440px",
      },

      fontSize: {
        xs: ".75rem",
      },

      keyframes: {
        focusLeft: {
          "0%": { padding: "0.5rem 0.5rem 0.5rem 3rem"},
          "100%": { padding: "0.5rem 0.5rem 0.5rem 2rem"},
        },

        focusRight: {
          "100%": { top: 0},
          "0%": { top: 10},
        },

        borderAnimate: {
          "0%": { width: "0"},
          "100%": { width: "100%"},
        },
      },
    },
  },
  plugins: [],
};
