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

const PolicyTemplateFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const PolicyTemplateHeader = styled.div`
  height: 9.375rem;
  background-color: ${Colors.BG_GRAY};

  @media (max-width: ${WindowSize.mobileL}) {
    height: 5.875rem;
  }
`;

const PolicyTemplateWrapper = styled.div`
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

const ParagraphWrapper = styled.div`
  position: relative;
  margin-bottom: 1.875rem;
  padding-left: ${props =>
    props.$index ? `${0.5 - props.$indexLeft}rem` : "0rem"};

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

  &:before {
    position: absolute;
    display: block;
    content: "${props => props.$index}";
    left: -0.25rem;
    top: 0.25rem;
    font-size: 1.125rem;
    font-weight: bold;
  }
  ol {
    position: relative;
    padding-left: ${props => `${props.$isOrderList ? 0.75 : 0}rem`};

    li {
      padding-left: 0.875rem;
    }
  }
  > ol {
    > li {
      position: relative;

      &:before {
        position: absolute;
        display: block;
        content: "${props => props.$index}";
        left: ${props => `${props.$indexLeft}rem`};
        top: 0rem;
      }
      &:nth-child(n + 10):before {
        left: ${props => `${props.$indexLeft - 0.45}rem`};
      }
      > ol {
        list-style-type: lower-alpha;

        > li > ol {
          list-style-type: lower-roman;
        }
      }
    }
  }
  &.isSafari > ol > li {
    &:before {
      left: ${props => `${props.$indexLeft - 0.25}rem`};
    }
    &:nth-child(n + 10):before {
      left: ${props => `${props.$indexLeft - 0.7}rem`};
    }
  }
`;

const SubTitleWrapper = styled(CustomTitle)`
  margin-bottom: 1rem;
  line-height: 1.75rem;
  text-align: left;
  white-space: pre-wrap;
  font-size: ${props => props.$fontSize};
  font-weight: bold;
  color: ${Colors.PRIMARY};
`;

const PolicyTemplateMain = ({
  path,
  sidebarList,
  title,
  date,
  paragraphs,
  isOrderList = true,
  orderStartIndex = 0,
}) => {
  return (
    <PolicyTemplateFrame>
      <PolicyTemplateHeader />
      <PolicyTemplateWrapper>
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          pt="2.125rem"
        >
          <Sidebar path={path} list={sidebarList} />
        </Box>
        <Box sx={{ display: { sm: "block", md: "none" } }}>
          <LinkDropdown
            path={path}
            links={sidebarList?.map(item => {
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
              {title}
            </CustomTitle>
          </Box>
          <Box mb="1.5rem">{`Last Modified: ${DateFormator(date)}`}</Box>
          {paragraphs.map(({ title, titleSize, content }, index) => (
            <ParagraphWrapper
              key={`policy-template-paragraphs-${index}`}
              $isOrderList={isOrderList}
              $index={
                isOrderList &&
                index > orderStartIndex &&
                `${index - orderStartIndex}.`
              }
              $indexLeft={index > 9 + orderStartIndex ? -2.125 : -1.625}
              className={isSafari && "isSafari"}
            >
              <SubTitleWrapper $fontSize={`${titleSize}px`}>
                {title}
              </SubTitleWrapper>
              {MarkDownTranslator(content?.data?.content)}
            </ParagraphWrapper>
          ))}
        </ContentWrapper>
      </PolicyTemplateWrapper>
    </PolicyTemplateFrame>
  );
};

export default PolicyTemplateMain;
