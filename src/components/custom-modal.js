import React from "react";
import styled from "styled-components";
import { Modal, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { WindowSize } from "../constants/style/layout";
import { Colors } from "../constants/share/colors";

const ModalFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => (props.$width ? props.$width : "auto")};
  height: ${props => (props.$height ? props.$height : "auto")};
  max-height: max-content;
  background-color: ${Colors.WHITE};
  border-radius: 0.625rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  outline: none !important;
  overflow: ${props => (props.$overflow ? props.$overflow : "hidden")};

  @media (max-width: ${WindowSize.laptopS}) {
    width: ${props => props.$tabletWidth};
    height: ${props => props.$mobileHeight};
    overflow: scroll;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: calc(100vw - 2.5rem);
  }
`;

const ModalCloseBox = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 50;

  > button {
    color: ${Colors.PRIMARY};
  }
  @media (max-width: ${WindowSize.laptopS}) {
    top: 0.5rem;
    right: 0rem;
  }
`;

const CustomModal = ({
  width,
  height,
  tabletWidth = `calc(100vw - 2.5rem)`,
  mobileHeight = "auto",
  overflow,
  onClose,
  children,
  ...props
}) => {
  return (
    <Modal {...props}>
      <ModalFrame
        $width={width}
        $height={height}
        $tabletWidth={tabletWidth}
        $mobileHeight={mobileHeight}
        $overflow={overflow}
      >
        <ModalCloseBox>
          <Button onClick={() => onClose(false)}>
            <CloseIcon />
          </Button>
        </ModalCloseBox>
        {children}
      </ModalFrame>
    </Modal>
  );
};

export default CustomModal;
