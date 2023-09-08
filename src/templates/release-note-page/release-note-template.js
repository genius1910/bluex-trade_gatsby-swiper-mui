import React from "react";
import { graphql, navigate } from "gatsby";
import styled from "styled-components";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import { DateFormator } from "../../utils/date-formator";
import Layout from "../layout";
import Paragraph from "../../components/paragraph";
import { LayoutType } from "../../constants/page/layout";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";

const ReleaseNoteTemplateFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const HeaderWrapper = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 8.25rem 1.25rem 5rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-bottom: 3rem;
  }
`;

const ReleaseNoteTemplateWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  min-height: 30rem;
  height: fit-content;
  box-sizing: border-box;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const UpdatedContentWrapper = styled.div`
  border-bottom: 0.063rem solid rgba(35, 163, 118, 0.5);
  color: ${Colors.PRIMARY};

  > div {
    margin-bottom: 2.5rem;

    &:first-child {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
  }
`;

const UpdatedParagraph = styled.div`
  font-size: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const LastestReleaseNoteList = styled.div`
  padding-top: 1.5rem;
`;

const LastestReleaseNoteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0px;
  margin-left: 1.5rem;
`;

const LastestReleaseNoteLink = styled(Button)`
  justify-content: flex-start;
  padding: 0rem;
  text-transform: none;
  font-size: 1.15rem;

  > span {
    margin-left: 0.45rem;
    text-align: left;
    word-break: break-word;
  }
`;

const paragraphTitleStyle = {
  lineHeight: "3.375rem",
  color: Colors.WHITE,
  fontSize: "2.25rem",
};

const ReleaseNoteTemplate = ({ data, pageContext, location }) => {
  const {
    allStrapiLayoutContent,
    allStrapiReleaseNoteContent,
    allStrapiReleaseNote,
  } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout?.locale === "en"
  )[0];
  const contents = allStrapiReleaseNoteContent.nodes[0];
  const datas = allStrapiReleaseNote.nodes;
  const context = datas.filter(context => context?.Url === pageContext?.Url)[0];
  const { Feature_List, Enhancement_List, Hotfix_List } = context;

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
      console.log(datas);
    }
  }, [contents, datas]);

  const UpdatedContentDivision = ({ title, content }) => {
    return (
      <div>
        <CustomTitle
          textAlign="left"
          lineHeight="3.375rem"
          fontSize="2rem"
          color={Colors.PRIMARY}
          whiteSpace="pre-wrap"
        >
          {title}
        </CustomTitle>
        <UpdatedParagraph>{MarkDownTranslator(content?.data?.content)}</UpdatedParagraph>
      </div>
    );
  };

  const navigateLocalUrl = url => {
    navigate(`/release-note/${url}`);
  };

  return (
    <Layout type={LayoutType.WHITE} contents={layout} location={location}>
      <ReleaseNoteTemplateFrame>
        <HeaderWrapper $url={contents.Template_Banner_Bg?.localFile?.publicURL}>
          <Paragraph
            title={context.Paragraph.title}
            titleClass={paragraphTitleStyle}
            contentColor={Colors.WHITE}
            contentTextAlign="center"
            gap="0.625rem"
          >
            {context.Paragraph.content}
          </Paragraph>
        </HeaderWrapper>
        <ReleaseNoteTemplateWrapper>
          <UpdatedContentWrapper>
            <div>{`Updated Date: ${DateFormator(context.Date)}`}</div>
            {Feature_List && UpdatedContentDivision(Feature_List)}
            {Enhancement_List && UpdatedContentDivision(Enhancement_List)}
            {Hotfix_List && UpdatedContentDivision(Hotfix_List)}
          </UpdatedContentWrapper>
          <LastestReleaseNoteList>
            <CustomTitle
              textAlign="left"
              lineHeight="3.375rem"
              fontSize="2rem"
              color={Colors.PRIMARY}
              whiteSpace="pre-wrap"
              marginBottom="1rem"
            >
              See Also
            </CustomTitle>
            {datas
              .sort(function (o1, o2) {
                return Date.parse(o2.Date) - Date.parse(o1.Date);
              })
              .slice(0, 5)
              .map((data, index) => {
                return (
                  <LastestReleaseNoteItem key={`release-note-${index}`}>
                    <LastestReleaseNoteLink
                      onClick={() => navigateLocalUrl(data.Url)}
                    >
                      <DescriptionIcon />
                      <span>{data.Paragraph.title}</span>
                    </LastestReleaseNoteLink>
                  </LastestReleaseNoteItem>
                );
              })}
          </LastestReleaseNoteList>
        </ReleaseNoteTemplateWrapper>
      </ReleaseNoteTemplateFrame>
    </Layout>
  );
};

export default ReleaseNoteTemplate;

export const query = graphql`
  query {
    allStrapiLayoutContent {
      nodes {
        locale
        Product_Dropdown_Label
        Product_Dropdown_Groups {
          name
          type
          links {
            label
            url
            type
          }
        }
        Header_SubMenus {
          title
          attachment
          links {
            label
            url
            type
          }
        }
        Header_SignIn_Btn {
          text
          link
        }
        Header_Back_Btn
        Site_Map {
          title
          links {
            label
            url
            type
          }
        }
        Footer_Form_Title
        Footer_Form_Button
        Footer_Input_First_Name_Label
        Footer_Input_Last_Name_Label
        Footer_Input_Email_Label
        Footer_Input_Company_Label
        Footer {
          label
          url
          type
        }
        Footer_Form_End_Content
        Footer_Form_End_Button
        Right_Company
        Right_Reserved
      }
    }
    allStrapiReleaseNoteContent {
      nodes {
        Template_Banner_Bg {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiReleaseNote {
      nodes {
        Url
        Date
        Paragraph {
          title
          content
        }
        Feature_List {
          title
          titleSize
          content {
            data {
              content
            }
          }
        }
        Enhancement_List {
          title
          titleSize
          content {
            data {
              content
            }
          }
        }
        Hotfix_List {
          title
          titleSize
          content {
            data {
              content
            }
          }
        }
      }
    }
  }
`;
