import React from "react";
import renderer from "react-test-renderer";

import PressContents from "../../src/constants/mockup/press-contents";
import PressReleaseList from "../../src/templates/press-release-page/press-release-list";

jest.mock("rehype-raw", () => jest.fn());

describe("press-page-components-checking", () => {
  it("PressReleaseList renders correctly", () => {
    const tree = renderer
      .create(
        <PressReleaseList
          contents={PressContents}
          datas={PressContents.Press_Release_List}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
