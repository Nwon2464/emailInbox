import React from "react";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div id="app-mobile" className="app-full-width">
      <ul className="app-flex app-full-width app-justify-content-center app-height-5 app-align-center">
        <li style={{ fontSize: "1.5rem", listStyle: "none" }}>
          <span style={{ color: "#888888" }}>
            Page{" "}
            <strong style={{ color: "#000000" }}>
              {currentPage} of {Math.ceil(totalData / dataPerPage)}
            </strong>{" "}
          </span>
        </li>

        <li
          id="app-button-click2"
          style={{ fontSize: "1.8rem" }}
          className="app-list-style-none app-mg-l-05 app-cursor-pointer"
        >
          <div
            style={{ color: "#888888", padding: "0.5rem" }}
            onClick={() => paginate(currentPage - 1)}
          >
            {"PREV"}
          </div>
        </li>
        <li
          id="app-button-click2"
          style={{ fontSize: "1.8rem" }}
          className="app-list-style-none app-cursor-pointer"
        >
          <div
            style={{ color: "#888888", padding: "0.5rem" }}
            onClick={() => paginate(currentPage + 1)}
          >
            {"NEXT"}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

// {pageNumbers.map((number, i) => {
//   return (
//     <li
//       key={i}
//       style={{ fontSize: "1.8rem" }}
//       className="app-list-style-none app-mg-lr-05"
//     >
//       <a
//         id={`${currentPage === number && "app-first-list"}`}
//         className={`app-text-deco-none app-active`}
//         onClick={() => paginate(number)}
//         href="#"
//       >
//         {/* {number} */}
//       </a>
//     </li>
//   );
// })}
