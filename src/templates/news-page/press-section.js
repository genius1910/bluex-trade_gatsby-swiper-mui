import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import CustomTitle from "../../components/custom-title";
import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DateFormator } from "../../utils/date-formator";

const PressSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.BLUE_LIGHT};
`;

const PressSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 3.425rem;
  padding-bottom: 5.75rem;
`;

const PressListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-wrap: wrap;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
  }
`;

const PressItem = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 21.5rem;
  overflow-x: hidden;

  > div {
    width: 100%;

    &:first-child {
      margin-bottom: 1.625rem;

      img {
        height: 14.188rem;
      }
    }
    &:last-child {
      box-sizing: border-box;
      padding: 0rem 1rem;

      span {
        line-height: 1.875rem;
        color: ${Colors.GRAY7};
        font-size: 0.875rem;
      }
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

const ItemParagraph = styled(Paragraph)`
  width: 100%;
  margin-top: 0.688rem;

  > div {
    text-align: left;

    &:first-child {
      width: 100%;
      margin-bottom: 1rem;
      line-height: 1.875rem;
      color: ${Colors.BLUE_DARK3};
      font-size: 1.375rem;
      font-weight: bold;
    }
    &:last-child {
      width: 100%;
      line-height: 1.25rem;
      color: ${Colors.BLACK2};
      font-size: 0.75rem;
    }
  }
`;

const PressSection = ({ title, datas }) => {
  return (
    <PressSectionFrame>
      <PressSectionWrapper>
        <CustomTitle marginBottom="3.125rem" color={Colors.SECONDARY}>
          {title}
        </CustomTitle>
        <PressListWrapper>
          {datas
            .sort(function (o1, o2) {
              return Date.parse(o2.Date) - Date.parse(o1.Date);
            })
            .slice(0, 3)
            .map((news, index) => {
              const { Url, Title, Image, PreviewText } = news;
              return (
                <PressItem
                  key={`news-item-${index}`}
                  to={`/press-release/${Url}`}
                >
                  <div>
                    {
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img
                        src={Image?.localFile?.publicURL}
                        alt={Image?.caption}
                      />
                    }
                  </div>
                  <div>
                    <span>{DateFormator(news.Date)}</span>
                    <ItemParagraph title={Title}>{PreviewText}</ItemParagraph>
                  </div>
                </PressItem>
              );
            })}
        </PressListWrapper>
      </PressSectionWrapper>
    </PressSectionFrame>
  );
};

export default PressSection;
