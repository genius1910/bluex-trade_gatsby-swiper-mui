import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import CustomTitle from "../../components/custom-title";
import {
  LayoutStyle,
  WindowSize,
  WindowSizeValue,
} from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DateFormator } from "../../utils/date-formator";
import DotsPagination from "../../components/dots-pagination";
import UseWindowDimensions from "../../utils/use-window-dimensions";

const NewsListSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const NewsListSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  width: 65rem;
  box-sizing: border-box;
  padding-bottom: 5.563rem;

  > div {
    margin-top: 3.125rem;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    width: 100%;
  }
`;

const MainListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3rem;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-wrap: wrap;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
  }
`;

const NewsItem = styled(OutboundLink)`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  > div:last-child {
    box-sizing: border-box;

    span {
      line-height: 1.875rem;
      color: ${Colors.GRAY7};
      font-size: 0.875rem;
    }
  }
  & + a {
    margin-left: 1.25rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;

    > div {
      &:first-child {
        margin-bottom: 0.5rem;

        img {
          width: 100%;
          height: auto;
        }
      }
      &:last-child {
        padding: 0rem;
      }
    }
    & + a {
      margin-left: 0rem;
      margin-top: 2.5rem;
    }
  }
`;

const MainNewsItem = styled(NewsItem)`
  width: 21.5rem;

  > div {
    width: 100%;

    &:first-child {
      margin-bottom: 1.625rem;

      img {
        height: 14.188rem;
      }
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    > div:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;

const SubNewsItem = styled(NewsItem)`
  width: 12rem;
  height: 14.5rem;

  > div {
    width: 100%;

    &:first-child {
      margin-bottom: 0.625rem;

      img {
        height: 8.125rem;
      }
    }
    &:last-child {
      > div:last-child {
        line-height: 1.125rem;
        font-size: 0.875rem;
      }
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 21.5rem;

    > div {
      width: 100%;

      &:first-child {
        margin-bottom: 0.5rem;

        img {
          height: 14.188rem;
        }
      }
      &:last-child {
        > div:last-child {
          line-height: 1.875rem;
          font-size: 1.375rem;
        }
      }
    }
  }
`;

const NewsListSection = ({ datas }) => {
  const [newsIndex, setNewsIndex] = useState(0);
  const dimensions = UseWindowDimensions();
  const mainNewsNum = dimensions.width > WindowSizeValue.mobileL ? 3 : 5;
  const contentWidth = dimensions.width - 128;
  const newsPerPage =
    !dimensions.width || Math.floor(contentWidth / 214) > 5
      ? 5
      : Math.floor(contentWidth / 214);
  const newsTotal = datas ? datas.length : 0;
  const total = Math.ceil((newsTotal - 3) / newsPerPage);

  return (
    <NewsListSectionFrame>
      <NewsListSectionWrapper>
        <MainListWrapper>
          {typeof window !== "undefined" &&
            datas
              .sort(function (o1, o2) {
                return Date.parse(o2.timeStamp) - Date.parse(o1.timeStamp);
              })
              .slice(0, mainNewsNum)
              .map(({ description, link, timeStamp, image }, index) => (
                <MainNewsItem
                  key={`news-item-${index}`}
                  href={link}
                  target="_blank"
                  title={description.title}
                  rel="noreferrer"
                >
                  <div>
                    {
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img
                        src={image?.localFile?.publicURL}
                        alt={image?.caption}
                      />
                    }
                  </div>
                  <div>
                    <span>{DateFormator(timeStamp)}</span>
                    <CustomTitle
                      textAlign="left"
                      lineHeight="1.875rem"
                      fontFamily="roboto"
                      fontSize="1.375rem"
                      fontWeight="bold"
                      color={Colors.BLUE_DARK3}
                      whiteSpace="pre-wrap"
                    >
                      {description.title}
                    </CustomTitle>
                  </div>
                </MainNewsItem>
              ))}
        </MainListWrapper>
        <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
          <MainListWrapper>
            <DotsPagination
              pageIndex={newsIndex}
              setPageIndex={setNewsIndex}
              total={total}
            >
              {typeof window !== "undefined" &&
                datas
                  .sort(function (o1, o2) {
                    return Date.parse(o2.timeStamp) - Date.parse(o1.timeStamp);
                  })
                  .slice(
                    3 + newsIndex * newsPerPage,
                    3 + (newsIndex + 1) * newsPerPage
                  )
                  .map(({ description, link, timeStamp, image }, index) => (
                    <SubNewsItem
                      key={`subnews-item-${index}`}
                      href={link}
                      target="_blank"
                      title={description.title}
                      rel="noreferrer"
                    >
                      <div>
                        {
                          // eslint-disable-next-line jsx-a11y/img-redundant-alt
                          <img
                            src={image?.localFile?.publicURL}
                            alt={image?.caption}
                          />
                        }
                      </div>
                      <div>
                        <span>{DateFormator(timeStamp)}</span>
                        <CustomTitle
                          textAlign="left"
                          color={Colors.SECONDARY}
                          fontWeight="bold"
                        >
                          {description.title}
                        </CustomTitle>
                      </div>
                    </SubNewsItem>
                  ))}
            </DotsPagination>
          </MainListWrapper>
        </Box>
      </NewsListSectionWrapper>
    </NewsListSectionFrame>
  );
};

export default NewsListSection;
