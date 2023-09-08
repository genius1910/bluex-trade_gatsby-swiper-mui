import React from "react";
import styled from "styled-components";

import { MainTitle } from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const PartnerSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const PartnerSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const CarriersListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 3.188rem;
  }
`;

const PartnerList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-wrap: wrap;
    height: auto;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PartnerSubList = styled(PartnerList)`
  margin-bottom: 2rem;

  > div:last-child {
    height: 2.5rem;
  }

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;

    > div:last-child img {
      height: auto;
    }
  }
`;

const PartnerMainList = styled(PartnerList)`
  align-items: flex-end;
  height: 4.375rem;

  > div:last-child {
    height: 100%;
  }

  @media (max-width: ${WindowSize.laptopS}) {
    align-items: center;
    height: fit-content;

    > div:last-child {
      height: 4.375rem;
    }
  }
`;

const PartnerItem = styled.div`
  height: 2.5rem;
  text-align: center;

  & + div {
    margin-left: 3.125rem;
  }
  img {
    height: 100%;
  }

  @media (max-width: ${WindowSize.laptopS}) {
    margin-top: 1rem;

    &:last-child {
      height: 6.25rem;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 2.5rem;

    & {
      width: 100%;

      & + div {
        margin-left: 0rem;
        margin-top: 2.5rem;
      }
    }
  }
`;

const PartnerMainSection = ({ contents }) => {
  return (
    <PartnerSectionFrame>
      <PartnerSectionWrapper>
        <CarriersListWrapper>
          <MainTitle>{contents.Section_2_Title}</MainTitle>
          <PartnerSubList>
            <PartnerItem>
              {
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  src={contents.Section_2_Main_Logo?.localFile?.publicURL}
                  alt={contents.Section_2_Main_Logo?.caption}
                />
              }
            </PartnerItem>
          </PartnerSubList>
          <PartnerMainList>
            {contents.Section_2_Logo_List.map((image, index) => (
              <PartnerItem key={`partner-main-item-${index}`}>
                {
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img src={image?.localFile?.publicURL} alt={image?.caption} />
                }
              </PartnerItem>
            ))}
          </PartnerMainList>
        </CarriersListWrapper>
      </PartnerSectionWrapper>
    </PartnerSectionFrame>
  );
};

export default PartnerMainSection;
