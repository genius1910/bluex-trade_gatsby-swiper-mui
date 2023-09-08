import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import ReceivingFundsFeeModal from "./receiving-funds-fee-modal";
import LocalRailFeesModal from "./local-rail-fees-modal";

import Paragraph from "../../components/paragraph";
import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import { StylePartialString } from "../../utils/style-partial-string";
import { ComponentPartialString } from "../../utils/component-partial-string";
import { NavigateNewTab } from "../header";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { DefaultFont } from "../../constants/style/default-font";
import { Colors } from "../../constants/share/colors";

const PricingDetailsFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  overflow-x: hidden;
`;

const PricingDetailsBg = styled.div`
  position: absolute;
  width: 100%;
  height: 31.875rem;
  background-color: ${Colors.SECONDARY};

  &::after {
    content: "";
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    width: 0rem;
    height: 0rem;
    display: block;
    border-left: 100vw solid transparent;
    border-bottom: 8rem solid ${Colors.WHITE};
  }
`;

const PricingDetailsTitleFrame = styled.div`
  @media (max-width: ${WindowSize.laptopS}) {
    margin: 0rem -1.25rem;
    padding: 2.5rem 1.25rem;
    background-color: ${Colors.SECONDARY};
  }
`;

const PricingDetailsWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  box-sizing: border-box;
  padding-top: 8.375rem;
  padding-bottom: 6.25rem;

  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 5.875rem;
  }
`;

const TableFrame = styled.div`
  width: 48.75rem;
  padding: 2.5rem;
  border-radius: 1.25rem;
  margin: 2.5rem auto;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  background-color: ${Colors.WHITE};
  ${DefaultFont}
  white-space: pre-wrap;
  color: ${Colors.PRIMARY};

  @media (max-width: ${WindowSize.laptopS}) {
    width: auto;
    margin-top: 1.875rem;
    box-shadow: none;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    padding: 0rem;
  }
`;

const TableTitle = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  @media (max-width: ${WindowSize.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const PriceListFrame = styled.ul`
  list-style-type: none;
  padding-left: 1.688rem;

  > li {
    position: relative;
    margin-bottom: 1.875rem;

    &:after {
      content: "";
      position: absolute;
      top: 0.75rem;
      left: -1.5rem;
      height: 0.5rem;
      width: 0.5rem;
      transform: rotate(45deg);
      display: block;
      background-color: ${Colors.BLUE_GREEN};
    }
    > div:first-child {
      line-height: 1.875rem;
      color: ${Colors.SECONDARY};
      font-size: 1.125rem;
      font-weight: bold;
    }
  }
`;

const PriceItemTitle = styled.div`
  display: flex;
  align-items: center;

  > div {
    &:first-child {
      flex-grow: 0;
      flex-shrink: 0;
      margin-right: 1.125rem;

      @media (max-width: ${WindowSize.tablet}) {
        flex: 1 1 auto;
      }
    }
  }
`;

const ItemTitlePrice = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.688rem;
  color: ${Colors.SECONDARY};
  font-size: 0.875rem;
`;

const PriceItemContent = styled.div`
  width: 100%;
  margin-top: 0.625rem;
  line-height: 1.5rem;
  font-size: 1rem;
`;

const ItemUnitInfo = styled.div`
  width: 100%;
  margin-top: 0.625rem;
  line-height: 1.125rem;
  color: ${Colors.GRAY5};
  font-size: 0.75rem;
`;

const ItemSubListFrame = styled.ul`
  margin-top: 0.625rem;
  padding-left: 1.688rem;

  > li {
    position: relative;
    display: flex;
    align-items: center;
    list-style-type: none;
    line-height: 1.688rem;
    font-weight: bold;

    &:after {
      content: "•";
      position: absolute;
      top: 0rem;
      left: -1.5rem;
      height: 0.5rem;
      width: 0.5rem;
      display: block;
      color: ${Colors.BORDER_GRAY};
    }
    & + li {
      margin-top: 0.25rem;
    }
    > div {
      line-height: 1.75rem;

      &:first-child {
        flex-grow: 0;
        flex-shrink: 0;
        max-width: 80%;
        margin-right: 1.125rem;
      }
      &:last-child {
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 0.688rem;
        color: ${Colors.SECONDARY};
        font-size: 0.875rem;
      }
    }
    @media (max-width: ${WindowSize.tablet}) {
      align-items: flex-start;

      > div {
        &:first-child {
          max-width: 11rem;
          margin-right: 0rem;
        }
        &:last-child {
          margin-left: 0rem;
        }
      }
    }
  }
`;

const DotDivider = styled.div`
  flex: 1 1 auto;
  height: 0rem;
  border-top: dashed 0.063rem ${Colors.BORDER_GRAY};

  @media (max-width: ${WindowSize.tablet}) {
    border: none;
  }
`;

const TableComment = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem 0.625rem 0.75rem;
  background-color: ${Colors.BG_GRAY};
  line-height: 1.375rem;
  font-size: 0.875rem;

  > span:first-child {
    margin-right: 0.125rem;
  }
`;

const CommentTextBtn = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const paragraphTitleStyle = {
  lineHeight: "3.375rem",
  fontSize: "2.25rem",
};

const ReceivingFundsFeeModalComponent = contents => {
  const [showReceivingFundsModal, setShowReceivingFundsModal] = useState(false);

  return ({ children }) => (
    <>
      <CommentTextBtn onClick={() => setShowReceivingFundsModal(true)}>
        {children}
      </CommentTextBtn>
      {showReceivingFundsModal ? (
        <ReceivingFundsFeeModal
          contents={contents}
          showModal={showReceivingFundsModal}
          onCloseModal={setShowReceivingFundsModal}
        />
      ) : null}
    </>
  );
};

const LocalRailFeesModalComponent = contents => {
  const [showLocalRailFeesModal, setShowLocalRailFeesModal] = useState(false);

  return ({ children }) => (
    <>
      <CommentTextBtn onClick={() => setShowLocalRailFeesModal(true)}>
        {children}
      </CommentTextBtn>
      {showLocalRailFeesModal ? (
        <LocalRailFeesModal
          contents={contents}
          showModal={showLocalRailFeesModal}
          onCloseModal={setShowLocalRailFeesModal}
        />
      ) : null}
    </>
  );
};

const PricingDetails = ({ contents, pricings }) => {
  const ComponentTextButton = (comment, others) => {
    if (!comment) {
      return null;
    }

    if (others === "receiving-funds-fee-modal") {
      return (
        <PriceItemContent>
          {ComponentPartialString(
            comment,
            contents.Modal_Trigger_Keyword,
            ReceivingFundsFeeModalComponent(contents)
          )}
        </PriceItemContent>
      );
    }

    if (others === "local-rail-fees-modal") {
      return (
        <PriceItemContent>
          {ComponentPartialString(
            comment,
            contents.Modal_Trigger_Keyword,
            LocalRailFeesModalComponent(contents)
          )}
        </PriceItemContent>
      );
    }

    return <PriceItemContent>{comment}</PriceItemContent>;
  };

  return (
    <PricingDetailsFrame>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <PricingDetailsBg />
      </Box>
      <PricingDetailsWrapper>
        <PricingDetailsTitleFrame>
          <Paragraph
            title={contents.Section_1_Paragraph.title}
            titleClass={paragraphTitleStyle}
            titleTextAlign="center"
            titleColor={Colors.WHITE}
            contentTextAlign="center"
            contentColor={Colors.WHITE}
          >
            {contents.Section_1_Paragraph.content}
          </Paragraph>
        </PricingDetailsTitleFrame>
        {pricings.map((pricing, index) => (
          <TableFrame key={`pricing-table-${index}`}>
            <TableTitle>
              <CustomTitle
                marginBottom="1rem"
                lineHeight="2.5rem"
                whiteSpace="pre-wrap"
                fontSize="1.5rem"
              >
                {pricing.Title}
              </CustomTitle>
              <CustomTitle
                lineHeight="1.5rem"
                whiteSpace="pre-wrap"
                fontSize="1rem"
              >
                {pricing.Content.data.Content}
              </CustomTitle>
            </TableTitle>
            <PriceListFrame>
              {pricing.Details.map(
                ({ title, others, content, comment, list }, itemIndex) => (
                  <li key={`pricings-${itemIndex}`}>
                    <PriceItemTitle>
                      <div>{title}</div>
                      {others?.startsWith("$") ? (
                        <>
                          <DotDivider />
                          <ItemTitlePrice>{others}</ItemTitlePrice>
                        </>
                      ) : null}
                    </PriceItemTitle>
                    {content ? (
                      <PriceItemContent>
                        {StylePartialString(content, "no payment fees", {
                          fontWeight: "bold",
                        })}
                      </PriceItemContent>
                    ) : null}
                    {others === "Currency" ? (
                      <ItemUnitInfo>{others}</ItemUnitInfo>
                    ) : null}
                    <ItemSubListFrame>
                      {list?.map(({ name, price }, index) => (
                        <li key={`${name}-${index}`}>
                          <div>{name}</div>
                          <DotDivider />
                          <div> {price}</div>
                        </li>
                      ))}
                    </ItemSubListFrame>
                    {ComponentTextButton(comment, others)}
                  </li>
                )
              )}
            </PriceListFrame>
            {pricing.Note && (
              <TableComment>
                <span>*</span>
                <span>{pricing.Note.data.Note}</span>
              </TableComment>
            )}
          </TableFrame>
        ))}
        <Box mt="5rem" textAlign="center">
          <CustomTitle marginBottom="1.875rem" fontSize="2.25rem">
            {contents.Section_3_Title}
          </CustomTitle>
          <CustomButton
            padding="0.75rem 2.75rem 0.75rem 2.813rem"
            borderRadius="1.5rem"
            onClick={() => NavigateNewTab(contents.Section_3_Button.link)}
          >
            {contents.Section_3_Button.text}
          </CustomButton>
        </Box>
      </PricingDetailsWrapper>
    </PricingDetailsFrame>
  );
};

export default PricingDetails;
