import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import { DateFormator } from "../../utils/date-formator";
import LinkDropdown from "../../components/policy-page/link-dropdown";
import Sidebar from "../../components/policy-page/side-bar";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const CookiePolicyMainFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const CookiePolicyMainHeader = styled.div`
  height: 9.375rem;
  background-color: ${Colors.BG_GRAY};

  @media (max-width: ${WindowSize.mobileL}) {
    height: 5.875rem;
  }
`;

const CookiePolicyMainWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: row;

  @media (max-width: ${WindowSize.tablet}) {
    flex-direction: column;
    padding-top: 1.875rem;
  }
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  padding: 3.125rem 0rem 6.25rem 6.25rem;
  ${DefaultFont}
  color: ${Colors.PRIMARY};
  line-height: 1.25rem;
  font-size: 0.875rem;

  > * {
    text-align: left;
  }
  @media (max-width: ${WindowSize.tablet}) {
    width: 100%;
    padding: 1.875rem 0rem;
  }
`;

const SubTitleWrapper = styled(Box)`
  ${DefaultFont}
  color: ${Colors.PRIMARY};
  line-height: 1.75rem;
  font-size: 1.125rem;
  font-weight: bold;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 1.875rem;

  > h5 {
    margin-top: 0rem;
    margin-bottom: 0.625rem;
    color: ${Colors.BLUE_DARK2};
    font-size: 0.875rem;
    font-weight: bold;
  }
`;

const TableWrapper = styled(Box)`
  max-width: 100%;
  margin-top: 0.625rem;
  margin-bottom: 1.875rem;

  @media (max-width: ${WindowSize.tablet}) {
    overflow-x: scroll;
  }
`;

const CustomTable = styled.table`
  width: 40rem;
  border: solid 1px ${Colors.GRAY5};
  border-spacing: 0px;
  border-collapse: collapse;
  letter-spacing: 0rem;

  tbody {
    vertical-align: top;
  }
  th,
  td {
    padding: 0.625rem;
    border: solid 1px ${Colors.GRAY5};
  }
  th {
    background-color: ${Colors.BG_GRAY};
    font-weight: normal;
  }
  td {
    max-width: 11.125rem;

    &:first-child,
    &:nth-child(2) {
      width: 8.5rem;
      box-sizing: border-box;
      word-break: break-all;
    }
  }
`;

const CookiePolicyMain = ({ path, contents }) => {
  return (
    <CookiePolicyMainFrame>
      <CookiePolicyMainHeader />
      <CookiePolicyMainWrapper>
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          pt="2.125rem"
        >
          <Sidebar path={path} list={contents.Sidebar_List} />
        </Box>
        <Box sx={{ display: { sm: "block", md: "none" } }}>
          <LinkDropdown
            path={path}
            links={contents.Sidebar_List?.map(item => {
              return {
                label: item?.text,
                value: item?.link,
              };
            })}
          />
        </Box>
        <ContentWrapper>
          <Box mb="0.625rem">
            <CustomTitle
              fontSize="1.5rem"
              lineHeight="2.25rem"
              textAlign="left"
              whiteSpace="pre-wrap"
            >
              {contents.Cookie_Policy_Title}
            </CustomTitle>
          </Box>
          <Box mb="1.5rem">
            {`Last Modified: ${DateFormator(contents.Cookie_Policy_TimeStamp)}`}
          </Box>
          {contents.Cookie_Policy_Paragraph_List.map(
            ({ title, titleSize, content }, index) => (
              <ParagraphWrapper key={`cookie-policy-paragraph-${index}`}>
                <SubTitleWrapper $fontSize={`${titleSize}px`}>
                  {title}
                </SubTitleWrapper>
                {content
                  ? MarkDownTranslator(content?.data?.content)
                  : (title.includes("Bluextrade.com") && (
                      <TableWrapper>
                        <CustomTable>
                          <thead>
                            <tr>
                              {contents.Cookie_Policy_Table_Headers.map(
                                ({ content }, index) => (
                                  <th key={`bluex-trade-header-${index}`}>
                                    {content}
                                  </th>
                                )
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {contents.Cookie_Policy_Bluextrade_Table.map(
                              (
                                { name, provider, purpose, type, expiry },
                                index
                              ) => (
                                <tr key={`bluex-trade-row-${index}`}>
                                  <td>{name}</td>
                                  <td>{provider}</td>
                                  <td>{purpose}</td>
                                  <td>{type}</td>
                                  <td>{expiry}</td>
                                </tr>
                              )
                            )}
                            <tr></tr>
                          </tbody>
                        </CustomTable>
                      </TableWrapper>
                    )) ||
                    (title.includes("Bluexpay.com") && (
                      <TableWrapper>
                        <CustomTable>
                          <thead>
                            <tr>
                              {contents.Cookie_Policy_Table_Headers.map(
                                ({ content }, index) => (
                                  <th key={`bluex-pay-header-${index}`}>
                                    {content}
                                  </th>
                                )
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {contents.Cookie_Policy_Bluexpay_Table.map(
                              (
                                { name, provider, purpose, type, expiry },
                                index
                              ) => (
                                <tr key={`bluex-pay-row-${index}`}>
                                  <td>{name}</td>
                                  <td>{provider}</td>
                                  <td>{purpose}</td>
                                  <td>{type}</td>
                                  <td>{expiry}</td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </CustomTable>
                      </TableWrapper>
                    ))}
              </ParagraphWrapper>
            )
          )}
        </ContentWrapper>
      </CookiePolicyMainWrapper>
    </CookiePolicyMainFrame>
  );
};

export default CookiePolicyMain;
