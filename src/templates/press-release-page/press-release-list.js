import React, { useState } from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import { Button } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

import { DateFormator } from "../../utils/date-formator";
import CustomPagination from "../../components/custom-pagination";
import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

const PressReleaseListFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const PressReleaseListWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  min-height: 32rem;
`;

const ListWrapper = styled.div`
  box-sizing: border-box;
  padding-top: 3.938rem;
  padding-bottom: 6.25rem;

  @media (max-width: ${WindowSize.laptopS}) {
    padding-bottom: 3.125rem;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;

  > *:first-child {
    flex: 0 0 23.75rem;
    width: 23.75rem;
    max-height: 17.5rem;
    margin-right: 3.125rem;

    &.MuiSkeleton-root {
      height: 17.5rem;
    }
    img {
      width: 100%;
    }
  }
  & + & {
    margin-top: 3.188rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;

    > *:first-child {
      flex: 1 1 auto;
      width: 100%;
      margin-right: auto;
      margin-bottom: 1.25rem;
    }
  }
`;

const ItemContentWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    width: 100%;

    &:first-child {
      height: 3.75rem;
      margin-bottom: 0.625rem;
    }
    &:nth-child(2) {
      height: 1.125rem;
      margin-bottom: 0.625rem;
    }
    &:nth-child(3) {
      height: 5.5rem;
      margin-bottom: 1.25rem;
    }
    &:last-child {
      width: 9rem;
      height: 2.25rem;
    }
  }
`;

const ItemTitleWrapper = styled(CustomTitle)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.875rem;
  font-size: 1.25rem;
  text-align: left;
  white-space: pre-wrap;
`;

const ItemContentInfo = styled.div`
  ${DefaultFont}
  margin: 0.625rem 0rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: bold;

  & > span:last-child {
    color: ${Colors.GRAY5};
    text-transform: uppercase;
  }
`;

const ItemPreviewContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${DefaultFont}
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.375rem;
`;

const ItemButton = styled(Button)`
  &.MuiButton-root {
    ${DefaultFont}
    width: 9rem;
    height: 2.25rem;
    border-radius: 1.125rem;
    border: solid 2px ${Colors.SECONDARY};
    color: ${Colors.SECONDARY};
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: bold;
  }
`;

const PressReleaseList = ({ contents, datas, topRef }) => {
  const itemPerPage = 5;
  const loadingTimeout = 1200;
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, loadingTimeout);
  }, [pageIndex, setLoading, loadingTimeout]);

  return (
    <PressReleaseListFrame>
      <PressReleaseListWrapper>
        <ListWrapper>
          {datas
            .sort(function (o1, o2) {
              return Date.parse(o2.Date) - Date.parse(o1.Date);
            })
            .slice((pageIndex - 1) * itemPerPage, pageIndex * itemPerPage)
            .map((press, index) => {
              const { Url, Title, Image, PreviewText } = press;
              return (
                <ItemWrapper key={`ress-release-item-${index}`}>
                  {loading ? (
                    <Skeleton animation="wave" variant="rectangular" />
                  ) : (
                    <Link to={`/press-release/${Url}`}>
                      {
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        <img
                          src={Image?.localFile?.publicURL}
                          alt={Image?.caption}
                        />
                      }
                    </Link>
                  )}
                  <ItemContentWrapper>
                    {loading ? (
                      <>
                        <Skeleton animation="wave" variant="rectangular" />
                        <Skeleton animation="wave" variant="rectangular" />
                        <Skeleton animation="wave" variant="rectangular" />
                        <Skeleton animation="wave" variant="rectangular" />
                      </>
                    ) : (
                      <>
                        <Link to={`/press-release/${Url}`}>
                          <ItemTitleWrapper>{Title}</ItemTitleWrapper>
                        </Link>
                        <ItemContentInfo>
                          <span>{DateFormator(press.Date)}</span>
                        </ItemContentInfo>
                        <ItemPreviewContent>{PreviewText}</ItemPreviewContent>
                        <ItemButton
                          onClick={() => navigate(`/press-release/${Url}`)}
                        >
                          {contents.Section_2_Button}
                        </ItemButton>
                      </>
                    )}
                  </ItemContentWrapper>
                </ItemWrapper>
              );
            })}
          <CustomPagination
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            total={Math.ceil(datas.length / itemPerPage)}
            topRef={topRef}
          />
        </ListWrapper>
      </PressReleaseListWrapper>
    </PressReleaseListFrame>
  );
};

export default PressReleaseList;
