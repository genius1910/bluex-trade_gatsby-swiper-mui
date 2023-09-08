import React from "react";
import styled from "styled-components";

import { NavigateNewTab } from "../../header";
import { DateMMYYFormator } from "../../../utils/date-formator";
import Paragraph from "../../../components/paragraph";
import CustomTitle from "../../../components/custom-title";
import { Colors } from "../../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../../constants/style/layout";

const ResourcesListFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const ResourcesListWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 1.25rem;
  padding-bottom: 5rem;
`;

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1.25rem;

  > div:first-child {
    margin-bottom: 1.875rem;
    line-height: 1.75rem;
    text-align: left;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${Colors.BLUE4};
  }
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.875rem;

  > div:first-child {
    margin-bottom: 0.625rem;
    line-height: 1.375rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${Colors.GRAY13};
  }
`;

const ItemWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.625rem;
  padding: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${Colors.WHITE};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  > div {
    &:first-child {
      flex: 0 0 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      background-color: ${Colors.BLUE_LIGHT7};
    }
    &:last-child {
      flex: 1 1 auto;
      display: flex;
      flex-direction: row;

      > div:last-child {
        flex: 0 0 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.25rem;
        font-size: 0.75rem;
        font-weight: 400;
        color: ${Colors.GRAY13};
      }
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    padding: 0.5rem;

    > div:last-child {
      flex-direction: column;

      > div:last-child {
        flex: 1 1 auto;
        justify-content: flex-end;
      }
    }
  }
`;

const ItemParagraph = styled(Paragraph)`
  flex: 1 1 auto;
  align-items: flex-start;
  padding: 0rem 2.5rem;

  > div {
    &:first-child {
      margin-bottom: 0rem;
      line-height: 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: ${Colors.SECONDARY};
    }
    &:last-child {
      line-height: 1.25rem;
      font-size: 0.75rem;
      font-weight: 400;
      color: ${Colors.PRIMARY};
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0rem 0rem 0rem 1rem;
  }
`;

const PILResourcesListSection = ({ contents }) => {
  const TYPE_GUIDES = "Guides";
  const TYPE_FLYERS = "Flyers";

  const CategoryItem = ({ title, guides, flyers }) => {
    return (
      <CategoryItemWrapper>
        <CustomTitle>{title}</CustomTitle>
        {guides.length > 0 ? (
          <TypeWrapper>
            <CustomTitle>{contents.Section_2_Guides_Title}</CustomTitle>
            {guides.map(({ link, content, timestamp }, index) => (
              <ItemWrapper
                key={`guides-item-${index}`}
                onClick={() => NavigateNewTab(link)}
              >
                <div>
                  <img
                    src={`${contents.Section_2_Guides_Icon?.localFile?.publicURL}`}
                    alt=""
                  />
                </div>
                <div>
                  <ItemParagraph title={content.title}>
                    {content.content}
                  </ItemParagraph>
                  <div>{`Updated on: ${DateMMYYFormator(timestamp)}`}</div>
                </div>
              </ItemWrapper>
            ))}
          </TypeWrapper>
        ) : null}
        {flyers.length > 0 ? (
          <TypeWrapper>
            <CustomTitle>{contents.Section_2_Flyers_Title}</CustomTitle>
            {flyers.map(({ link, content, timestamp }, index) => (
              <ItemWrapper
                key={`flyers-item-${index}`}
                onClick={() => NavigateNewTab(link)}
              >
                <div>
                  <img
                    src={`${contents.Section_2_Flyers_Icon?.localFile?.publicURL}`}
                    alt=""
                  />
                </div>
                <div>
                  <ItemParagraph title={content.title}>
                    {content.content}
                  </ItemParagraph>
                  <div>{`Updated on: ${DateMMYYFormator(timestamp)}`}</div>
                </div>
              </ItemWrapper>
            ))}
          </TypeWrapper>
        ) : null}
      </CategoryItemWrapper>
    );
  };

  return (
    <ResourcesListFrame>
      <ResourcesListWrapper>
        <CategoryItem
          title={contents.Section_2_Referrer_Title}
          guides={contents.Section_2_Referrer_List?.filter(
            data => data.type === TYPE_GUIDES
          )}
          flyers={contents.Section_2_Referrer_List?.filter(
            data => data.type === TYPE_FLYERS
          )}
        />
        <CategoryItem
          title={contents.Section_2_PIL_Customer_Title}
          guides={contents.Section_2_PIL_Customer_List?.filter(
            data => data.type === TYPE_GUIDES
          )}
          flyers={contents.Section_2_PIL_Customer_List?.filter(
            data => data.type === TYPE_FLYERS
          )}
        />
      </ResourcesListWrapper>
    </ResourcesListFrame>
  );
};

export default PILResourcesListSection;
