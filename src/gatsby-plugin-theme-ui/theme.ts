import palette from "./palette.js";

const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  maxWidth: "20em",
  color: "heading",
  letterSpacing: "-1px",
  "&:before": {
    content: "''",
    display: "block",
    height: 0,
    width: 0,
  },
};

const theme: Record<string, any> = {
  colors: {
    ...palette,
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: "Georgia, serif",
    monospace: "Corrier, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  textStyles: {
    heading,
    body: {
      fontSize: [16, 16, 0, 1],
    },
    largeBody: {
      fontSize: [20, 20, 1, 2],
      lineHeight: [1.45, 1.45, 1.5, 1.5],
    },
    smallBody: {
      fontWeight: "heading",
      fontSize: [14, null, 0],
      lineHeight: [1.71, null, 1.78],
    },
    l1: {
      fontSize: [35, null, 5, 6],
      lineHeight: [1.2, null, 1.14, 1.14],
      variant: "textStyles.heading",
      "&::before": {
        mt: ["calc((1 - 1.2) * 0.5em)", null, "calc((1 - 1.14) * 0.5em)"],
      },
    },
    l2: {
      fontSize: [31, null, 4, 5],
      lineHeight: [1.22, null, 1.18, 1.18],
      variant: "textStyles.heading",
      "&::before": {
        mt: ["calc((1 - 1.22) * 0.5em)", null, "calc((1 - 1.18) * 0.5em)"],
      },
    },
    l3: {
      fontSize: [25, null, 3, 4],
      lineHeight: [1.24, null, 1.22, 1.22],
      variant: "textStyles.heading",
      "&::before": {
        mt: ["calc((1 - 1.24) * 0.5em)", null, "calc((1 - 1.21) * 0.5em)"],
      },
    },
    l4: {
      fontSize: [25, null, 2, 3],
      lineHeight: [1.24, null, 1.21, 1.31],
      variant: "textStyles.heading",
      mb: 2,
      "&::before": {
        mt: [
          "calc((1 - 1.24) * 0.5em)",
          null,
          "calc((1 - 1.21) * 0.5em)",
          "calc((1 - 1.31) * 0.5em)",
        ],
      },
    },
    l5: {
      variant: "textStyles.largeBody",
      color: "heading",
      fontWeight: ["bold", "normal"],
      mb: 2,
      "&::before": {
        mt: [
          "calc((1 - 1.24) * 0.5em)",
          null,
          "calc((1 - 1.21) * 0.5em)",
          "calc((1 - 1.31) * 0.5em)",
        ],
      },
    },
    l6: {
      variant: "textStyles.smallBody",
      color: "heading",
      fontWeight: ["bold", "normal"],
      mb: 2,
      "&::before": {
        mt: [
          "calc((1 - 1.24) * 0.5em)",
          null,
          "calc((1 - 1.21) * 0.5em)",
          "calc((1 - 1.31) * 0.5em)",
        ],
      },
    },
  },
  fontSizes: [18, 20, 28, 35, 43, 54, 77],
  fontSizesLarge: [24, 27, 37, 46, 57, 72, 102],
  space: [0, 5, 10, 15, 20, 40, 60, 80, 120, 160, 200, 235],
  styles: {
    root: {
      bg: "background",
      color: "text",
      fontFamily: "body",
      fontSize: [16, 16, 0, 1],
      fontWeight: "body",
      letterSpacing: "-0.34px",
      lineHeight: 1.5,
    },
    p: {
      maxWidth: "34em",
      mb: 25,
      ":first-of-type": {
        mb: 0,
      },
      "&::before": {
        content: "''",
        display: "block",
        height: 0,
        width: 0,
        mt: "calc((1 - 1.5) * 0.5em)",
      },
    },
    a: {
      textDecoration: "none",
    },
    img: {
      maxWidth: "100%",
    },
  },
};

export default theme;
