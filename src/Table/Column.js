import React from "react";
import { SelectColumnFilter } from "./filters";

import { ReactComponent as FaceUpIcon } from "../Icon/icon_arrow01.svg";
import { format } from "date-fns";
export const columnData = [
  {
    Header: "From",
    accessor: "from",
    // Filter: SelectColumnFilter,
    // filter: "equals"
  },
  {
    Header: "To",
    accessor: "to",
    // Cell: ({ value }) => <div>hahahdsfa</div>
  },
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Date",
    accessor: "date",
    disableFilters: true,
    Cell: ({ value }) => {
      return format(new Date(value), "MM/dd/yyyy");
    },
  },
];

export const generateSorting = (column) => {
  return (
    <>
      {column.isSorted ? (
        column.isSortedDesc ? (
          <FaceUpIcon
            style={{
              width: "0.7rem",
              height: "0.7rem",
              transform: "rotate(180deg)",
            }}
          />
        ) : (
          <FaceUpIcon style={{ width: "0.7rem", height: "0.7rem" }} />
        )
      ) : (
        ""
      )}
    </>
  );
};
