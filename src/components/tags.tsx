/** @jsx jsx */
import * as React from "react";
import { jsx, Styled, Box } from "theme-ui";

import Head from "./Head";

export const Lead: React.FunctionComponent = props => <Styled {...props} />;
Lead.defaultProps = {
  as: "p",
  sx: {
    variant: "textStyles.largeBody",
  },
};

export const IntroLead: React.FC = props => <Styled {...props} />;
IntroLead.defaultProps = {
  as: "p",
  sx: {
    variant: "textStyles.l4",
  },
};

export const Caption: React.FunctionComponent = props => <Styled {...props} />;
Caption.defaultProps = {
  as: "figcaption",
  sx: {
    fontSize: [1, 2],
  },
};

const ContentBodyH2: React.FC = ({ sx, children, ...props }: any) => (
  <Styled.h2
    sx={{
      variant: "textStyles.l4",
      mt: [6, 7],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Styled.h2>
);

const ContentBodyH3: React.FC = ({ sx, children, ...props }: any) => (
  <Styled.h3
    sx={{
      variant: "textStyles.l5",
      mt: [6, 7],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Styled.h3>
);

const includes = {
  Box,
  Head,
  IntroLead,
  Lead,
};

export default {
  figcaption: Caption,
  h2: ContentBodyH2,
  h3: ContentBodyH3,
  ...includes,
}
