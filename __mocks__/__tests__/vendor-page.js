import React from "react";
import renderer from "react-test-renderer";

import VendorContents from "../../src/constants/mockup/vendor-contents";
import MainSection from "../../src/templates/vendor-page/main-section";
import IntroSection from "../../src/templates/vendor-page/intro-section";
import AdvantageSection from "../../src/templates/vendor-page/advantage-section";
import SecuritySection from "../../src/templates/vendor-page/security-section";
import ReadyStart from "../../src/templates/vendor-page/ready-start";

describe("vendor-page-components-checking", () => {
  it("MainSection renders correctly", () => {
    const tree = renderer
      .create(<MainSection contents={VendorContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("IntroSection renders correctly", () => {
    const tree = renderer
      .create(<IntroSection contents={VendorContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("AdvantageSection renders correctly", () => {
    const tree = renderer
      .create(<AdvantageSection contents={VendorContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("SecuritySection renders correctly", () => {
    const tree = renderer
      .create(<SecuritySection contents={VendorContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("ReadyStartSection renders correctly", () => {
    const tree = renderer
      .create(<ReadyStart contents={VendorContents} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
