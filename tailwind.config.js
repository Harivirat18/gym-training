/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1240px",
    },
    extend: {
      colors: {
        corange: {
          50: "#ed563b",
          100: "#f9735b",
        },
        chead: {
          50: "#232d39",
          100: '#fff',
        },
        ctext: {
          50: '#7a7a7a',
          100:'#007bff',
        },
        cborder: {
          50: "#ddd",
          shadow:"rgb(0 0 0 / 10%)",
        },
        chead: {
          header:"rgb(35 45 57 / 80%)"
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/image/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}

