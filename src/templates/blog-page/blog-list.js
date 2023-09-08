import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import Skeleton from "@mui/material/Skeleton";
import { Button, Divider, InputBase, IconButton } from "@mui/material";
// import { request, gql } from "graphql-request";
import MeiliSearch from "meilisearch";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { DateFormator } from "../../utils/date-formator";
import CustomPagination from "../../components/custom-pagination";
import Paragraph from "../../components/paragraph";
import CustomTitle from "../../components/custom-title";
import { CategoryTypeList, BlogTypeList } from "../../constants/page/blog";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SearchIcon from "@mui/icons-material/Search";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import CloseIcon from "@mui/icons-material/Close";

const BlogListFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const BlogListWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  min-height: 32rem;
`;

const HeaderWrapper = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 8.25rem 1.25rem 5rem;
`;

const ActionBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 2.688rem;
  padding-bottom: 1rem;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
  }
`;

const FilterDropdownList = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
  }
`;

const FilterDropdown = styled(Dropdown)`
  width: 15rem;

  &.white {
    .Dropdown-control {
      color: ${Colors.WHITE};
    }
  }
  .Dropdown-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.625rem;
    border: none;
    border-left: 5px solid ${Colors.PRIMARY};
    box-shadow: 0 2px 5px 0 ${Colors.GRAY5};
    background: none;
    color: ${Colors.PRIMARY};

    & > div {
      &:first-child {
        flex: 1 1 auto;
      }
      &:last-child {
        flex: 0 0 1.5rem;
        height: 1.5rem;
      }
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 18.75rem;
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  border-left: 5px solid ${Colors.PRIMARY};
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 ${Colors.GRAY5};
  color: ${Colors.PRIMARY};

  > div:first-child {
    flex: 1 1 auto;
  }
  button {
    flex: 0 0 2.5rem;
    padding: 0.25rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const ListWrapper = styled.div`
  box-sizing: border-box;
  padding-top: 3.125rem;
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
  justify-content: flex-start;

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
      height: 8.25rem;
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
  text-transform: uppercase;
`;

const ItemContentInfo = styled.div`
  ${DefaultFont}
  margin: 0.625rem 0rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: bold;

  & > span {
    & + span {
      margin-left: 0.625rem;
    }
    &:first-child {
      color: ${Colors.SECONDARY};
    }
    &:nth-child(2) {
      color: ${Colors.BLUE_GREEN2};
    }
    &:nth-child(3) {
      color: ${Colors.ORANGE2};
    }
    &:last-child {
      color: ${Colors.GRAY5};
      text-transform: uppercase;
    }
  }
`;

const ItemPreviewContent = styled.div`
  ${DefaultFont}
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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

const NotFoundFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8rem;
`;

const paragraphTitleStyle = {
  lineHeight: "3.375rem",
  color: Colors.WHITE,
  fontSize: "2.25rem",
};

const BlogList = ({ contents }) => {
  const itemPerPage = 5;
  const loadingTimeout = 1200;
  const [blogs, setBlogs] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  const [search, setSearch] = useState("");
  const [type, setType] = useState(BlogTypeList[0].link);
  const [category, setCategory] = useState(CategoryTypeList[0].link);
  const [loading, setLoading] = useState(true);
  const topRef = useRef();

  const onHandleSearch = async event => {
    startSearch(event.target.value);
  };

  const onSelectType = input => {
    setType(input.value);
    setPageIndex(1);
    // console.log(input);
    // meilisearchFetch();
  };

  const onSelectCategory = input => {
    setCategory(input.value);
    setPageIndex(1);
    // console.log(input);
    // meilisearchFetch();
  };

  const startSearch = keyword => {
    setSearch(keyword);
    setPageIndex(1);
    // graphqlFetch();
    // meilisearchFetch();
  };

  // const graphqlFetch = useCallback(() => {
  //   const fetchData = async function () {
  //     const query = gql`
  //     {
  //       blogs(
  //         pagination: { page: ${pageIndex}, pageSize: 10 }
  //         filters: {
  //           or: [
  //             { Title: { containsi: "${search}" } }
  //             { ContentList: { title: { containsi: "${search}" } } }
  //             { ContentList: { content: { containsi: "${search}" } } }
  //           ]
  //         }
  //       ) {
  //         data {
  //           attributes {
  //             Url
  //             Author
  //             Date
  //             Image {
  //               data {
  //                 attributes {
  //                   url
  //                 }
  //               }
  //             }
  //             PreviewText
  //             Title
  //             ContentList {
  //               title
  //               content
  //             }
  //           }
  //         }
  //         meta {
  //           pagination {
  //             page
  //             pageSize
  //             pageCount
  //             total
  //           }
  //         }
  //       }
  //     }
  //   `;

  //     await request(`${process.env.GATSBY_STRAPI_URL}/graphql/`, query).then(
  //       response => {
  //         setBlogs(response.blogs?.data);
  //         // console.log(response);
  //       }
  //     );
  //   };

  //   fetchData();
  // }, [pageIndex, search]);

  const meilisearchFetch = useCallback(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const client = new MeiliSearch({
          host: process.env.GATSBY_STRAPI_MEILISEARCH_URL,
          apiKey: process.env.GATSBY_STRAPI_MEILISEARCH_KEY,
        });

        const blogIndex = await client.index("blog");
        blogIndex.updateSortableAttributes(["Date"]);
        blogIndex.updateFilterableAttributes(["Category", "Type"]);

        const filterCon = [];
        if (category !== CategoryTypeList[0].link) {
          filterCon.push(`Category = "${category}"`);
        }
        if (type !== BlogTypeList[0].link) {
          filterCon.push(`Type = "${type}"`);
        }
        // console.log(filterCon);

        const blogs = await blogIndex.search(search, {
          hitsPerPage: itemPerPage,
          page: pageIndex,
          sort: ["Date:desc"],
          filter: filterCon,
        });

        setPageTotal(blogs?.totalPages);
        setBlogs(blogs?.hits);

        setTimeout(function () {
          setLoading(false);
        }, loadingTimeout);
      } catch (error) {
        console.log(error);
        setPageTotal(1);
        setBlogs([]);

        setTimeout(function () {
          setLoading(false);
        }, loadingTimeout);
      }
    };
    fetchData();
  }, [pageIndex, search, type, category, setLoading]);

  React.useEffect(() => {
    // graphqlFetch();
    meilisearchFetch();
    if (process.env.NODE_ENV !== "production") {
      // console.log(result);
    }
  }, [meilisearchFetch, type, category, search]);

  return (
    <BlogListFrame>
      <HeaderWrapper
        $url={contents.Section_1_Bg?.localFile?.publicURL}
        ref={topRef}
      >
        <Paragraph
          title={contents.Section_1_Paragraph.title}
          titleClass={paragraphTitleStyle}
          contentColor={Colors.WHITE}
          contentTextAlign="center"
          gap="0.625rem"
        >
          {contents.Section_1_Paragraph.content}
        </Paragraph>
      </HeaderWrapper>
      <BlogListWrapper>
        <ActionBarWrapper>
          <FilterDropdownList>
            <FilterDropdown
              key={`category-filter-dropdown`}
              placeholder="Select: Category"
              options={contents.Category_Type_List.map(category => {
                return {
                  label: category?.text,
                  value: category?.link,
                };
              })}
              onChange={event => {
                onSelectCategory(event);
              }}
              arrowOpen={<ExpandLessIcon />}
              arrowClosed={<ExpandMoreIcon />}
              $content="Category"
              jesttestid="CategoryFilterDropdown"
            />
            <FilterDropdown
              key={`type-filter-dropdown`}
              placeholder="Select: Type"
              options={contents.Blog_Type_List.map(type => {
                return {
                  label: type?.text,
                  value: type?.link,
                };
              })}
              onChange={event => {
                onSelectType(event);
              }}
              arrowOpen={<ExpandLessIcon />}
              arrowClosed={<ExpandMoreIcon />}
              $content="Type"
              jesttestid="TypeFilterDropdown"
            />
          </FilterDropdownList>
          <SearchBox>
            <SearchIcon />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={`Search`}
              value={search}
              onChange={onHandleSearch}
            />
            <IconButton onClick={() => startSearch("")}>
              <CloseIcon />
            </IconButton>
          </SearchBox>
        </ActionBarWrapper>
        <Divider />
        <ListWrapper>
          {blogs.length > 0 || loading ? (
            blogs
              .sort(function (o1, o2) {
                return Date.parse(o2.Date) - Date.parse(o1.Date);
              })
              .map((blog, index) => {
                const {
                  Url,
                  Title,
                  Category,
                  Type,
                  Author,
                  Image,
                  PreviewText,
                } = blog;
                return (
                  <ItemWrapper key={`blog-item-${index}`}>
                    {loading ? (
                      <Skeleton animation="wave" variant="rectangular" />
                    ) : (
                      <Link to={`/blog/${Url}`}>
                        <img
                          src={`${process.env.GATSBY_STRAPI_URL}${Image?.url}`}
                          alt={`${process.env.GATSBY_STRAPI_URL}${Image?.alternativeText}`}
                        />
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
                          <Link to={`/blog/${Url}`}>
                            <ItemTitleWrapper>{Title}</ItemTitleWrapper>
                          </Link>
                          <ItemContentInfo>
                            <span>{Author}</span>
                            {Type ? (
                              <span>
                                {
                                  contents.Blog_Type_List.find(
                                    type => type.link === Type
                                  )?.text
                                }
                              </span>
                            ) : null}
                            {Category ? (
                              <span>
                                {
                                  contents.Category_Type_List.find(
                                    category => category.link === Category
                                  )?.text
                                }
                              </span>
                            ) : null}
                            <span>{DateFormator(blog.Date)}</span>
                          </ItemContentInfo>
                          <ItemPreviewContent>{PreviewText}</ItemPreviewContent>
                          <ItemButton onClick={() => navigate(`/blog/${Url}`)}>
                            {contents.Section_2_Button}
                          </ItemButton>
                        </>
                      )}
                    </ItemContentWrapper>
                  </ItemWrapper>
                );
              })
          ) : (
            <NotFoundFrame>
              <ManageSearchIcon fontSize="inherit" />
              <Paragraph title={contents.Not_Found_Paragraph.title}>
                {contents.Not_Found_Paragraph.content}
              </Paragraph>
            </NotFoundFrame>
          )}
          {blogs.length > 0 ? (
            <CustomPagination
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              total={pageTotal}
              topRef={topRef}
            />
          ) : null}
        </ListWrapper>
      </BlogListWrapper>
    </BlogListFrame>
  );
};

export default BlogList;
