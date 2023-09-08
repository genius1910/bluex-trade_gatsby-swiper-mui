import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";

import { Colors } from "../constants/share/colors";
import { DefaultFont } from "../constants/style/default-font";
import { WindowSize } from "../constants/style/layout";

const PaginationFrame = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 8.25rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-direction: column;
    height: 12.188rem;
  }
`;

const ButtonFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    ${DefaultFont}
    width: 9.063rem;
    border-radius: 0rem;
    font-size: 0.875rem;
    text-transform: capitalize;
    line-height: 1.5rem;
  }
`;

const PreviousButton = styled(Button)`
  &.MuiButton-text {
    margin-right: 0.625rem;
    border: solid 2px ${Colors.SECONDARY};
    color: ${Colors.SECONDARY};

    &:hover {
      background-color: ${Colors.SECONDARY};
      color: ${Colors.WHITE};
    }
  }
`;

const NextButton = styled(Button)`
  &.MuiButton-text {
    background-color: ${Colors.SECONDARY};
    border: solid 2px ${Colors.SECONDARY};
    color: ${Colors.WHITE};

    &:hover {
      color: ${Colors.SECONDARY};
    }
  }
`;

const IndexFrame = styled.div`
  position: absolute;
  right: 0rem;
  display: inline-flex;
  align-items: center;
  ${DefaultFont}
  line-height: 1.5rem;
  font-size: 0.875rem;
  color: ${Colors.PRIMARY};

  @media (max-width: ${WindowSize.laptopS}) {
    position: relative;
    margin-top: 1.875rem;
  }
`;

const IndexTextField = styled(TextField)`
  width: 3.125rem;
  height: 1.75rem;

  &.MuiFormControl-root {
    margin: 0rem 0.313rem;
  }
  input {
    text-align: center;
    padding: 0.313rem 0rem 0.313rem 0.5rem;
    font-size: 0.875rem;
  }
`;

const CustomPagination = ({ pageIndex, setPageIndex, total, topRef }) => {
  const scrollSmoothToTop = () => {
    setTimeout(() => {
      topRef?.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  };

  const SwitchPage = num => {
    scrollSmoothToTop();
    setPageIndex(num);
  }

  const onHandleSwitch = event => {
    SwitchPage(Number(event.target.value));
  };

  return (
    <PaginationFrame>
      <ButtonFrame>
        {pageIndex > 1 && (
          <PreviousButton onClick={() => SwitchPage(pageIndex - 1)}>
            Previous
          </PreviousButton>
        )}
        {pageIndex < total && (
          <NextButton onClick={() => SwitchPage(pageIndex + 1)}>
            Next
          </NextButton>
        )}
      </ButtonFrame>
      <IndexFrame>
        <div>Page</div>
        <IndexTextField
          type="number"
          value={pageIndex}
          InputProps={{
            inputProps: { min: 1, max: total },
            onInput: onHandleSwitch,
          }}
          onChange={event => scrollSmoothToTop()}
        />
        <div> of {total}</div>
      </IndexFrame>
    </PaginationFrame>
  );
};

export default CustomPagination;
