import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import FrontContents from "../../src/constants/mockup/front-contents";
import MainSection from "../../src/templates/front-page/main-section";
import DescriptionSection from "../../src/templates/front-page/description-section";
import FeatureSection from "../../src/templates/front-page/feature-section";
import TestimonialSection from "../../src/templates/front-page/testimonial-section";
import LogoSection from "../../src/templates/front-page/logo-section";
import ContactSection from "../../src/templates/front-page/contact-section";

import CustomButton from "../../src/components/custom-button";

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});

describe("front-page-components-checking", () => {
  it("MainSection renders correctly", () => {
    const tree = renderer
      .create(<MainSection contents={FrontContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();

    jest.mock('swiper/react', () => ({
      Swiper: jest.fn(),
      SwiperSlide: jest.fn(),
    }));

    const wrapper = mount(<MainSection contents={FrontContents} />);

    expect(wrapper.find("video").at(0).props().id).toEqual(
      FrontContents.Section_1_Bg.id
    );

    expect(wrapper.find("video").at(0).props().type).toEqual(
      FrontContents.Section_1_Bg.type
    );

    expect(wrapper.find(CustomButton).exists()).toBe(true);
  });

  it("DescriptionSection renders correctly", () => {
    const tree = renderer
      .create(<DescriptionSection contents={FrontContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("FeatureSection renders correctly", () => {
    const tree = renderer
      .create(<FeatureSection contents={FrontContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("TestimonialSection renders correctly", () => {
    const tree = renderer
      .create(<TestimonialSection contents={FrontContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("LogoSection renders correctly", () => {
    const tree = renderer
      .create(<LogoSection contents={FrontContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("ContactSection renders correctly", () => {
    const tree = renderer
      .create(<ContactSection contents={FrontContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
