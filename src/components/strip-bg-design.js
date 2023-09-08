import React from "react";
import styled from "styled-components";

import { WindowSize } from "../constants/style/layout";

const StripBgWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  & > div {
    transform: rotate(-30deg);
    border-radius: ${props => props.$borderRadius};
  }
  @media (max-width: ${WindowSize.laptopL}) {
    display: none;
  }
`;

const StripBgDesign = ({
  borderRadius = "1.688rem",
  className,
  children,
  ...props
}) => {
  return (
    <StripBgWrapper
      className={className}
      $borderRadius={borderRadius}
      {...props}
    >
      {children}
    </StripBgWrapper>
  );
};

export default StripBgDesign;
