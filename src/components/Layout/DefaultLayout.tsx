import { Flex } from "theme-ui";
import * as React from "react";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {children}
    </Flex>
  );
};

export default DefaultLayout;
