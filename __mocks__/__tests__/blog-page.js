import React from "react";
import renderer from "react-test-renderer";

import BlogContents from "../../src/constants/mockup/blog-contents";
import BlogList from "../../src/templates/blog-page/blog-list";

describe("blog-page-components-checking", () => {
  it("BlogList renders correctly", () => {
    const tree = renderer
      .create(
        <BlogList
          contents={BlogContents}
          datas={BlogContents.Blog_List}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});