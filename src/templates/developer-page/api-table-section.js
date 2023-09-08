import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MainTitle } from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

const APITableSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const APITableSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 5rem;
  padding-bottom: 6.25rem;

  > div:first-child {
    margin-bottom: 3.063rem;
  }
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: ${WindowSize.mobileL}) {
    display: block;
    overflow-x: scroll;

    > table {
      width: 50rem;
    }
  }
`;

const DataBody = styled.tbody`
  > tr {
    ${DefaultFont}

    > td {
      width: 20.625rem;
      box-sizing: border-box;
      padding: 1.313rem 1.063rem;
      color: ${Colors.BLUE_LIGHT4};
      font-size: 1.125rem;
      font-weight: bold;

      &.first {
        background-color: ${Colors.BG_BLUE_DARK4};
        font-size: 1.5rem;
      }
      &.second {
        background-color: ${Colors.BG_BLUE_LIGHT6};
      }
      &:last-child {
        background-color: ${Colors.BG_BLUE_LIGHT3};
        color: ${Colors.PRIMARY};
        line-height: 1.625rem;
      }
    }
  }
`;

const APITableSection = ({ contents }) => {
  const [tableDatas, setTableDatas] = useState([]);

  const createTableRowData = (header, category, functions, index) => {
    const datas = [];
    for (let i = 0; i < functions.length; i++) {
      const data = {
        function: functions[i].data,
      };

      if (i === 0) {
        data["category"] = category;
        data["rowSpan"] = functions.length;

        if (index === 0) {
          data["header"] = header;
        }
      }
      datas.push(data);
    }
    return datas;
  };

  useEffect(() => {
    const reducer = (prev, curr) => prev + curr.function?.length;
    const wholeRows = [];
    for (let i = 1; i <= 3; i++) {
      let header,
        datas,
        rows = [];
      if (i === 1) {
        header = contents.Section_4_Table_Row_Header_1;
        datas = contents.Section_4_Table_Row_Data_1;
      } else if (i === 2) {
        header = contents.Section_4_Table_Row_Header_2;
        datas = contents.Section_4_Table_Row_Data_2;
      } else {
        header = contents.Section_4_Table_Row_Header_3;
        datas = contents.Section_4_Table_Row_Data_3;
      }

      datas.forEach((data, index) => {
        rows.push(
          ...createTableRowData(header, data.category, data.function, index)
        );
      });
      rows[0]["headerRowSpan"] = datas.reduce(reducer, 0);
      wholeRows.push(...rows);
    }
    setTableDatas(wholeRows);
  }, [contents, setTableDatas]);

  return (
    <APITableSectionFrame>
      <APITableSectionWrapper>
        <MainTitle>{contents.Section_4_Title}</MainTitle>
        <TableWrapper>
          <table>
            <DataBody>
              {tableDatas.map((tableData, index) => (
                <tr key={`api-table-${index}`}>
                  {tableData.header && (
                    <td className="first" rowSpan={tableData.headerRowSpan}>
                      {tableData.header}
                    </td>
                  )}
                  {tableData.category && (
                    <td className="second" rowSpan={tableData.rowSpan}>
                      {tableData.category}
                    </td>
                  )}
                  <td>{tableData.function}</td>
                </tr>
              ))}
            </DataBody>
          </table>
        </TableWrapper>
      </APITableSectionWrapper>
    </APITableSectionFrame>
  );
};

export default APITableSection;
