import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { isSafari } from "react-device-detect";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import { DateFormator } from "../../utils/date-formator";
import LinkDropdown from "../../components/policy-page/link-dropdown";
import Sidebar from "../../components/policy-page/side-bar";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const TermsOfServiceMainFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const TermsOfServiceMainHeader = styled.div`
  height: 9.375rem;
  background-color: ${Colors.BG_GRAY};

  @media (max-width: ${WindowSize.mobileL}) {
    height: 5.875rem;
  }
`;

const TermsOfServiceMainWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: row;

  @media (max-width: ${WindowSize.tablet}) {
    flex-direction: column;
    padding-top: 1.875rem;
  }
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  padding: 3.125rem 0rem 6.25rem 6.25rem;
  ${DefaultFont}
  color: ${Colors.PRIMARY};
  line-height: 1.25rem;
  font-size: 0.875rem;

  > * {
    text-align: left;
  }
  ul {
    margin: 1.25rem 0rem;
  }
  @media (max-width: ${WindowSize.tablet}) {
    width: 100%;
    padding: 1.875rem 0rem;
  }
`;

const SubTitleWrapper = styled(Box)`
  ${DefaultFont}
  color: ${Colors.PRIMARY};
  line-height: 1.75rem;
  white-space: pre-wrap;
  font-size: 1.125rem;
  font-weight: bold;
`;

const ParagraphWrapper = styled.div`
  position: relative;
  margin-bottom: 1.875rem;

  > h5 {
    margin-top: 0rem;
    margin-bottom: 0.625rem;
    color: ${Colors.BLUE_DARK2};
    font-size: 0.875rem;
    font-weight: bold;
  }
  ol {
    margin-top: 0.625rem;

    li {
      margin-bottom: 1.25rem;
    }
  }
`;

const PreviewWrapper = styled(ParagraphWrapper)`
  > ol {
    padding-left: 1.25rem;
    list-style-type: upper-alpha;

    li {
      padding-left: 0.875rem;
    }
  }
`;

const ContentsWrapper = styled(ParagraphWrapper)`
  padding-left: 2rem;

  &:before {
    position: absolute;
    display: block;
    content: "${props => props.$index}";
    left: 0rem;
  }
  ol {
    position: relative;
    list-style-type: decimal-leading-zero;

    li {
      padding-left: 0.875rem;

      span {
        background-color: #fff019;
      }
    }
  }
  > ol > li {
    position: relative;

    &:before {
      position: absolute;
      display: block;
      content: "${props => props.$index}";
      left: ${props => `${props.$space - 2.125}rem`};
      top: 0rem;
    }
    > ol {
      list-style-type: lower-alpha;

      > li > ol {
        list-style-type: lower-roman;
      }
    }
  }
  &.isSafari > ol > li:before {
    left: ${props => `${props.$space - 2.375}rem`};
  }
`;

const ExhibitWrapper = styled(ParagraphWrapper)`
  > ol {
    padding-left: 1.25rem;
    list-style-type: decimal-leading-zero;

    li {
      padding-left: 0.875rem;
    }
  }
`;

const TermsOfServiceMain = ({ path, contents }) => {
  return (
    <TermsOfServiceMainFrame>
      <TermsOfServiceMainHeader />
      <TermsOfServiceMainWrapper>
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          pt="2.125rem"
        >
          <Sidebar path={path} list={contents.Sidebar_List} />
        </Box>
        <Box sx={{ display: { sm: "block", md: "none" } }}>
          <LinkDropdown
            path={path}
            links={contents.Sidebar_List?.map(item => {
              return {
                label: item?.text,
                value: item?.link,
              };
            })}
          />
        </Box>
        <ContentWrapper>
          <Box mb="0.625rem">
            <CustomTitle
              fontSize="1.5rem"
              lineHeight="2.25rem"
              textAlign="left"
              whiteSpace="pre-wrap"
            >
              {contents.Terms_Of_Service_Title}
            </CustomTitle>
          </Box>
          <Box mb="1.5rem">
            {`Last Modified: ${DateFormator(
              contents.Terms_Of_Service_Timestamp
            )}`}
          </Box>
          {contents.Terms_Of_Service_Preivew_List.map(
            ({ title, titleSize, content }, index) => (
              <PreviewWrapper key={`terms-of-service-preivew-${index}`}>
                <SubTitleWrapper $fontSize={`${titleSize}px`}>
                  {title}
                </SubTitleWrapper>
                {MarkDownTranslator(content.data.content)}
              </PreviewWrapper>
            )
          )}
          {contents.Terms_Of_Service_Paragraph_List.map(
            ({ title, titleSize, content }, index) => (
              <ContentsWrapper
                key={`terms-of-service-contents-${index}`}
                $index={`${index + 1}.`}
                $space={index >= 9 ? -0.5 : 0}
                className={isSafari && "isSafari"}
              >
                <SubTitleWrapper $fontSize={`${titleSize}px`}>
                  {title}
                </SubTitleWrapper>
                {MarkDownTranslator(content.data.content)}
              </ContentsWrapper>
            )
          )}
          {contents.Terms_Of_Service_Exhibit_List.map(
            ({ title, titleSize, content }, index) => (
              <ExhibitWrapper key={`terms-of-service-exhibit-${index}`}>
                <SubTitleWrapper $fontSize={`${titleSize}px`}>
                  {title}
                </SubTitleWrapper>
                {MarkDownTranslator(content.data.content)}
              </ExhibitWrapper>
            )
          )}
        </ContentWrapper>
      </TermsOfServiceMainWrapper>
    </TermsOfServiceMainFrame>
  );
};

export default TermsOfServiceMain;
