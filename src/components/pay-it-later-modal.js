import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Box, FormControl } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Scrollbar } from "react-scrollbars-custom";
import ReCAPTCHA from "react-google-recaptcha";

import { MarkDownTranslator } from "../utils/markdown-translator";
import CustomModal from "./custom-modal";
import Paragraph from "./paragraph";
import CustomButton from "./custom-button";
import CustomTitle from "./custom-title";
import { WindowSize } from "../constants/style/layout";
import { Colors } from "../constants/share/colors";
import { DefaultFont } from "../constants/style/default-font";

const ModalWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ContentFrame = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 3.5rem;
  background-color: ${Colors.SECONDARY};
`;

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0rem 3.5rem;
  margin-bottom: 1.75rem;

  > div:last-child {
    font-size: 0.75rem;
    font-weight: 500;

    > ul {
      padding-inline-start: 1rem;
      color: ${Colors.WHITE};
    }
    > span {
      color: #a7e0f4;
      font-size: 0.625rem;
      font-style: italic;
    }
  }
`;

const ImgFrame = styled.div`
  flex: 0 0 21rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding-left: 2.75rem;
`;

const FormFrame = styled.div`
  width: 100%;
  height: 38.25rem;
  padding-top: 3.5rem;
  vertical-align: middle;

  @media (max-width: ${WindowSize.laptopS}) {
    height: 100%;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    height: auto;
  }
`;

const FormWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 0rem 2.75rem;

  @media (max-width: ${WindowSize.laptopS}) {
    padding: 1.875rem 1.25rem;
  }
`;

const FormParagraph = styled(Paragraph)`
  align-items: flex-start;

  > div {
    &:first-child {
      line-height: 1.5rem;
      color: ${Colors.SECONDARY};
      font-size: 1.375rem;
      font-weight: 800;
    }
    &:last-child {
      line-height: 1.083rem;
      color: ${Colors.SECONDARY};
      font-size: 0.875rem;
      font-weight: 600;
    }
  }
`;

const CustomLabel = styled.label`
  line-height: 0.938rem;
  ${DefaultFont}
  color: ${Colors.GRAY5};
  font-size: 0.75rem;

  > span {
    margin-left: 0.313rem;
    color: ${Colors.RED};
  }
`;

const FormInputs = styled.form`
  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    & + .MuiFormControl-root {
      margin-top: 1rem;
    }
    > ${CustomLabel} {
      width: 3.625rem;
      margin-right: 0.625rem;
    }
    @media (max-width: ${WindowSize.mobileL}) {
      flex-direction: column;
      align-items: flex-start;

      > * {
        width: 100%;
      }
      > ${CustomLabel} {
        margin-right: 0rem;
        margin-bottom: 0.313rem;
      }
    }
  }
  > div {
    flex-wrap: wrap;

    .invalid-feedback {
      width: 100%;
      padding-left: 4.25rem;
      color: ${Colors.RED};
    }
    @media (max-width: ${WindowSize.mobileL}) {
      .invalid-feedback {
        padding-left: 0rem;
      }
    }
  }
`;

const CustomInput = styled.input`
  flex: 1 1 auto;
  height: 2.375rem;
  box-sizing: border-box;
  padding: 10px 12px;
  border: solid 1px ${Colors.BORDER_GRAY};
  border-radius: 0.25rem;
  background-color: ${Colors.GRAY4};
  color: ${Colors.PRIMARY};
  font-size: 0.75rem;
  font-weight: 500;

  &:focus-visible {
    outline: ${Colors.SECONDARY} auto 1px;
  }
  &.illegal {
    outline: ${Colors.RED} auto 1px;
  }
`;

const CustomReCAPTCHA = styled(ReCAPTCHA)`
  transform: scale(0.92);
  transform-origin: 0 0;
`;

const ModalButton = styled(CustomButton)`
  margin-top: 2.188rem;
  height: 3rem;
  font-family: inter;
  font-size: 1rem;
  font-weight: bold;
`;

export const NormalAvaiableInputs = {
  mobile: false,
  country: false,
  memberType: false,
  forwarderAssociation: false,
};

export const PayItLaterAvaiableInputs = {
  mobile: true,
  country: false,
  memberType: false,
  forwarderAssociation: false,
};

const PayItLaterModal = ({ showModal, onCloseModal, contents }) => {
  const defaultSearch = useSelector(state => state.global.defaultSearch);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [firstCheck, setFirstCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.recaptchaOptions = {
      useRecaptchaNet: true,
    };

    setLoading(false);
    setStep(1);
    setName("");
    setEmail("");
    setCountry("");
    setCompany("");
    setRecaptcha("");
    setFirstCheck(false);
  }, []);

  const setEmailaHandler = event => {
    const validateEmailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const emailInput = event.target.value;
    if (validateEmailRegex.test(emailInput)) {
      setEmail(emailInput);
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const recaptchaHandler = value => {
    console.log(value);
    setRecaptcha(value);
  };

  const onHandleSubmit = async event => {
    event.preventDefault();
    setFirstCheck(true);
    if (!name || !email || !country || !company || !recaptcha) {
      return;
    }

    setLoading(true);
    if (defaultSearch) {
      window.gtag("event", "pil-form-submit", { ...defaultSearch });
    }

    try {
      // send bluex analytics
      window.bxt &&
        window.bxt("pilForm", {
          username: name,
          email: email,
          company: company,
          country: country,
        });

      var _hsq = (window._hsq = window._hsq || []);
      _hsq.push([
        "identify",
        {
          username: name,
          email: email,
          company: company,
          country: country,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      await setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 750);
    }
  };

  return (
    <CustomModal
      width="49.625rem"
      tabletWidth="30rem"
      mobileHeight="43.5rem"
      open={showModal}
      onClose={onCloseModal}
    >
      <ModalWrapper>
        <ContentFrame sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <ContentWrapper>
            <CustomTitle
              textAlign="left"
              lineHeight="1.938rem"
              fontSize="1.875rem"
              fontFamily="lato"
              fontWeight="800"
              color={Colors.WHITE}
              dangerouslySetInnerHTML={{ __html: contents.PIL_Modal_Title }}
            ></CustomTitle>
            <div>
              {MarkDownTranslator(
                contents.PIL_Modal_Content?.data?.PIL_Modal_Content
              )}
              <span>{contents.PIL_Modal_Comment}</span>
            </div>
          </ContentWrapper>
          <ImgFrame>
            <img
              src={contents.PIL_Modal_Image?.localFile?.publicURL}
              alt={contents.PIL_Modal_Image?.caption}
            />
          </ImgFrame>
        </ContentFrame>
        {step === 1 ? (
          <FormFrame>
            <Scrollbar style={{ width: "100%", height: "100%" }}>
              <FormWrapper>
                <FormParagraph
                  title={contents.PIL_Modal_Paragraph.title}
                  gap="0.188rem"
                  marginBottom="2.563rem"
                >
                  {contents.PIL_Modal_Paragraph.content}
                </FormParagraph>
                <FormInputs onSubmit={event => onHandleSubmit(event)}>
                  <FormControl>
                    <CustomLabel>
                      {contents.PIL_Modal_Name_Label}
                      <span>*</span>
                    </CustomLabel>
                    <CustomInput
                      type="text"
                      className={firstCheck && !name ? "illegal" : ""}
                      onInput={event => setName(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <CustomLabel>
                      {contents.PIL_Modal_Email_Label}
                      <span>*</span>
                    </CustomLabel>
                    <CustomInput
                      type="text"
                      className={firstCheck && !isEmailValid ? "illegal" : ""}
                      // onInvalid={e =>
                      //   e.target.setCustomValidity(
                      //     "Please enter correct email format"
                      //   )
                      // }
                      // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      // onInput={e => e.target.setCustomValidity("")}
                      onChange={setEmailaHandler}
                    />
                    {firstCheck && !isEmailValid ? (
                      <div className="invalid-feedback">
                        Please enter correct email format
                      </div>
                    ) : null}
                  </FormControl>
                  <FormControl>
                    <CustomLabel>
                      {contents.PIL_Modal_Country_Label}
                      <span>*</span>
                    </CustomLabel>
                    <CustomInput
                      type="text"
                      className={firstCheck && !country ? "illegal" : ""}
                      onInput={event => setCountry(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <CustomLabel>
                      {contents.PIL_Modal_Company_Label}
                      <span>*</span>
                    </CustomLabel>
                    <CustomInput
                      type="text"
                      className={firstCheck && !company ? "illegal" : ""}
                      onInput={event => setCompany(event.target.value)}
                    />
                  </FormControl>
                  <Box mt="2.688rem">
                    <CustomReCAPTCHA
                      sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                      onChange={recaptchaHandler}
                    />
                  </Box>
                  <ModalButton
                    type="submit"
                    borderRadius="0.25rem"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <span>{contents.PIL_Modal_Submit_Btn}</span>
                    )}
                  </ModalButton>
                </FormInputs>
              </FormWrapper>
            </Scrollbar>
          </FormFrame>
        ) : (
          <FormFrame>
            <FormWrapper>
              <Box
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                pt="1.25rem"
              >
                <Box mb="3.125rem">
                  <CustomTitle fontSize="1rem" whiteSpace="pre-wrap">
                    {contents.PIL_Modal_Successful_Message}
                  </CustomTitle>
                </Box>
                <ModalButton
                  width="15rem"
                  borderRadius="0.25rem"
                  onClick={() => onCloseModal(false)}
                >
                  {contents.PIL_Modal_Successful_Btn}
                </ModalButton>
              </Box>
            </FormWrapper>
          </FormFrame>
        )}
      </ModalWrapper>
    </CustomModal>
  );
};

export default PayItLaterModal;
