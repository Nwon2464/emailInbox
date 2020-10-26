import React from "react";
import { ReactComponent as ClipIcon } from "./Icon/icon_clip.svg";
const EmailData = (props) => {
  console.log(props)
    return (
    <>
      {props.serverData.map((e, i) => {
        return (
          <>
            <div key={i} className="app-custom-border-bottom"></div>
            <tr
              style={{
                paddingTop: "0.3rem",
                paddingBottom: "0.3rem",
              }}
              className="app-flex app-height-25 app-align-center app-cursor-pointer1"
            >
              <td className="app-flex app-flex-basis-10 app-max-width-10 app-pd-l-1 app-flex-grow-0 app-min-width-0">
                <div className="app-flex app-white-space-nowrap app-overflow-hidden">
                  <h3 className="app-ellipsis  app-cursor-pointer">
                    {e.from}{" "}
                  </h3>
                </div>
              </td>
              <td className="app-flex app-flex-basis-150 app-max-width-150 app-pd-l-25 app-flex-grow-0 app-min-width-0">
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
                    <ClipIcon style={{ width: "1.3rem", height: "1.3rem" }} />
                  </div>
                </div>
              </td>
              <td className="app-flex app-flex-basis-6 app-max-width-6 app-justify-content-start app-pd-r-1">
                {" "}
                <div>
                  <h3 className="app-ellipsis  ">
                    {e.date.split("T")[0]}
                  </h3>
                </div>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default EmailData;
