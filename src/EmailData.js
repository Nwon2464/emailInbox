import React from "react";
import { ReactComponent as ClipIcon } from "./Icon/icon_clip.svg";
import moment from "moment";
const EmailData = (props) => {
  return (
    <>
      <tbody>
        {props.serverData.map((e, i) => {
          {
            /* console.log(i) */
          }
          const aSliced = e.to.slice(0, 1);
          const sliced = e.to.slice(1, 4);
          const slicedLength = sliced.length;
          //only if diff btw last and last before = 1, shows timeline
          const hours = moment(e.date).utc().format("HH:mm");
          {
            /* console.log(moment(e.date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS")); */
          }

          {
            /* console.log(moment(e.date).utc().format("YYYY/MM/DD")); careful "YYYY-MM-DDTHH:mm:ss.SSSZ Z is timezone, so adjusted value will be added" */
          }

          {
            /* console.log(moment(e.date).utc().format("HH:mm:ss"));
          "YYYY-MM-DDTHH:mm:ss" */
          }
          const slicedButton = () => {
            console.log(sliced);
            return <div className="b app-position-absolute">Absolute</div>;
          };
          const delay = moment(e.date)
            .subtract(2, "days")
            .add(15, "hours")
            .format("YYYY-MM-DDTHH:mm:ss")
            .split("T")[0]
            .split("-");
          const last = props.lastDay.split("-");
          const x = moment(props.lastDay);
          const y = moment(e.date);
          const diff_s = x.diff(y, "seconds");
          {
            /* const diff_sX = moment
          .utc(moment.duration(diff_s, "seconds").asMilliseconds())
          .format("HH:mm:ss"); */
          }
          const a = moment([last[0], last[1], last[2]]);
          const b = moment([delay[0], delay[1], delay[2]]);
          const diffDays = a.diff(b, "days", true); // 1

          return (
            <>
              <div key={i} className="app-custom-border-bottom"></div>
              <tr
                style={{
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                }}
                className="media-fdirection-column app-flex app-height-25 app-align-center app-cursor-pointer1"
              >
                <td className="app-flex app-flex-basis-10 app-max-width-10 app-pd-l-1 app-flex-grow-0 app-min-width-0">
                  <div className="app-flex app-white-space-nowrap app-overflow-hidden">
                    <h3
                      className={`app-ellipsis  app-cursor-pointer ${
                        props.navIndicatorActive === "From"
                          ? "app-font-weight-700"
                          : ""
                      }`}
                    >
                      {e.from}{" "}
                    </h3>
                  </div>
                </td>
                <td className="app-flex app-flex-basis-20 app-max-width-20 app-pd-l-25 app-flex-grow-0 app-min-width-0">
                  <div className="app-flex app-white-space-nowrap app-overflow-hidden">
                    <h3
                      className={`app-ellipsis app-cursor-pointer ${
                        props.navIndicatorActive === "To"
                          ? "app-font-weight-700"
                          : ""
                      }`}
                    >
                      {aSliced[0]}{" "}
                    </h3>
                  </div>
                  {e.to.length !== 1 && (
                    <button
                      onClick={slicedButton}
                      style={{ maxWidth: "inherit" }}
                      className="dropdown app-cursor-pointer
                    app-align-center app-font-color-white app-flex app-background-message app-width-2 app-justify-content-center app-border-radius-5 app-mg-l-1 app-font-weight-600 app-plus-button app-full-height"
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
                </td>
                <td className="app-flex app-flex-1-1 app-pd-l-1 app-min-width-0">
                  <div className="app-flex app-white-space-nowrap app-overflow-hidden app-flex-grow-1">
                    <h3
                      className={`app-ellipsis app-cursor-pointer ${
                        props.navIndicatorActive === "Subject"
                          ? "app-font-weight-700"
                          : ""
                      }`}
                    >
                      {e.subject}
                    </h3>
                  </div>
                  <div className="app-flex-basis-15 app-pd-r-05 app-max-width-15">
                    <div className="app-cursor-pointer">
                      {slicedLength !== 0 && (
                        <ClipIcon
                          style={{ width: "1.3rem", height: "1.3rem" }}
                        />
                      )}{" "}
                    </div>
                  </div>
                </td>
                <td className="app-flex app-flex-basis-6 app-max-width-6 app-justify-content-start app-pd-r-1">
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
                </td>
              </tr>
            </>
          );
        })}
        <div className="app-custom-border-bottom"></div>
      </tbody>
    </>
  );
};

export default EmailData;
