// import React from "react";
// import { ReactComponent as SearchIcon } from "./Icon/icon_search.svg";
// import { ReactComponent as CalenderIcon } from "./Icon/icon_calender.svg";
// const App = () => {
//   return (
//     <div className="app-flex app-flex-column app-flex-nowrap app-bottom-0 app-left-0 app-right-0 app-top-0 app-absolute">
//       <div className="app-mg-l-45 app-mg-r-45">
//         <div className="app-flex app-mg-t-2">
//           <div className="app-flex app-width-30 app-height-4 app-border-2 app-border-radius-10">
//             <div className="app-flex app-full-height app-full-width">
//               <div className="app-flex app-align-center app-pd-0-1">
//                 <CalenderIcon style={{ width: "2.3rem", height: "2.3rem" }} />
//               </div>
//               <div
//                 style={{ fontSize: "1.5rem", width: "20rem" }}
//                 className="app-flex app-align-center"
//               >
//                 <h3>2001/18/12 - 2020/1/1</h3>
//               </div>
//             </div>

//             <button
//               className="app-button-y app-justify-content-center app-flex app-align-center app-width-4
// "
//             >
//               <div className="app-flex app-justify-content-center app-align-center">
//                 <SearchIcon style={{ width: "2rem", height: "2rem" }} />
//               </div>
//             </button>
//           </div>
//         </div>

//         <div>bottom</div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as SearchIcon } from "./Icon/icon_search.svg";
import { ReactComponent as CalenderIcon } from "./Icon/icon_calender.svg";
import { ReactComponent as FaceUpIcon } from "./Icon/icon_arrow01.svg";
import { ReactComponent as ClipIcon } from "./Icon/icon_clip.svg";
import { data } from "./data";
import DatePickerBack from "./DatePickerBack";
import DatePickerFront from "./DatePickerFront";
import logo from "./Icon/logo.png";
const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startDateState, setStartDateState] = useState(null);
  const [endDateState, setEndDateState] = useState(null);

  const BASE_URL = "http://localhost:5000";
  const handleDateSelect = (a) => {
    setStartDateState(a);
  };

  const handleDateSelect2 = (a) => {
    setEndDateState(a);
  };
  const dateStateOnClick = async () => {
    if (startDateState && endDateState !== null) {
      const start = startDateState.toISOString();
      const last = endDateState.toISOString();
      console.log(start);
      const response = await axios.post(`${BASE_URL}/api/v1`, { last, start });
      console.log(response);
    }
  };
  return (
    <div className="app-flex app-flex-column app-flex-nowrap app-bottom-0 app-left-0 app-right-0 app-top-0 app-absolute">
      <div className="app-flex app-flex-column app-align-start app-mg-l-45 app-mg-r-45 ">
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
              Results: 0 mail(s)
            </h3>
          </div>{" "}
        </div>
        <div className="app-custom-border"></div>

        {/* <div className="app-full-height app-full-width app-flex app-justify-content-center app-align-center">
          <img src={logo} alt="logo" />
        </div> */}
        <div className="app-relative">
          <table className="app-full-width app-border-spacing-0 app-table-layout-fixed">
            <tbody>
              <tr
                style={{
                  // border: "1px solid red",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                }}
                className="app-flex app-align-center app-button-background app-height-25"
              >
                <td className="app-flex app-flex-basis-10 app-max-width-10 app-pd-l-1 app-flex-grow-0 app-min-width-0">
                  <div className="app-full-width">
                    <h3 className="app-font-weight-700 app-font-color">From</h3>
                  </div>
                </td>
                <td
                  className="app-flex app-flex-basis-20 app-max-width-20 app-pd-l-25 app-flex-grow-0 app-min-width-0
"
                >
                  {" "}
                  <div className="app-full-width">
                    <h3 className="app-font-weight-700 app-font-color">To</h3>
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
                    <h3 className="app-font-weight-700 app-font-color">Date</h3>
                  </div>
                  <div className="app-mg-l-05">
                    <FaceUpIcon style={{ width: "0.7rem", height: "0.7rem" }} />
                  </div>
                </td>
              </tr>
              {data.map((e, i) => {
                return (
                  <>
                    <div className="app-custom-border-bottom"></div>

                    <tr
                      style={{
                        // border: "1px solid red",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                      }}
                      // id="app-hover-1034dd"
                      className="app-flex app-height-25 app-align-center app-cursor-pointer1"
                    >
                      <td className="app-flex app-flex-basis-10 app-max-width-10 app-pd-l-1 app-flex-grow-0 app-min-width-0">
                        <div className="app-flex app-white-space-nowrap app-overflow-hidden">
                          <h3 className="app-ellipsis  app-cursor-pointer">
                            {e.from}{" "}
                          </h3>
                        </div>
                      </td>
                      <td className="app-flex app-flex-basis-20 app-max-width-20 app-pd-l-25 app-flex-grow-0 app-min-width-0">
                        <div className="app-flex app-white-space-nowrap app-overflow-hidden">
                          <h3 className="app-ellipsis  app-cursor-pointer">
                            {e.to}{" "}
                          </h3>
                        </div>
                      </td>
                      <td className="app-flex app-flex-1-1 app-pd-l-1 app-min-width-0">
                        <div className="app-flex app-white-space-nowrap app-overflow-hidden app-flex-grow-1">
                          <h3 className="app-ellipsis  app-cursor-pointer">
                            {e.subject}
                          </h3>
                        </div>
                        <div className="app-flex-basis-15 app-pd-r-05 app-max-width-15">
                          <div className=" app-cursor-pointer">
                            <ClipIcon
                              style={{ width: "1.3rem", height: "1.3rem" }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="app-flex app-flex-basis-6 app-max-width-6 app-justify-content-start app-pd-r-1">
                        {" "}
                        <div>
                          <h3 className="app-ellipsis  ">{e.date}</h3>
                        </div>
                      </td>
                    </tr>
                    {/* <div className="app-custom-border-bottom-2"></div> */}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="app-custom-border-bottom"></div>
      </div>
    </div>
  );
};

export default App;
