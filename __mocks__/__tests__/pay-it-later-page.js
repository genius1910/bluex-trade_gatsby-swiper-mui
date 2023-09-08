import React from "react";
import renderer from "react-test-renderer";

import PayItLaterContents from "../../src/constants/mockup/pay-it-later-contents";
import MainSection from "../../src/templates/pay-it-later-page/main-section";
import FeatureSection from "../../src/templates/pay-it-later-page/feature-section";
import ServiceIntroSection from "../../src/templates/pay-it-later-page/service-infro-section";
import VendorSection from "../../src/templates/pay-it-later-page/vendor-section";
import TestimonialSection from "../../src/templates/pay-it-later-page/testimonial-section";
import ContactSection from "../../src/templates/pay-it-later-page/contact-section";

jest.mock("rehype-raw", () => jest.fn());

describe("pay-it-later-page-components-checking", () => {
  it("MainSection renders correctly", () => {
    const tree = renderer
      .create(<MainSection contents={PayItLaterContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("FeatureSection renders correctly", () => {
    const tree = renderer
      .create(<FeatureSection contents={PayItLaterContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("StepSection renders correctly", () => {
    const tree = renderer
      .create(<ServiceIntroSection contents={PayItLaterContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("VendorSection renders correctly", () => {
    const tree = renderer
      .create(<VendorSection contents={PayItLaterContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("TestimonialSection renders correctly", () => {
    const tree = renderer
      .create(<TestimonialSection contents={PayItLaterContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("ContactSection renders correctly", () => {
    const tree = renderer
      .create(<ContactSection contents={PayItLaterContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
