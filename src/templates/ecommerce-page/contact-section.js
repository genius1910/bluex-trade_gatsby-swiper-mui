import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Box, FormControl } from "@mui/material";
import { OutlinedInput, Select, MenuItem } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { MainTitle } from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import SubmitButton from "../../components/submit-button";
import CustomModal from "../../components/custom-modal";
import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";
import { ReCaptchaActions } from "../../constants/style/layout";

import PrimaryLogo from "../../images/logo/header-bluex-logo.inline.svg";

const ContactSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.BLUE_LIGHT};
`;

const ContactSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65rem;
  box-sizing: border-box;
  padding-top: 5.5rem;
  padding-bottom: 5.625rem;

  > div:first-child {
    width: 49.875rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 3.25rem;
    padding-bottom: 3.25rem;

    > div:first-child {
      width: 100%;
    }
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .MuiFormControl-root {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  button {
    width: 11rem;
    height: 2.875rem;
    margin-top: 1.313rem;
    font-size: 0.875rem;
    font-weight: bold;

    svg {
      transform: scale(0.7);
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    align-items: center;

    > div:first-child {
      text-align: center;
    }
    .MuiFormControl-root {
      flex-direction: column;
    }
  }
`;

const CustomInput = styled.input`
  flex: 1 1 45%;
  height: 2.875rem;
  box-sizing: border-box;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border: 1px solid ${Colors.GRAY9};
  border-radius: 0.125rem;
  margin-top: 0.625rem;
  ${DefaultFont}
  color: ${Colors.SECONDARY};
  font-size: 0.875rem;
  font-weight: 500;

  & + input {
    margin-left: 0.625rem;
  }
  &::placeholder {
    color: ${Colors.GRAY6};
  }
  &:focus-visible {
    outline: ${Colors.PRIMARY} auto 1px;
  }
  &.illegal {
    outline: ${Colors.RED} auto 1px;

    &::placeholder {
      color: ${Colors.RED};
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 0 0 3.5rem;

    & + input {
      margin-left: 0rem;
    }
  }
`;

const CustomSelect = styled(Select)`
  flex: 1 1 45%;
  height: 2.875rem;
  border: 1px solid ${Colors.GRAY9};
  border-radius: 0.125rem;
  margin-top: 0.625rem;
  margin-right: 0.625rem;
  background-color: ${Colors.WHITE};
  ${DefaultFont}
  color: ${Colors.SECONDARY};

  &.illegal {
    border: 2px solid ${Colors.RED};
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${Colors.PRIMARY};
  }
  @media (max-width: ${WindowSize.mobileL}) {
    margin-right: 0rem;
  }
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  padding: 2.5rem 1.875rem;

  > div {
    text-align: center;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 3rem;
    padding-bottom: 2rem;

    > div:first-child {
      margin-bottom: 1rem;
    }
  }
`;

const ContentFrame = styled.div`
  width: 100%;
  vertical-align: middle;

  > div:nth-child(2) {
    text-align: center;

    & > svg {
      color: ${Colors.PRIMARY};
      font-size: 5rem;
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    height: 100%;
  }
`;

const ReCAPTCHAInput = styled(ReCAPTCHA)`
  margin-top: 0.875rem;

  &.illegal {
    iframe {
      border: 1px solid ${Colors.RED};
    }
  }
`;

const ModalButton = styled(CustomButton)`
  &.MuiButton-root {
    width: 11.25rem;
    height: 2.75rem;
    margin-top: 1.875rem;

    > span {
      font-size: 0.875rem;
      font-weight: bold;

      svg {
        transform: scale(0.7);
      }
    }
    @media (max-width: ${WindowSize.mobileL}) {
      width: 100%;
    }
  }
`;

const ContactSection = React.forwardRef(
  ({ href, contents, modalContents }, ref) => {
    const defaultSearch = useSelector(state => state.global.defaultSearch);
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [plan, setPlan] = useState("");
    const [country, setCountry] = useState("");
    const [recaptcha, setReCAPTCHA] = useState(null);
    const [firstCheck, setFirstCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const onHandleSubmit = async () => {
      setFirstCheck(true);
      if (
        !formRef.current.reportValidity() ||
        !firstName ||
        !lastName ||
        !email ||
        !company ||
        !plan ||
        !country ||
        !recaptcha
      ) {
        return;
      }

      setLoading(true);
      setLoading(true);
      if (defaultSearch) {
        window.gtag("event", "ecommerce-contact-form-submit", {
          ...defaultSearch,
        });
      }

      try {
        var _hsq = (window._hsq = window._hsq || []);
        _hsq.push([
          "identify",
          {
            name: firstName + lastName,
            email: email,
            company: company,
            plan: plan,
            county: country,
            page: href,
          },
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        await setTimeout(() => {
          setLoading(false);
          setShowModal(true);
          onClearInput();
        }, 750);
      }
    };

    const onClearInput = () => {
      setLoading(false);
      setFirstCheck(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setCountry("");
      setPlan("");
      setCompany("");
      setReCAPTCHA(null);
      recaptcha.reset();
    };

    return (
      <ContactSectionFrame ref={ref}>
        <ContactSectionWrapper>
          <MainTitle marginBottom="3.375rem">
            {contents.Section_6_Title}
          </MainTitle>
          <FormWrapper ref={formRef}>
            <FormControl>
              <CustomInput
                type="text"
                value={firstName}
                className={firstCheck && !firstName ? "illegal" : ""}
                placeholder={contents.Section_6_First_Name_Input}
                onInput={event => setFirstName(event.target.value)}
              />
              <CustomInput
                type="text"
                value={lastName}
                className={firstCheck && !lastName ? "illegal" : ""}
                placeholder={contents.Section_6_Last_Name_Input}
                onInput={event => setLastName(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <CustomInput
                type="email"
                value={email}
                className={firstCheck && !email ? "illegal" : ""}
                placeholder={contents.Section_6_Email_Input}
                onInput={event => setEmail(event.target.value)}
              />
              <CustomInput
                type="text"
                value={company}
                className={firstCheck && !company ? "illegal" : ""}
                placeholder={contents.Section_6_Company_Input}
                onInput={event => setCompany(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <CustomSelect
                displayEmpty
                value={plan}
                className={firstCheck && !plan ? "illegal" : ""}
                onChange={event => setPlan(event.target.value)}
                input={<OutlinedInput />}
                renderValue={selected => {
                  if (selected.length === 0) {
                    return <>{contents.Section_6_Plan_Input}</>;
                  }

                  return selected;
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                {contents.Section_6_Plan_Radio_List.map(
                  ({ label, value }, index) => (
                    <MenuItem key={`plan-option-${index}`} value={value}>
                      {label}
                    </MenuItem>
                  )
                )}
              </CustomSelect>
              <CustomInput
                type="text"
                value={country}
                className={firstCheck && !country ? "illegal" : ""}
                placeholder={contents.Section_6_Country_Input}
                onInput={event => setCountry(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <ReCAPTCHAInput
                className={firstCheck && !recaptcha ? "illegal" : ""}
                sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                onChange={setReCAPTCHA}
              />
            </FormControl>
            <SubmitButton
              formType={ReCaptchaActions.ECOMMERCE_FORM}
              borderRadius="0.25rem"
              callback={onHandleSubmit}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress />
              ) : (
                <span>{contents.Section_6_Submit_Btn}</span>
              )}
            </SubmitButton>
          </FormWrapper>
        </ContactSectionWrapper>
        <CustomModal
          width="25rem"
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          <ModalWrapper>
            <ContentFrame>
              <Box mb="2.5rem">
                <PrimaryLogo />
              </Box>
              <Box mb="1.875rem">
                <CheckCircleOutlineIcon />
              </Box>
              <Paragraph
                title={modalContents.Successful_Paragraph.title}
                titleFontSize="1.125rem"
                titleColor={Colors.SECONDARY}
                titleTextAlign="center"
                contentColor={Colors.SECONDARY}
              >
                {modalContents.Successful_Paragraph.content}
              </Paragraph>
              <ModalButton
                type="button"
                borderRadius="0.25rem"
                onClick={() => setShowModal(false)}
              >
                {modalContents.Successful_Btn}
              </ModalButton>
            </ContentFrame>
          </ModalWrapper>
        </CustomModal>
      </ContactSectionFrame>
    );
  }
);

export default ContactSection;
