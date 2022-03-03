// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/typography")],
// };

const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "[data-rehype-pretty-code-fragment] pre": {
              ".line::before": {
                content: "counter(line)",
                counterIncrement: "line",
                display: "inline-block",
                width: "1rem",
                marginRight: "1rem",
                textAlign: "right",
                color: colors.slate[600],
              },

              ".line--highlighted::before": {
                color: colors.slate[400],
              },
            },
            pre: {
              opacity: 0.98,
              // background: "rgba(200,200,255,0.05)",
              padding: "0.75rem 0",
              lineHeight: 2,

              "> code": {
                display: "grid",
                counterReset: "line",

                ".word": {
                  background: "rgba(200,200,255,0.15)",
                  padding: "0.25rem",
                  borderRadius: "0.25rem",
                },
                "> .line": {
                  padding: "0 1.25rem",
                  borderLeft: `2px solid transparent`,
                },
                "> .line.line--highlighted": {
                  background: "rgba(200,200,255,0.1)",
                  borderLeftColor: colors.blue[400],
                },
              },
            },
            ":not(pre) > code": {
              // background: "rgba(200,200,255,0.1)",
              padding: "0.25rem",
              fontSize: "0.95rem !important",
              borderRadius: "0.25rem",
            },
          },
        },
      },
    },
  },
};
