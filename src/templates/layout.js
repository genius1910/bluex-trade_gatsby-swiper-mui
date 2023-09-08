/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "gatsby-link";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";

import {
  setLocale,
  setFirstVisit,
  setDefaultSearch,
} from "../redux/global/global.actions";

import CookieHubBanner from "@/components/cookiehub-banner";
import Header from "./header";
import Footer from "./footer";
import { LayoutType, localeList } from "@/constants/page/layout";
import { Colors } from "@/constants/share/colors";

const GlobalStyle = createGlobalStyle`
  html body {
    min-height: 100vh;
    margin: 0px;
    font-size: 16px;
  }

  a {
    color: ${Colors.SECONDARY};
    text-decoration: none;
  }
`;

const Layout = ({
  type,
  contents,
  location,
  fori18nPath,
  children,
  ...props
}) => {
  const locale = useSelector(state => state.global.locale);
  const firstVisit = useSelector(state => state.global.firstVisit);
  const defaultSearch = useSelector(state => state.global.defaultSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const search = location?.search;
    let searchList = {};
    if (search) {
      const temp = search.slice(search.lastIndexOf("?") + 1);
      const params = temp.split("&");
      params.forEach(param => {
        const data = param.split("=");
        if (data?.length === 2) {
          searchList[data[0]] = data[1];
        }
      });
      dispatch(setDefaultSearch(searchList));
    }
  }, [dispatch, location]);

  const retreiveENUrl = url => {
    if (url[url.length - 1] === "/") {
      url = url.slice(0, url.length - 1);
    }

    const match = localeList.filter(
      localeItem => localeItem.url === url.slice(url.lastIndexOf("/") + 1)
    );

    if (match.length > 0) {
      url = url.slice(0, url.lastIndexOf("/"));
    }
    return url;
  };

  useEffect(() => {
    if (!fori18nPath) {
      return;
    }

    const basicUrl = retreiveENUrl(fori18nPath);

    if (!firstVisit) {
      const userLang = navigator.language || navigator.userLanguage;
      // if (userLang === "zh-TW") {
      //   dispatch(setLocale("tw"));
      //   navigate(`${basicUrl}/tw`);
      // } else if (userLang === "zh-CN") {
      //   dispatch(setLocale("cn"));
      //   navigate(`${basicUrl}/cn`);
      // }
      dispatch(setFirstVisit(true));
      return;
    }

    if (fori18nPath.slice(fori18nPath.lastIndexOf("/")) !== locale) {
      navigate(`${basicUrl}/${locale}`);
    } else {
      if (typeof window !== "undefined" && window.gtag instanceof Function) {
        window.gtag("event", "pageview", { ...defaultSearch });
      }
    }
  }, [dispatch, firstVisit, locale, fori18nPath, defaultSearch]);

  return (
    <React.Fragment>
      <CookieHubBanner />
      <GlobalStyle />
      {type !== LayoutType.NONE && (
        <Header
          type={type}
          isI18n={fori18nPath}
          contents={contents}
          {...props}
        />
      )}
      <main>{children}</main>
      {type !== LayoutType.NONE && type !== LayoutType.LOCALE && (
        <Footer contents={contents} />
      )}
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

export const Head = () => (
  <>
    <meta name="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="theme-color" content={Colors.SECONDARY} />
  </>
);
