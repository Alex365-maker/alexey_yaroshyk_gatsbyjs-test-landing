/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      div,
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 2s cubic-bezier(0.19, 1, 0.22, 1);
      }
      svg {
        fill: currentColor;
      }
      .tl-edges {
        overflow-x: initial !important;
      }
      body { background-color:#ffffff; }
    `}
  />
);

export default GlobalStyles
