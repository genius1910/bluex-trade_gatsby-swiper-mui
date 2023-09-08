import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { Scrollbar } from "react-scrollbars-custom";

import CustomModal from "../../components/custom-modal";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

const ModalWrapper = styled.div`
  position: relative;
  width: calc(100% - 3rem);
  height: calc(100% - 6.875rem);
  padding: 1.875rem;
  ${DefaultFont}
  color: ${Colors.PRIMARY};
  font-size: 0.75rem;
`;

const TableWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  margin-top: 1.875rem;
`;

const CustomTable = styled.table`
  width: 45rem;
  height: fit-content;
  border: solid 1px ${Colors.GRAY5};
  border-spacing: 0px;
  border-collapse: collapse;
  letter-spacing: 0rem;

  thead {
    tr {
      color: ${Colors.WHITE};
    }
    th {
      width: 25%;
      padding: 0.375rem 0rem;
      border: 1px solid ${Colors.GRAY2};
      background-color: ${Colors.SECONDARY};
    }
  }
  tbody {
    tr {
      border: 1px solid ${Colors.GRAY2};
      font-weight: normal;
    }
    td {
      padding: 0.375rem 0rem;
      border: 1px solid ${Colors.GRAY2};
      text-align: center;
    }
  }
`;

const AreaTitle = styled.td.attrs({
  colSpan: 4,
})`
  background-color: ${Colors.BG_GRAY};
  font-weight: bold;
`;

const LocalRailFeesModal = ({ contents, showModal, onCloseModal }) => {
  return (
    <CustomModal
      width="48.75rem"
      height="calc(100vh - 2.5rem)"
      mobileHeight="calc(100vh - 2.5rem)"
      open={showModal}
      onClose={onCloseModal}
    >
      <ModalWrapper>
        <CustomTitle fontSize="1rem">{contents.Modal_2_Title}</CustomTitle>
        <TableWrapper>
          <Scrollbar style={{ width: "100%", height: "100%" }}>
            <CustomTable>
              <thead>
                <tr>
                  {contents.Modal_2_Local_Fees_Header_List.map(
                    ({ content }, index) => {
                      return (
                        <th key={`local-fees-header-${index}`}>{content}</th>
                      );
                    }
                  )}
                </tr>
              </thead>
              <tbody>
                {contents.Modal_2_Local_Fees_Group_List.map(
                  ({ area, locals }) => (
                    <>
                      <tr key={`${area}-fees-title`}>
                        <AreaTitle>{area}</AreaTitle>
                      </tr>
                      {locals.map(
                        ({ country, currency, method, fee }, index) => (
                          <tr key={`${area}-fees-${index}`}>
                            <td>{country}</td>
                            <td>{currency}</td>
                            <td>{method}</td>
                            <td>{fee}</td>
                          </tr>
                        )
                      )}
                    </>
                  )
                )}
              </tbody>
            </CustomTable>
          </Scrollbar>
        </TableWrapper>
      </ModalWrapper>
    </CustomModal>
  );
};

export default LocalRailFeesModal;
