import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import CustomModal from "../../components/custom-modal";
import CustomTitle from "../../components/custom-title";
import { WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

const ModalWrapper = styled.div`
  position: relative;
  padding: 1.875rem 1.25rem;
  ${DefaultFont}
  color: ${Colors.PRIMARY};
  font-size: 0.875rem;
`;

const ListFrame = styled.ul`
  margin-top: 1.875rem;
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
      &:first-child {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 1.125rem;
      }
      &:last-child {
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 0.688rem;
        color: ${Colors.SECONDARY};
      }
    }

    @media (max-width: ${WindowSize.tablet}) {
      align-items: flex-start;

      > div {
        &:first-child {
          max-width: 9.688rem;
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

const ReceivingFundsFeeModal = ({ contents, showModal, onCloseModal }) => {
  return (
    <CustomModal width="37.5rem" open={showModal} onClose={onCloseModal}>
      <ModalWrapper>
        <CustomTitle fontSize="1rem">{contents.Modal_1_Title}</CustomTitle>
        <ListFrame>
          {contents.Modal_1_Pricing_List.map(({ name, price }, index) => (
            <li key={`${name}-${index}`}>
              <div>{name}</div>
              <DotDivider />
              <div>{price}</div>
            </li>
          ))}
        </ListFrame>
        <Box mt="1.5rem">{contents.Modal_1_Comment}</Box>
      </ModalWrapper>
    </CustomModal>
  );
};

export default ReceivingFundsFeeModal;
