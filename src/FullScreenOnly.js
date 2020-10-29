import React from "react";
import { ReactComponent as FaceUpIcon } from "./Icon/icon_arrow01.svg";
import EmailData from "./EmailData";
const FullScreenOnly = (props) => {
  return (
    <div id="app-full-screen" className="app-relative">
      <table className="app-full-width app-border-spacing-0 app-table-layout-fixed">
        <thead>
          <tr
            style={{
              paddingTop: "0.3rem",
              paddingBottom: "0.3rem",
            }}
            className="app-flex app-align-center app-button-background app-height-25"
          >
            <th className="app-flex app-flex-basis-10 app-max-width-10 app-pd-l-1 app-flex-grow-0 app-min-width-0">
              <div className="app-cursor-pointer app-flex app-justify-content-start app-full-width">
                <h3
                  onClick={() => props.toggleMultipleIndicator("From")}
                  className={`app-black app-font-weight-700 app-font-color ${
                    props.navIndicatorActive !== "From"
                      ? ""
                      : "app-text-deco-underline app-color-black"
                  }`}
                >
                  From
                </h3>
                {props.navIndicatorActive === "From" && (
                  <div className="app-mg-l-05">
                    <FaceUpIcon style={{ width: "0.7rem", height: "0.7rem" }} />
                  </div>
                )}{" "}
              </div>
            </th>
            <th className="app-flex app-flex-basis-20 app-max-width-20 app-pd-l-25 app-flex-grow-0 app-min-width-0">
              <div className="app-cursor-pointer app-flex app-justify-content-start app-full-width">
                <h3
                  onClick={() => props.toggleMultipleIndicator("To")}
                  className={`app-black app-font-weight-700 app-font-color ${
                    props.navIndicatorActive !== "To"
                      ? ""
                      : "app-text-deco-underline app-color-black"
                  }`}
                >
                  To
                </h3>
                {props.navIndicatorActive === "To" && (
                  <div className="app-mg-l-05">
                    <FaceUpIcon style={{ width: "0.7rem", height: "0.7rem" }} />
                  </div>
                )}
              </div>
            </th>
            <th className="app-flex app-flex-1-1 app-pd-l-1 app-min-width-0">
              <div className="app-cursor-pointer app-flex app-justify-content-start app-full-width">
                <h3
                  onClick={() => props.toggleMultipleIndicator("Subject")}
                  className={`app-black app-font-weight-700 app-font-color ${
                    props.navIndicatorActive !== "Subject"
                      ? ""
                      : "app-text-deco-underline app-color-black"
                  }`}
                >
                  Subject
                </h3>
                {props.navIndicatorActive === "Subject" && (
                  <div className="app-mg-l-05">
                    <FaceUpIcon style={{ width: "0.7rem", height: "0.7rem" }} />
                  </div>
                )}
              </div>
            </th>
            <th className="app-flex app-flex-basis-6 app-max-width-6 app-justify-content-start app-pd-r-1">
              <div className="app-cursor-pointer app-flex">
                <h3
                  onClick={() => props.toggleMultipleIndicator("Date")}
                  className={`app-black app-font-weight-700 ${
                    props.navIndicatorActive !== "Date"
                      ? "app-font-color"
                      : "app-text-deco-underline"
                  }`}
                >
                  Date
                </h3>
                {props.navIndicatorActive === "Date" && (
                  <div className="app-mg-l-05">
                    <FaceUpIcon style={{ width: "0.7rem", height: "0.7rem" }} />
                  </div>
                )}
              </div>
            </th>
          </tr>
        </thead>
        <EmailData
          lastDay={props.lastDay}
          serverData={props.currentData}
          navIndicatorActive={props.navIndicatorActive}
        />
      </table>
    </div>
  );
};

export default FullScreenOnly;
