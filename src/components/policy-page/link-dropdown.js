import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { Colors } from "../../constants/share/colors";

const MenuDropdown = styled(Dropdown)`
  font-family: inter;
  font-weight: 500;
  font-size: 0.75rem;

  .Dropdown-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem;
    border: 1px solid ${Colors.BORDER_GRAY};
    border-radius: 0.25rem;
    color: ${Colors.PRIMARY};

    & > div:last-child {
      height: 24px;
    }
  }
  .Dropdown-menu {
    margin-top: 0.563rem;
    padding: 0.25rem 0rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

    .Dropdown-option {
      color: ${Colors.PRIMARY};

      &.is-selected {
        background-color: ${Colors.GRAY3};
      }
    }
  }
`;

const LinkDropdown = ({ path, links }) => {
  const [linkLabel, setLinkLabel] = useState(path);

  const onSelectSupportPage = option => {
    setLinkLabel(option.value);
    navigate(option.value);
  };

  return (
    <MenuDropdown
      options={links}
      value={linkLabel}
      onChange={onSelectSupportPage}
      arrowOpen={<ExpandLessIcon />}
      arrowClosed={<ExpandMoreIcon />}
    />
  );
};

export default LinkDropdown;
