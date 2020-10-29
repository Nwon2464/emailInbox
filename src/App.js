import React, { useState } from "react";
import axios from "axios";

import { ReactComponent as BallIcon } from "./Icon/ball-triangle.svg";
import { ReactComponent as SearchIcon } from "./Icon/icon_search.svg";
import { ReactComponent as CalenderIcon } from "./Icon/icon_calender.svg";
import MobileOnly from "./MobileOnly";
import FullScreenOnly from "./FullScreenOnly";

import Pagination from "./Pagination";
import DatePickerBack from "./DatePickerBack";
import DatePickerFront from "./DatePickerFront";
import logo from "./Icon/logo.png";
import moment from "moment";
const BACKEND_URL = "https://henne-for-email-backend.vercel.app";
// const BACKEND_URL = "http://localhost:5000";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(50);
  const [loading, setLoading] = useState(false);
  const [serverData, setServerData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startDateState, setStartDateState] = useState(null);
  const [endDateState, setEndDateState] = useState(null);
  const [lastDay, setLastDay] = useState("");
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = serverData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(indexOfFirstPost, indexOfLastPost);
  // moment(e.date).format("YYYY-MM-DD")

  const paginate = (pageNumber) => {
    if (pageNumber === 0) {
      return;
    }
    if (pageNumber === Math.ceil(serverData.length / dataPerPage) + 1) {
      return;
    }
    setCurrentPage(pageNumber);
  };
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
    const secondString = bb[1].replace(bb[1], "23:59:59.999Z");
    const start = `${aa[0]}T${firstString}`;
    const last = `${bb[0]}T${secondString}`;
    // const last = b;
    return { start, last };
  };
  const dateStateOnClick = () => {
    if (startDateState && endDateState !== null) {
      setLoading(true);
      const start = moment(startDateState).format();
      const last = moment(endDateState).format();
      const answer = isoStringReplace(start, last);

      setLastDay(answer.last);
      axios
        .get(
          `${BACKEND_URL}/api/v1/email?start=${answer.start}&last=${answer.last}`
        )
        .then((res) => {
          setTimeout(() => {
            setServerData(res.data);
            setLoading(false);
          }, 2000);
        });
    }
  };
  const [navIndicatorActive, setNavIndicatorActive] = useState("");
  const toggleMultipleIndicator = (value) => {
    setNavIndicatorActive(value);
    console.log(value);
  };
  return (
    <div className="app-flex app-flex-column app-flex-nowrap app-bottom-0 app-left-0 app-right-0 app-top-0 app-absolute">
      <div className="media-query-mg app-flex app-full-height app-flex-column app-align-start app-mg-l-45 app-mg-r-45 ">
        <div
          id="app-mobile-auto-width"
          className="mapp-mg-l-1 app-flex app-full-width app-justify-content-start app-mg-t-2"
        >
          <div className="app-flex app-width-30 app-height-4 app-align-center">
            <div className="app-box-shadow-inset-2 app-border-top app-border-bottom app-border-left app-flex app-full-height app-full-width app-flex-grow-1 app-border-bottom-left-radius-10 app-border-top-left-radius-10">
              <div className="app-flex app-align-center ">
                <div className="app-mg-l-15">
                  <CalenderIcon
                    className="mapp-width-15 mapp-height-15"
                    style={{ width: "2.3rem", height: "2.3rem" }}
                  />
                </div>
              </div>
              <div
                style={{ fontSize: "1.5rem", width: "20rem" }}
                className="mapp-width-13 mapp-mg-l-05 app-flex app-align-center app-mg-l-1"
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
              id="app-button-click"
              className="mapp-width-3 app-cursor-pointer app-button-background app-full-height app-button-y app-justify-content-center app-flex app-align-center app-width-4 app-border-left-button app-border-top-button app-border-bottom-button app-border-right-button app-border-bottom-right-radius-10 app-border-top-right-radius-10"
            >
              <div className="app-flex app-justify-content-center app-align-center">
                <SearchIcon
                  className="mapp-width-height-15"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
            </button>
          </div>
        </div>

        <div id="app-mobile-auto-width" className="mapp-mg-l-1 app-full-width">
          <div className="app-mg-t-15 app-flex app-justify-content-start">
            <h3 className="app-font-weight-700 app-font-15 app-font-color">
              Results: {serverData.length || 0} mail(s)
            </h3>
          </div>{" "}
        </div>
        <div className="app-custom-border"></div>

        {loading ? (
          <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
            <div className="app-position-absolute app-full-height app-full-width app-flex app-justify-content-center app-align-center">
              <BallIcon />
            </div>
          </div>
        ) : (
          <>
            {serverData.length === 0 ? (
              <>
                <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
                  <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <FullScreenOnly
                  lastDay={lastDay}
                  currentData={currentData}
                  navIndicatorActive={navIndicatorActive}
                  toggleMultipleIndicator={toggleMultipleIndicator}
                />
                <MobileOnly
                  lastDay={lastDay}
                  currentData={currentData}
                  navIndicatorActive={navIndicatorActive}
                  toggleMultipleIndicator={toggleMultipleIndicator}
                />
                <Pagination
                  currentPage={currentPage}
                  dataPerPage={dataPerPage}
                  totalData={serverData.length}
                  paginate={paginate}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
