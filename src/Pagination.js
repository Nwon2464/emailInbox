import React from "react";

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="app-full-width">
      <ul className="app-flex app-justify-content-center">
        {pageNumbers.map((number) => {
          return (
            <li className="app-list-style-none">
              <a
                className="app-text-deco-none"
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
