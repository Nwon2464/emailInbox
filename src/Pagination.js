import React, { useRef } from "react";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  // const refref = useRef();
  // console.log(refref);
  console.log(currentPage);
  return (
    <div className="app-full-width">
      <ul className="app-flex app-justify-content-center app-height-5 app-align-center">
        {pageNumbers.map((number, i) => {
          console.log(number);
          return (
            <li
              key={i}
              style={{ fontSize: "1.8rem" }}
              className="app-list-style-none app-mg-lr-05"
            >
              <a
                id={`${currentPage === number && "app-first-list"}`}
                className={`app-text-deco-none app-active`}
                onClick={() => paginate(number)}
                href="#"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
