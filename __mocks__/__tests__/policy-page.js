import React from "react";
import renderer from "react-test-renderer";

import PolicyContents from "../../src/constants/mockup/policy-contents";
import { SupportPageContent } from "../../src/constants/page/support-page";
import TermsOfServiceMain from "../../src/templates/policy-page/terms-of-service";
import CookiePolicyMain from "../../src/templates/policy-page/cookie-policy";
import PolicyTemplate from "../../src/templates/policy-page/policy-template";

jest.mock("rehype-raw", () => jest.fn());

describe("policy-page-components-checking", () => {
  it("Terms Of Service renders correctly", () => {
    const tree = renderer
      .create(
        <TermsOfServiceMain
          contents={{
            Sidebar_List: SupportPageContent.Sidebar,
            ...PolicyContents,
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Cookie Policy renders correctly", () => {
    const tree = renderer
      .create(
        <CookiePolicyMain
          contents={{
            Sidebar_List: SupportPageContent.Sidebar,
            ...PolicyContents,
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Policy Template renders correctly", () => {
    const tree = renderer
      .create(
        <PolicyTemplate
          path={PolicyContents.Privacy_Policy_Path}
          sidebarList={SupportPageContent.Sidebar}
          title={PolicyContents.Privacy_Policy_Title}
          date={PolicyContents.Privacy_Policy_TimeStamp}
          paragraphs={PolicyContents.Privacy_Policy_Paragraph_List}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
