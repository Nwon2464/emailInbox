import React, { useMemo } from "react";
import { columnData, generateSorting, widthClasses } from "./Table/Column";

import { GlobalFilter } from "./Table/filters";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
const FullScreenOnly = (props) => {
  const data = useMemo(() => props.currentData, [props.currentData]);
  const columns = useMemo(() => columnData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    page,
    nextPage,
    previousPage,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    canNextPage,
    canPreviousPage,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { pageIndex, globalFilter } = state;
  return (
    <div id="app-full-screen" className="app-relative app-full-width">
      {props.currentData.length === 0 ? (
        <div>Loading</div>
      ) : (
        <>
          <GlobalFilter
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <table
            className="
        app-flex-column app-flex 
        app-full-width app-border-spacing-0 app-table-layout-fixed"
          >
            <thead {...getTableProps()}>
              {headerGroups.map((headerGroup) => (
                <tr
                  className="app-button-background app-custom-border-bottom-2 app-flex app-align-center
              "
                  style={{
                    height: "3rem",
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem",
                  }}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => {
                    return (
                      <th
                        style={{
                          position: "relative",
                          height: "100%",
                        }}
                        className={widthClasses(column)}
                        // className="app-custom-border"
                        {...column.getHeaderProps()}
                      >
                        <div
                          style={{ alignItems: "center" }}
                          className="app-relative app-flex app-full-width"
                        >
                          <h3 {...column.getSortByToggleProps()}>
                            {column.render("Header")}
                            <span className="app-mg-l-05">
                              {generateSorting(column)}
                            </span>
                          </h3>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    key={i}
                    className="app-custom-border-bottom-2 app-height-25 app-flex app-align-center"
                    style={{
                      paddingTop: "0.3rem",
                      paddingBottom: "0.3rem",
                    }}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, i) => {
                      return (
                        <td
                          key={i}
                          className={`${widthClasses(cell.column)} dropdown-2 `}
                        >
                          <div className="app-flex app-white-space-nowrap app-overflow-hidden">
                            <h3
                              className="app-ellipsis  app-cursor-pointer"
                              {...cell.getCellProps()}
                            >
                              {cell.value.length === 3 ? (
                                <>{cell.value[0]}</>
                              ) : (
                                <> {cell.render("Cell")}</>
                              )}

                              {/* {cell.render("Cell")} */}
                            </h3>
                          </div>
                          {cell.column.id === "from" && (
                            <div className="dropdown-content-2">
                              <p
                                className="app-text-deco-under app-font-weight-600 app-cursor-pointer"
                                style={{ color: "#666666" }}
                              >
                                {cell.value}
                              </p>
                            </div>
                          )}

                          {cell.value.length === 3 && (
                            <button
                              className="dropdown app-cursor-pointer
                    app-align-center app-font-color-white app-flex app-background-message app-width-2 app-justify-content-center app-border-radius-5 app-mg-l-1 app-font-weight-600 app-plus-button app-full-height"
                            >
                              <div className="dropdown-content">
                                <p
                                  className="app-text-deco-under"
                                  style={{ color: "#666666" }}
                                >
                                  {cell.value[1]}
                                </p>
                                <p
                                  className="app-text-deco-under"
                                  style={{ color: "#666666" }}
                                >
                                  {cell.value[2]}
                                </p>

                                {/* <p>{cell.value[0]} </p> */}
                              </div>

                              <h3
                                style={{ width: "3rem" }}
                                className="app-flex app-justify-content-center"
                              >
                                +{cell.value.length - 1}
                              </h3>
                            </button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <ul className="app-flex app-justify-content-center app-height-5 app-align-center">
              <li style={{ fontSize: "1.5rem", listStyle: "none" }}>
                <span style={{ color: "#888888" }}>
                  Page{" "}
                  <strong style={{ color: "#000000" }}>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span style={{ color: "#888888" }}>
                  | Go to Page{" "}
                  <div className="app-inline-block app-input-border">
                    <input
                      className="input-span app-prevent-input"
                      type="number"
                      defaultValue={pageIndex + 1}
                      onChange={(e) => {
                        const pageNumber = e.target.value
                          ? Number(e.target.value) - 1
                          : 0;
                        gotoPage(pageNumber);
                      }}
                    />
                  </div>
                </span>
              </li>

              <li
                style={{ fontSize: "1.8rem" }}
                className="app-list-style-none app-mg-l-05"
              >
                <button
                  className="app-font-15 app-cursor-pointer app-button-hover-2 app-width-height-3 app-button-color"
                  style={{}}
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </button>
              </li>

              <li
                style={{ fontSize: "1.8rem" }}
                className="app-list-style-none app-mg-l-05"
              >
                <button
                  className="app-font-15 app-cursor-pointer  app-button-hover-2 app-width-height-3  app-button-color"
                  style={{}}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"PREV"}
                </button>
              </li>
              <li
                style={{ fontSize: "1.8rem", marginLeft: "1rem" }}
                className="app-list-style-none "
              >
                <button
                  className="app-font-15 app-cursor-pointer app-button-hover-2 app-width-height-3 app-button-color"
                  style={{}}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {"NEXT"}
                </button>
              </li>
              <li
                style={{ fontSize: "1.8rem" }}
                className="app-list-style-none "
              >
                <button
                  className="app-font-15 app-cursor-pointer app-button-hover-2 app-width-height-3 app-button-color"
                  style={{}}
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </button>
              </li>
            </ul>
          </div>
        </>
      )}{" "}
    </div>
  );
};

export default FullScreenOnly;
