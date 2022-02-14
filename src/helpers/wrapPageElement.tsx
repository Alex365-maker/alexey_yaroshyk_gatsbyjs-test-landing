/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import * as React from "react";
import theme from "../gatsby-plugin-theme-ui";
import { WrapPageElementProps } from "../interfaces";
import components from "../components/tags";

import GlobalStyles from "../components/GlobalStyles";

const wrapPageElement: React.FunctionComponent<WrapPageElementProps> = ({
  element,
}) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <GlobalStyles />
      {element}
    </MDXProvider>
  </ThemeProvider>
);

export default wrapPageElement;
