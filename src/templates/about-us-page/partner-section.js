import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const PartnerSectionFrame = styled.div`
  position: relative;
  background-color: ${Colors.WHITE};
  width: 100%;
  height: fit-content;
  background-position: center;
  background-size: cover;
`;

const PartnerSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9.375rem;
  padding-bottom: 4.375rem;

  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 4.375rem;
    padding-bottom: 0rem;
  }
`;

const LogoListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: -0.625rem;
  margin-bottom: 5rem;

  @media (max-width: ${WindowSize.laptopS}) {
    justify-content: center;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    margin: 0rem;
    margin-bottom: 4.375rem;
  }
`;

const InvestorItem = styled.div`
  flex: 0 0 18.75rem;
  height: 5rem;
  margin: 0.625rem;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 100%;
    margin: 0rem;
  }
`;

const PartnerItem = styled.div`
  flex: 0 0 13.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 0.625rem;

  img {
    max-width: 13.75rem;
  }

  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 50%;
    margin: 0rem;

    img {
      max-width: 100%;
    }
  }
`;

const PartnerSection = ({ contents }) => {
  return (
    <PartnerSectionFrame>
      <PartnerSectionWrapper>
        <CustomTitle
          lineHeight="2.625rem"
          fontSize="1.75rem"
          marginBottom="3.0625rem"
        >
          {contents.Section_5_Investors_Title}
        </CustomTitle>
        <LogoListWrapper>
          {contents.Section_5_Investors_Logo.map((logo, index) => (
            <InvestorItem key={`investor-item-${index}`}>
              <img src={logo?.localFile?.publicURL} alt={logo?.caption} />
            </InvestorItem>
          ))}
        </LogoListWrapper>
        <CustomTitle
          lineHeight="2.625rem"
          fontSize="1.75rem"
          marginBottom="3.0625rem"
        >
          {contents.Section_5_Partners_Title}
        </CustomTitle>
        <LogoListWrapper>
          {contents.Section_5_Partners_Logo.map((logo, index) => (
            <PartnerItem key={`partner-item-${index}`}>
              <img src={logo?.localFile?.publicURL} alt={logo?.caption} />
            </PartnerItem>
          ))}
        </LogoListWrapper>
      </PartnerSectionWrapper>
    </PartnerSectionFrame>
  );
};

export default PartnerSection;
