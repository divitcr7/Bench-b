import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      height: {
        headerBig: "4rem",
        headerSmall: "3.5rem",
      },
      // Gilroy - h1, h5, h6, body1, body1bolt, body2 , body2bolt, smallBody, caption

      fontSize: {
        h1Big: "5.75rem", // 92px
        h1Small: "2.625rem", // 42px
        h2Big: "4.875rem", // 78px
        h2Small: "2rem", // 32px
        h3Big: "2.25rem", // 36px
        h3Small: "1.75rem", // 28px
        h4Big: "1.75rem", // 28px
        h4Small: "1.375rem", // 22px
        h5Big: "1.375rem", // 22px
        h5Small: "1.125rem", // 18px
        h6Big: "1.125rem", // 18px
        h6Small: "1rem", // 16px
        body1Big: "1.125rem", // 18px
        body1Small: "1.125rem", // 18px
        body1BoltBig: "1.125rem", // 18px
        body1BoltSmall: "1.125rem", // 18px
        body2Big: "1rem", // 16px
        body2Small: "1rem", // 16px
        body2BoltBig: "1rem", // 16px
        body2BoltSmall: "1rem", // 16px
        smallBodyBig: "0.875rem", // 14px
        smallBodySmall: "0.875rem", // 14px
        overlineBig: "0.875rem", // 14px
        overlineSmall: "0.875rem", // 14px
        captionBig: "0.75rem", // 12px
        captionSmall: "0.75rem", // 12px
        menuBig: "4.25rem", // 68px
        menuSmall: "2.5rem", // 40px
        btnBig: "0.875rem", // 14px
        btnSmall: "0.875rem", // 14px
      },
      lineHeight: {
        h1Big: "5.75rem", // 92px
        h1Small: "3.5rem", // 56px
        h2Big: "6rem", // 96px
        h2Small: "2.375rem", // 38px
        h3Big: "2.875rem", // 46px
        h3Small: "2rem", // 32px
        h4Big: "2.375rem", // 38px
        h4Small: "1.625rem", // 26px
        h5Big: "1.875rem", // 30px
        h5Small: "1.5625rem", // 25px
        h6Big: "1.625rem", // 26px
        h6Small: "1.25rem", // 20px
        body1Big: "1.875rem", // 30px
        body1Small: "1.875rem", // 30px
        body1BoltBig: "1.875rem", // 30px
        body1BoltSmall: "1.875rem", // 30px
        body2Big: "1.75rem", // 28px
        body2Small: "1.75rem", // 28px
        body2BoltBig: "1.75rem", // 28px
        body2BoltSmall: "1.75rem", // 28px
        smallBodyBig: "1.5rem", // 24px
        smallBodySmall: "1.5rem", // 24px
        overlineBig: "1.5rem", // 24px
        overlineSmall: "1.5rem", // 24px
        captionBig: "0.875rem", // 14px
        captionSmall: "0.875rem", // 14px
        menuBig: "4.875rem", // 78px
        menuSmall: "3.125rem", // 50px
        btnBig: "1.75rem", // 28px
        btnSmall: "1.75rem", // 28px
      },

      spacing: {
        // containerTopBig: "7rem",
        // containerTopSmall: "5rem",
        containerSideBig: "5rem",
        containerSideSmall: "1rem",
        eightyBig: "5rem",
        eightySmall: "2rem",
        fiftySixBig: "3.5rem",
        fiftySixSmall: "1.5rem",
        fortyEightBig: "2.4rem",
        fortyEightSmall: "1.8rem",
        fortyBig: "2rem",
        fortySmall: "1.5rem",
        thirtyTwoBig: "1.6rem",
        thirtyTwoSmall: "1.2rem",
        twentyFourBig: "1.2rem",
        twentyFourSmall: "0.9rem",
        sixteen: "1rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
