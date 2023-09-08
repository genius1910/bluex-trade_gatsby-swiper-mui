import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

import { Colors } from "../constants/share/colors";
import { WindowSize } from "../constants/style/layout";

import IconLeftArrow from "../images/icon/combined-shape.inline.svg";
import IconRightArrow from "../images/icon/combined-shape-copy.inline.svg";

const DotsPaginationFrame = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SlideButton = styled(Button)`
  top: 50%;
  transform: translate(0, -50%);

  &.MuiButton-root {
    position: absolute;
  }
`;

const SlideLeftButton = styled(SlideButton)`
  left: -5rem;

  @media (max-width: ${WindowSize.laptopS}) {
    left: 0rem;
  }
`;

const SlideRightButton = styled(SlideButton)`
  right: -5rem;

  @media (max-width: ${WindowSize.laptopS}) {
    right: 0rem;
  }
`;

const ItemsFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DotsFrame = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.875rem;
`;

const DotsWrapper = styled.div`
  display: flex;
  align-items: center;

  > button {
    width: 1rem;
    height: 1rem;
    min-width: auto;
    padding: 0rem;
    border-radius: 50%;
    border: 1px solid ${Colors.INDIGO};
    cursor: pointer;
    -webkit-transition: background-color 150ms linear;
    -ms-transition: background-color 150ms linear;
    transition: background-color 150ms linear;

    & + button {
      margin-left: 0.75rem;
    }
    &.active {
      background-color: ${Colors.INDIGO};
    }
  }
`;

const DotsPagination = ({ pageIndex, setPageIndex, total, children }) => {
  const onHandleSwitch = num => {
    setPageIndex(num);
  };

  return (
    <DotsPaginationFrame>
      {pageIndex > 0 && (
        <SlideLeftButton onClick={() => onHandleSwitch(pageIndex - 1)}>
          <IconLeftArrow />
        </SlideLeftButton>
      )}
      {pageIndex < total - 1 && (
        <SlideRightButton onClick={() => onHandleSwitch(pageIndex + 1)}>
          <IconRightArrow />
        </SlideRightButton>
      )}
      <ItemsFrame>{children}</ItemsFrame>
      <DotsFrame>
        <DotsWrapper>
          {total > 1 &&
            [...Array(total)].map((e, index) => (
            <Button
              key={`dots-pagination-${index}`}
              className={index === pageIndex ? "active" : ""}
              onClick={() => onHandleSwitch(index)}
            />
          ))}
        </DotsWrapper>
      </DotsFrame>
    </DotsPaginationFrame>
  );
};

export default DotsPagination;
