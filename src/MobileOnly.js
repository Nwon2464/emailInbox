import React from "react";
import moment from "moment";
import Pagination from "./Pagination";
import { ReactComponent as ClipIcon } from "./Icon/icon_clip.svg";
import { ReactComponent as FaceUpIcon } from "./Icon/icon_arrow01.svg";

import { ReactComponent as RightArrow } from "./Icon/icon_arrow02.svg";
import { ReactComponent as MailIcon } from "./Icon/icon_mail_sp.svg";

const MobileOnly = (props) => {
  const { dataPerPage, totalData, paginate, currentPage } = props;
  return (
    <>
      <div id="app-mobile" className="app-relative">
        <table className="app-full-width app-border-spacing-0 app-table-layout-fixed">
          <thead>
            <tr
              style={{
                paddingTop: "0.3rem",
                paddingBottom: "0.3rem",
              }}
              className="app-flex app-align-center app-button-background app-height-25"
            >
              <th className="mapp-mg-l-1">
                <div className="app-cursor-pointer3 app-flex app-justify-content-start app-full-width">
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
                      <FaceUpIcon
                        style={{ width: "0.7rem", height: "0.7rem" }}
                      />
                    </div>
                  )}{" "}
                </div>
              </th>
              <th className="mapp-mg-l-05 mapp-navigation-link-left-border mapp-mg-t-02"></th>

              <th className="mapp-mg-l-05">
                <div className="app-cursor-pointer3 app-flex app-justify-content-start app-full-width">
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
                      <FaceUpIcon
                        style={{ width: "0.7rem", height: "0.7rem" }}
                      />
                    </div>
                  )}
                </div>
              </th>
              <th className="mapp-mg-l-05 mapp-navigation-link-left-border mapp-mg-t-02"></th>

              <th className="mapp-mg-l-05">
                <div className="app-cursor-pointer3 app-flex app-justify-content-start app-full-width">
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
                      <FaceUpIcon
                        style={{ width: "0.7rem", height: "0.7rem" }}
                      />
                    </div>
                  )}
                </div>
              </th>
              <th className="mapp-mg-l-05 mapp-navigation-link-left-border mapp-mg-t-02"></th>

              <th className="mapp-mg-l-05">
                <div className="app-cursor-pointer3 app-flex">
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
                      <FaceUpIcon
                        style={{ width: "0.7rem", height: "0.7rem" }}
                      />
                    </div>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.currentData.map((e, i) => {
              const aSliced = e.to.slice(0, 1);
              const sliced = e.to.slice(1, 4);
              const slicedLength = sliced.length;
              //only if diff btw last and last before = 1, shows timeline
              const hours = moment(e.date).utc().format("HH:mm");
              const slicedButton = () => {
                return <div className="b app-position-absolute">Absolute</div>;
              };
              const delay = moment(e.date)
                .subtract(2, "days")
                .add(15, "hours")
                .format("YYYY-MM-DDTHH:mm:ss")
                .split("T")[0]
                .split("-");
              const last = props.lastDay.split("-");

              const a = moment([last[0], last[1], last[2]]);
              const b = moment([delay[0], delay[1], delay[2]]);
              const diffDays = a.diff(b, "days", true); // 1

              return (
                <React.Fragment key={i}>
                  <tr>
                    <td className="app-custom-border-bottom"></td>
                  </tr>
                  <tr
                    style={{
                      paddingTop: "0.7rem",
                      paddingBottom: "0.7rem",
                    }}
                    className="app-flex-nowrap media-height-55 app-flex app-height-25 app-align-center mapp-cursor-pointer1"
                  >
                    <td className="app-flex app-full-width">
                      <div className="app-flex-order-1 app-flex app-align-center app-mg-l-05">
                        <MailIcon style={{ width: "2rem", height: "2.5rem" }} />
                      </div>
                      <div className="app-flex-shrink-1 app-flex-grow-1 app-flex-order-2 app-min-width-0 mapp-mg-l-05 ">
                        <div className="app-justify-content-start app-flex app-white-space-nowrap app-overflow-hidden app-mg-b-03">
                          <h3
                            className={`app-flex-grow-1 app-flex-shrink-1 app-ellipsis  app-cursor-pointer ${
                              props.navIndicatorActive === "From"
                                ? "app-font-weight-700"
                                : ""
                            }`}
                          >
                            {e.from}{" "}
                          </h3>
                          <div className="app-mg-r-05 app-mg-t-015">
                            <div className="app-flex app-full-height app-align-center app-cursor-pointer">
                              {slicedLength !== 0 && (
                                <ClipIcon
                                  style={{ width: "1rem", height: "1rem" }}
                                />
                              )}{" "}
                            </div>
                          </div>
                        </div>
                        <div className="app-mg-t-04 app-justify-content-start app-flex app-white-space-nowrap app-overflow-hidden">
                          <h3
                            className={`app-ellipsis app-cursor-pointer ${
                              props.navIndicatorActive === "To"
                                ? "app-font-weight-700"
                                : ""
                            }`}
                          >
                            {aSliced[0]}{" "}
                          </h3>

                          {e.to.length !== 1 && (
                            <button
                              onClick={slicedButton}
                              style={{
                                maxWidth: "inherit",
                                marginTop: "0.17rem",
                              }}
                              className="dropdown app-cursor-pointer app-align-center app-font-color-white app-flex app-background-message app-width-2 app-justify-content-center app-border-radius-5 app-mg-l-1 app-font-weight-600 app-plus-button app-full-height"
                            >
                              <div className="dropdown-content">
                                <p
                                  className="app-text-deco-under"
                                  style={{ color: "#666666" }}
                                >
                                  {sliced[0]}
                                </p>
                                <p
                                  className="app-text-deco-under"
                                  style={{ color: "#666666" }}
                                >
                                  {" "}
                                  {sliced[1]}
                                </p>
                              </div>
                              <h3 className="app-flex">+{slicedLength}</h3>
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="app-flex app-flex-order-3 app-mg-r-13 app-height-15">
                        {" "}
                        <div>
                          <h3
                            className={`app-ellipsis ${
                              props.navIndicatorActive === "Date"
                                ? "app-font-weight-700"
                                : ""
                            }`}
                          >
                            {diffDays === 1 ? (
                              <>{hours}</>
                            ) : (
                              <>{moment(e.date).utc().format("YYYY/MM/DD")}</>
                            )}
                          </h3>
                        </div>
                        <div className="app-mg-l-05">
                          <RightArrow
                            style={{ width: "0.5rem", height: "0.5rem" }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="app-full-width">
                      <div className="app-mg-t-03 app-mg-l-1 app-flex app-white-space-nowrap app-overflow-hidden app-flex-grow-1">
                        <h3
                          style={{ fontSize: "1.4rem" }}
                          className={`app-width-27 app-ellipsis app-cursor-pointer ${
                            props.navIndicatorActive === "Subject"
                              ? "app-font-weight-700"
                              : ""
                          }`}
                        >
                          {e.subject}
                        </h3>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
            <tr>
              <td className="app-custom-border-bottom"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        dataPerPage={dataPerPage}
        totalData={totalData}
        paginate={paginate}
      />
    </>
  );
};

export default MobileOnly;
