import React from "react";
import { ReactComponent as SearchIcon } from "./Icon/icon_search.svg";
import { ReactComponent as CalenderIcon } from "./Icon/icon_calender.svg";
import DatePickerBack from "./DatePickerBack";
import DatePickerFront from "./DatePickerFront";

const Header = (props) => {
  return (
    <>
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
                handleDateSelect={props.handleDateSelect}
                startDate={props.startDate}
                endDate={props.endDate}
                setStartDate={props.setStartDate}
              />
              <DatePickerBack
                handleDateSelect2={props.handleDateSelect2}
                startDate={props.startDate}
                endDate={props.endDate}
                setEndDate={props.setEndDate}
              />
            </div>
          </div>

          <button
            onClick={props.dateStateOnClick}
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
            Results: {props.serverData.length || 0} mail(s)
          </h3>
        </div>{" "}
      </div>
      <div className="app-custom-border"></div>
    </>
  );
};

export default Header;
