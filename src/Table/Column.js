import React from "react";

import { ReactComponent as FaceUpIcon } from "../Icon/icon_arrow01.svg";
import { format } from "date-fns";
export const columnData = [
  {
    Header: "From",
    accessor: "from",
  },
  {
    Header: "To",
    accessor: "to",
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

export const widthClasses = (e) => {
  if (e.id === "from") {
    return "app-flex app-flex-basis-10 app-max-width-10 app-mg-l-1 app-flex-grow-0 app-min-width-0";
  } else if (e.id === "to") {
    return "app-flex app-flex-basis-20 app-max-width-20 app-mg-l-25 app-flex-grow-0 app-min-width-0";
  } else if (e.id === "subject") {
    return "app-flex app-flex-1-1 app-mg-l-1 app-min-width-0";
  } else if (e.id === "date") {
    return "app-flex app-flex-basis-6 app-max-width-6 app-justify-content-start app-mg-l-1 app-mg-r-05";
  }
};

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
