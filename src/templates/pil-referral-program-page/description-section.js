import React from "react";
import styled from "styled-components";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stepper, Step, StepLabel } from "@mui/material";
import Paragraph from "../../components/paragraph";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const DescriptionSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
`;

const DescriptionSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8.563rem;
  padding-bottom: 9.188rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    align-items: center;
  }
`;

const MainParagraph = styled(Paragraph)`
  width: 52.125rem;
  margin-bottom: 2rem;

  > div {
    &:first-child {
      width: 49rem;
      margin-bottom: 0.375rem;
      text-align: center;
      font-size: 1.875rem;
      font-weight: 800;
      color: ${Colors.PRIMARY};

      span {
        line-height: 3.75rem;
        font-size: 2.5rem;
        color: ${Colors.SECONDARY};
      }
    }
    &:last-child {
      line-height: 1.875rem;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    width: 100%;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    > div:first-child {
      width: 100%;
    }
  }
`;

const DescriptionSection = ({ contents }) => {
  const theme = useTheme();
  const isNotMobileDevice = useMediaQuery(theme.breakpoints.up("sm"));

  const stringToHtml = input => {
    return <div dangerouslySetInnerHTML={{ __html: input }} />;
  };

  return (
    <DescriptionSectionFrame>
      <DescriptionSectionWrapper>
        <div>
          <img
            src={contents.Section_2_Icon?.localFile?.publicURL}
            alt={contents.Section_2_Icon?.caption}
          />
        </div>
        <MainParagraph title={stringToHtml(contents.Section_2_Paragraph.title)}>
          {contents.Section_2_Paragraph.content}
        </MainParagraph>
        <div>
          <Stepper
            activeStep={-1}
            alternativeLabel={isNotMobileDevice ? true : false}
            orientation={isNotMobileDevice ? "horizontal" : "vertical"}
          >
            {contents.Section_2_Steps.map(step => (
              <Step
                key={`step-${step.content}`}
                sx={{
                  "& .MuiStepLabel-root .MuiStepLabel-iconContainer .MuiSvgIcon-root":
                    {
                      color: Colors.SECONDARY,
                    },
                  "& .MuiStepLabel-label.Mui-disabled": {
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: Colors.PRIMARY,
                  },
                }}
              >
                <StepLabel>{step.content}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </DescriptionSectionWrapper>
    </DescriptionSectionFrame>
  );
};

export default DescriptionSection;
