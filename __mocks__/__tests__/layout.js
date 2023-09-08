import React from "react";
import * as redux from "react-redux";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import LayoutContents from "../../src/constants/mockup/layout-contents";
import { localeList } from "../../src/constants/page/layout";

import Header from "../../src/templates/header";
import Footer from "../../src/templates/footer";

import { SocialMediaLinks, BeianInfo } from "../../src/constants/page/layout";

describe("layout-components-checking", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    process.env = Object.assign(process.env, { GATSBY_CN_SITE: '1' });
    jest.spyOn(console, "warn").mockImplementation(() => {});
    spyOnUseSelector = jest.spyOn(redux, "useSelector");
    spyOnUseSelector.mockReturnValue([
      {
        global: {
          locale: localeList[0].url,
          defaultSearch: null,
        },
      },
    ]);

    spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Header renders correctly", () => {
    const tree = renderer.create(<Header contents={LayoutContents} />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(<Header contents={LayoutContents} />);

    // console.log(wrapper.debug());
    expect(wrapper.find("svg").length).toBe(4);
    expect(
      wrapper.find({ jesttestid: "MainMenuDropdown" }).find("Dropdown").length
    ).toBe(2);
    expect(
      wrapper.find({ jesttestid: "MobileMenuSlide" }).find("ForwardRef(Slide)")
        .length
    ).toBe(4);
  });

  it("Footer renders correctly", () => {
    const tree = renderer.create(<Footer contents={LayoutContents} />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(<Footer contents={LayoutContents} />);

    // console.log(wrapper.debug());
    expect(
      wrapper.find("a").find({ href: SocialMediaLinks.facebook }).exists()
    ).toBe(true);
    expect(
      wrapper.find("a").find({ href: SocialMediaLinks.youtube }).exists()
    ).toBe(true);
    expect(
      wrapper.find("a").find({ href: SocialMediaLinks.twitter }).exists()
    ).toBe(true);
    expect(
      wrapper.find("a").find({ href: SocialMediaLinks.linkedin }).exists()
    ).toBe(true);

    expect(wrapper.find("form").exists()).toBe(true);
    expect(wrapper.find("input").length).toBe(4);

    expect(wrapper.find({ alt: "BeianIcon" }).exists()).toBe(true);
    BeianInfo.map(({ url }) => {
      expect(wrapper.find("a").find({ href: url }).exists()).toBe(true);
    });
    LayoutContents.Footer.map(({ url, label }) => {
      expect(
        wrapper.find("a").find({ href: url }).find({ children: label }).exists()
      ).toBe(true);
    });
  });
});
