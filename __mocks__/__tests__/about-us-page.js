import React from "react";
import renderer from "react-test-renderer";

import AboutUsContents from "../../src/constants/mockup/about-us-contents";
import MainSection from "../../src/templates/about-us-page/main-section";
import DescriptionSection from "../../src/templates/about-us-page/description-section";
import MissionSection from "../../src/templates/about-us-page/mission-section";
import LeadershipSection from "../../src/templates/about-us-page/leadership-section";
import PartnerSection from "../../src/templates/about-us-page/partner-section";
import TestimonialSection from "../../src/templates/about-us-page/testimonial-section";
import ReadyStart from "../../src/templates/vendor-page/ready-start";

jest.mock("rehype-raw", () => jest.fn());

describe("about-us-page-components-checking", () => {
  it("MainSection renders correctly", () => {
    const tree = renderer
      .create(<MainSection contents={AboutUsContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("DescriptionSection renders correctly", () => {
    const tree = renderer
      .create(<DescriptionSection contents={AboutUsContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("MissionSection renders correctly", () => {
    const tree = renderer
      .create(<MissionSection contents={AboutUsContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("LeadershipSection renders correctly", () => {
    const tree = renderer
      .create(<LeadershipSection contents={AboutUsContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("PartnerSection renders correctly", () => {
    const tree = renderer
      .create(<PartnerSection contents={AboutUsContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("TestimonialSection renders correctly", () => {
    const tree = renderer
      .create(<TestimonialSection contents={AboutUsContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("ReadyStartSection renders correctly", () => {
    const tree = renderer
      .create(<ReadyStart contents={AboutUsContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});