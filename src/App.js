import React, { useState, useEffect } from "react";
import axios from "axios";

import { ReactComponent as BallIcon } from "./Icon/ball-triangle.svg";
import { ReactComponent as SearchIcon } from "./Icon/icon_search.svg";
import { ReactComponent as CalenderIcon } from "./Icon/icon_calender.svg";
import { ReactComponent as FaceUpIcon } from "./Icon/icon_arrow01.svg";

import Pagination from "./Pagination";
import EmailData from "./EmailData";
import DatePickerBack from "./DatePickerBack";
import DatePickerFront from "./DatePickerFront";
import logo from "./Icon/logo.png";
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(25);
  const [loading, setLoading] = useState(false);
  const [serverData, setServerData] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startDateState, setStartDateState] = useState(null);
  const [endDateState, setEndDateState] = useState(null);

  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = serverData.slice(indexOfFirstPost, indexOfLastPost);

  const BASE_URL = "http://localhost:5000";

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleDateSelect = (a) => {
    setStartDateState(a);
  };

  const handleDateSelect2 = (a) => {
    setEndDateState(a);
  };
  const isoStringReplace = (a, b) => {
    const aa = a.split("T");
    const bb = b.split("T");
    const firstString = aa[1].replace(aa[1], "00:00:00.000Z");
    const secondString = bb[1].replace(bb[1], "00:00:00.000Z");
    const start = `${aa[0]}T${firstString}`;
    const last = `${bb[0]}T${secondString}`;
    return { start, last };
  };
  const dateStateOnClick = async () => {
    if (startDateState && endDateState !== null) {
      const start = startDateState.toISOString();
      const last = endDateState.toISOString();
      const answer = isoStringReplace(start, last);
      setLoading(true);

      axios
        .get(
          `${BASE_URL}/api/v1/email?start=${answer.start}&last=${answer.last}`
        )
        .then((res) => {
          setTimeout(() => {
            setServerData(res.data);
            setLoading(false);
          }, 2000);
        });
    }
  };
  return (
    <div className="app-flex app-flex-column app-flex-nowrap app-bottom-0 app-left-0 app-right-0 app-top-0 app-absolute">
      <div className="app-flex app-full-height app-flex-column app-align-start app-mg-l-45 app-mg-r-45 ">
        <div className="app-flex app-full-width app-justify-content-start app-mg-t-2">
          <div className="app-flex app-width-30 app-height-4 app-align-center">
            <div className="app-box-shadow-inset-2 app-border-top app-border-bottom app-border-left app-flex app-full-height app-full-width app-flex-grow-1 app-border-bottom-left-radius-10 app-border-top-left-radius-10">
              <div className="app-flex app-align-center ">
                <div className="app-mg-l-15">
                  <CalenderIcon style={{ width: "2.3rem", height: "2.3rem" }} />
                </div>
              </div>
              <div
                style={{ fontSize: "1.5rem", width: "20rem" }}
                className="app-flex app-align-center app-mg-l-1"
              >
                {" "}
                <DatePickerFront
                  handleDateSelect={handleDateSelect}
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                />
                <DatePickerBack
                  handleDateSelect2={handleDateSelect2}
                  startDate={startDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
                {/* <h3 className="app-font-weight-600 app-mg-b-03">
                  2001/18/12 - 2020/1/1
                </h3> */}
              </div>
            </div>

            <button
              onClick={dateStateOnClick}
              className="app-cursor-pointer app-button-background app-full-height app-button-y app-justify-content-center app-flex app-align-center app-width-4 app-border-left-button app-border-top-button app-border-bottom-button app-border-right-button app-border-bottom-right-radius-10 app-border-top-right-radius-10"
            >
              <div className="app-flex app-justify-content-center app-align-center">
                <SearchIcon style={{ width: "2rem", height: "2rem" }} />
              </div>
            </button>
          </div>
        </div>

        <div className="app-full-width">
          <div className="app-mg-t-15 app-flex app-justify-content-start">
            <h3 className="app-font-weight-700 app-font-15 app-font-color">
              Results: {serverData.length || 0} mail(s)
            </h3>
          </div>{" "}
        </div>
        <div className="app-custom-border"></div>
        {serverData.length === 0 ? (
          <>
            {loading ? (
              <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
                <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
                  <BallIcon />
                </div>
              </div>
            ) : (
              <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
                <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
                  <img src={logo} alt="logo" />
                </div>{" "}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="app-relative">
              <table className="app-full-width app-border-spacing-0 app-table-layout-fixed">
                <tbody>
                  <tr
                    style={{
                      paddingTop: "0.3rem",
                      paddingBottom: "0.3rem",
                    }}
                    className="app-flex app-align-center app-button-background app-height-25"
                  >
                    <td className="app-flex app-flex-basis-10 app-max-width-10 app-pd-l-1 app-flex-grow-0 app-min-width-0">
                      <div className="app-full-width">
                        <h3 className="app-font-weight-700 app-font-color">
                          From
                        </h3>
                      </div>
                    </td>
                    <td
                      className="app-flex app-flex-basis-150 app-max-width-150 app-pd-l-25 app-flex-grow-0 app-min-width-0
"
                    >
                      {" "}
                      <div className="app-full-width">
                        <h3 className="app-font-weight-700 app-font-color">
                          To
                        </h3>
                      </div>
                    </td>
                    <td className="app-flex app-flex-1-1 app-pd-l-1 app-min-width-0">
                      {" "}
                      <div className="app-full-width">
                        <h3 className="app-font-weight-700 app-font-color">
                          Subject
                        </h3>
                      </div>
                    </td>
                    <td className="app-flex app-flex-basis-6 app-max-width-6 app-justify-content-start app-pd-r-1">
                      <div className="">
                        <h3 className="app-font-weight-700 app-font-color">
                          Date
                        </h3>
                      </div>
                      <div className="app-mg-l-05">
                        <FaceUpIcon
                          style={{ width: "0.7rem", height: "0.7rem" }}
                        />
                      </div>
                    </td>
                  </tr>
                  <EmailData serverData={currentData} />
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="app-custom-border-bottom"></div>

        <Pagination
          dataPerPage={dataPerPage}
          totalData={serverData.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
