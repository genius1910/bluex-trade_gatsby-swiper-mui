import React, { useCallback } from "react";
import CustomButton from "./custom-button";

const SubmitButton = ({ formType, callback, children, ...props }) => {
  const handleReCaptchaVerify = useCallback(async () => {
    callback();
  }, [callback]);

  return (
    <CustomButton
      type="button"
      onClick={event => handleReCaptchaVerify(event)}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export default SubmitButton;
