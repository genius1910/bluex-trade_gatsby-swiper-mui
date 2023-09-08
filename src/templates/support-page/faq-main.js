import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import { ComponentPartialString } from "../../utils/component-partial-string"
import CustomTitle from "../../components/custom-title"
import Paragraph from "../../components/paragraph"
import { Colors } from "../../constants/share/colors"
import { LayoutStyle, WindowSize } from "../../constants/style/layout"
import { SupportPageContent } from "../../constants/page/support-page"

const FAQMainFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const FAQMainHeader = styled.div`
  height: 9.375rem;
  background-color: ${Colors.BG_GRAY};

  @media(max-width: ${WindowSize.mobileL}) {
    height: 5.875rem;
  }
`;

const FAQMainWrapper = styled.div`
  ${LayoutStyle}
  width: 38.75rem;
  display: flex;
  flex-direction: column;
  padding-top: 3.125rem;
  padding-bottom: 6.25rem;

  > div + div {
    margin-top: 1.875rem;
  }
  @media(max-width: ${WindowSize.mobileL}) {
    padding-top: 0rem;
    padding-bottom: 4rem;
  }
`;

// const TextButton = styled.span`
//   color: ${Colors.SECONDARY};
//   cursor: pointer;
// `;

const paragraphTitleStyle = {
  lineHeight: "1.5rem",
  fontSize: "1rem",
}

const paragraphContentStyle = {
  lineHeight: "1.125rem",
  fontSize: "0.75rem",
}

const FAQMain = ({ onShowModal, contents }) => {
  React.useEffect(() => {
    window.location.href = "https://portal.bluexpay.com/signup/choose_portal";
  }, []);

  // const ModalTextBtn = ({ children }) => {
  //   return (
  //     <TextButton onClick={ () => onShowModal(true)}>
  //       {children}
  //     </TextButton>
  //   );
  // }

  const LinkTextBtn = ({ children }) => {
    return (
      <Link to={SupportPageContent.Sidebar[1].url}>
        {children}
      </Link>
    );
  }

  const ContentWithButton = content => {
    if(content.indexOf(contents.FAQ_Modal_Btn) !== -1) {
      // return ComponentPartialString(content, contents.FAQ_Modal_Btn, ModalTextBtn);
    } else if(content.indexOf(contents.FAQ_Link_Btn) !== -1) {
      return ComponentPartialString(content, contents.FAQ_Link_Btn, LinkTextBtn);
    } else {
      return content;
    }
  }

  return (
    <FAQMainFrame>
      <FAQMainHeader />
      <FAQMainWrapper>
        <CustomTitle textAlign="left" whiteSpace="pre-wrap">
          {contents.Title}
        </CustomTitle>
        {
          contents.FAQ.map(({title, content}, index) => (
            <Paragraph
              key={`support-key-${index}`}
              title={title}
              titleClass={paragraphTitleStyle}
              contentClass={paragraphContentStyle}
              contentTextAlign="left"
              alignItems="flex-start"
              gap="0rem"
            >
              { ContentWithButton(content) }
            </Paragraph>
          ))
        }
      </FAQMainWrapper>
    </FAQMainFrame>
  );
}

export default FAQMain;