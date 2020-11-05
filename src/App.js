import React, { useState } from "react";
import axios from "axios";

import { useTable, useFilters, useSortBy } from "react-table";
import { ReactComponent as BallIcon } from "./Icon/ball-triangle.svg";
import MobileOnly from "./MobileOnly";
import FullScreenOnly from "./FullScreenOnly";
import Header from "./Header";
import Pagination from "./Pagination";
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

  //Picked Date from Date Picker and Fetch Data from server
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
  };

  return (
    <div className="app-flex app-flex-column app-flex-nowrap app-bottom-0 app-left-0 app-right-0 app-top-0 app-absolute">
      <div className="media-query-mg app-flex app-full-height app-flex-column app-align-start app-mg-l-45 app-mg-r-45 ">
        <Header
          handleDateSelect={handleDateSelect}
          handleDateSelect2={handleDateSelect2}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          dateStateOnClick={dateStateOnClick}
          serverData={serverData}
        />
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
                {/* <FullScreenOnly
                  lastDay={lastDay}
                  currentData={currentData}
                  navIndicatorActive={navIndicatorActive}
                  toggleMultipleIndicator={toggleMultipleIndicator}
                /> */}
                <FullScreenOnly
                  lastDay={lastDay}
                  currentData={serverData} 
                  navIndicatorActive={navIndicatorActive}
                  toggleMultipleIndicator={toggleMultipleIndicator}
                />
                <MobileOnly
                  lastDay={lastDay}
                  currentData={currentData}
                  navIndicatorActive={navIndicatorActive}
                  toggleMultipleIndicator={toggleMultipleIndicator}
                />
                {/* <Pagination
                  currentPage={currentPage}
                  dataPerPage={dataPerPage}
                  totalData={serverData.length}
                  paginate={paginate}
                /> */}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
