import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

const SidebarWrapper = styled.div`
  width: 13.688rem;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  ${DefaultFont}
  position: relative;
  height: 3.25rem;
  display: flex;
  line-height: 1.25rem;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;

  & + & {
    border-top: 1px solid ${Colors.GRAY2};
  }
  > a {
    color: ${Colors.PRIMARY};
  }
  &.active > a {
    color: ${Colors.SECONDARY};
  }
`;

const Sidebar = ({ path, list }) => (
  <SidebarWrapper>
    {list?.map(({ text, link }, index) => {
      return (
        <SidebarItem
          key={`side-bar-${index}`}
          className={link === path ? "active" : ""}
        >
          <Link to={link}>{text}</Link>
          <Box position="absolute" right="0rem">
            {link === path ? <NavigateNextIcon /> : null}
          </Box>
        </SidebarItem>
      );
    })}
  </SidebarWrapper>
);

export default Sidebar;
