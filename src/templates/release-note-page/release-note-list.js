import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const ReleaseNoteListFrame = styled.div`
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
`;

const ReleaseNoteListWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  min-height: 32rem;
  padding-top: 2rem;
  padding-bottom: 3.5rem;
`;

const ReleaseNoteListDivision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ReleaseNoteItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 0.75rem 0px;

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const ReleaseNoteLink = styled(Button)`
  justify-content: flex-start;
  padding: 0rem;
  text-transform: none;
  font-size: 1.5rem;

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

const ReleaseNoteList = ({ contents, datas }) => {
  const navigateLocalUrl = url => {
    navigate(`/release-note/${url}`);
  };

  return (
    <ReleaseNoteListFrame>
      <HeaderWrapper $url={contents.Main_Banner_Bg?.localFile?.publicURL}>
        <Paragraph
          title={contents.Main_Paragraph.title}
          titleClass={paragraphTitleStyle}
          contentColor={Colors.WHITE}
          contentTextAlign="center"
          gap="0.625rem"
        >
          {contents.Main_Paragraph.content}
        </Paragraph>
      </HeaderWrapper>
      <ReleaseNoteListWrapper>
        <ReleaseNoteListDivision>
          {datas
            .sort(function (o1, o2) {
              return Date.parse(o2.Date) - Date.parse(o1.Date);
            })
            .map((data, index) => {
              return (
                <ReleaseNoteItem key={`release-note-${index}`}>
                  <ReleaseNoteLink onClick={() => navigateLocalUrl(data.Url)}>
                    <DescriptionIcon />
                    <span>{data.Paragraph.title}</span>
                  </ReleaseNoteLink>
                </ReleaseNoteItem>
              );
            })}
        </ReleaseNoteListDivision>
      </ReleaseNoteListWrapper>
    </ReleaseNoteListFrame>
  );
};

export default ReleaseNoteList;
