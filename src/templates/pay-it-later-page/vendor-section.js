import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Paragraph from "../../components/paragraph";
import CustomButton from "../../components/custom-button";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const VendorFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  overflow-x: hidden;
`;

const PILReferralSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 2.75rem;
`;

const PILReferralFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 2.375rem;
  padding-bottom: 2.688rem;
  background-color: ${Colors.GRAY12};
`;

const PILReferralContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 2.25rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: ${WindowSize.laptopS}) {
    width: 100%;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;

    > div {
      &:first-child {
        align-items: center;
        margin-right: 0rem;
        margin-bottom: 2.25rem;
      }
      &:last-child {
        img {
          width: 100%;
        }
      }
    }
  }
`;

const MainParagraph = styled(Paragraph)`
  margin-bottom: 1.5rem;
  align-items: flex-start;

  > div:first-child {
    margin-bottom: 0.375rem;
    line-height: 3rem;
    font-size: 1.75rem;
  }

  @media (max-width: ${WindowSize.mobileL}) {
    align-items: center;

    > div:last-child {
      text-align: center;
    }
  }
`;

const TitleFrame = styled(CustomTitle)`
  width: 100%;
  margin-bottom: 1.438rem;
  text-align: center;
  line-height: 2.625rem;
  font-size: 1.75rem;
  color: ${Colors.SECONDARY};
`;

const VendorWrapper = styled.div`
  ${LayoutStyle}
  width: 71.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.313rem;
  padding-bottom: 8.125rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 0.625rem;
    padding-bottom: 7.5rem;
  }
`;

const ContentParagraph = styled(Paragraph)`
  margin-bottom: 3.125rem;

  > div {
    &:first-child {
      text-align: center;
      margin-bottom: 1.25rem;
      line-height: 2.625rem;
      font-size: 1.75rem;
      color: ${Colors.SECONDARY};
    }
    &:last-child {
      line-height: 1.5rem;
      text-align: center;
      font-size: 1rem;
      color: ${Colors.BLUE_DARK3};
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    margin-bottom: 1.938rem;

    > div:first-child {
      margin-bottom: 1.313rem;
    }
  }
`;

const VendorListWrapper = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0rem -1.125rem;

  > div {
    height: 2.25rem;
    padding: 1.875rem 1.125rem;

    img {
      max-height: 2.25rem;
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    width: 100%;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;

    > div {
      margin-top: 2.5rem;
      padding: 0rem;
    }
  }
`;

const VendorSection = ({ contents }) => {
  return (
    <VendorFrame>
      <PILReferralSectionWrapper>
        <TitleFrame>{contents.Section_4_Title}</TitleFrame>
        <PILReferralFrame>
          <PILReferralContent>
            <div>
              <MainParagraph title={contents.Section_4_Main_Paragraph.title}>
                {contents.Section_4_Main_Paragraph.content}
              </MainParagraph>
              <Link to={contents.Section_4_Button.link}>
                <CustomButton
                  width="9.063rem"
                  fontSize="0.875rem"
                  lineHeight="1.5"
                >
                  {contents.Section_4_Button.text}
                </CustomButton>
              </Link>
            </div>
            <div>
              <img
                src={contents.Section_4_Image?.localFile?.publicURL}
                alt={contents.Section_4_Image?.caption}
              />
            </div>
          </PILReferralContent>
        </PILReferralFrame>
      </PILReferralSectionWrapper>
      <VendorWrapper>
        <ContentParagraph title={contents.Section_4_Paragraph.title}>
          {contents.Section_4_Paragraph.content}
        </ContentParagraph>
        <VendorListWrapper>
          {contents.Section_4_Vendor_List.map((media, index) => (
            <div key={`vendor-item-${index}`}>
              <img src={media?.localFile?.publicURL} alt={media?.caption} />
            </div>
          ))}
        </VendorListWrapper>
      </VendorWrapper>
    </VendorFrame>
  );
};

export default VendorSection;
