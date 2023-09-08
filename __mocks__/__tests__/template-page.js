import React from "react";
import renderer from "react-test-renderer";
import * as redux from "react-redux";

import { localeList } from "../../src/constants/page/layout";
import LayoutContents from "../../src/constants/mockup/layout-contents";
import BlogContents from "../../src/constants/mockup/blog-contents";
import PressContents from "../../src/constants/mockup/press-contents";
import PressReleaseTemplate from "../../src/templates/press-release-page/press-release-template";
import BlogTemplate from "../../src/templates/blog-page/blog-template";

jest.mock("rehype-raw", () => jest.fn());

describe("template-page-components-checking", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    process.env = Object.assign(process.env, { GATSBY_CN_SITE: "1" });
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

  it("BlogTemplate renders correctly", () => {
    const tree = renderer
      .create(
        <BlogTemplate
          data={{
            allStrapiLayoutContent: {
              edges: [{ node: LayoutContents }],
            },
            allStrapiBlogContent: {
              edges: [
                {
                  node: { ...BlogContents },
                },
              ],
            },
            allStrapiBlog: {
              edges: BlogContents.Blog_List,
            },
          }}
          pageContext={BlogContents.Blog_List[0].node}
          location={{ href: BlogContents.Blog_List[0].Url }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("PressReleaseTemplate renders correctly", () => {
    const tree = renderer
      .create(
        <PressReleaseTemplate
          data={{
            allStrapiLayoutContent: {
              edges: [{ node: LayoutContents }],
            },
            allStrapiPressRelease: {
              edges: PressContents.Press_Release_List,
            },
          }}
          pageContext={PressContents.Press_Release_List[0].node}
          location={{ href: PressContents.Press_Release_List[0].Url }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
