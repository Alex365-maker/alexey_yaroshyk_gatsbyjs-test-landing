import * as React from "react";
import styled from "styled-components";

const ErrorSpan = styled.span`
  color: red;
`;

const ErrorIndicator: React.FC = () => {
  return (
    <React.Fragment>
      <ErrorSpan>ERRROR</ErrorSpan>
    </React.Fragment>
  );
};

export default ErrorIndicator;
