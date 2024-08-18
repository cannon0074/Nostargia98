import React, { useState } from "react";

import "../css/style.css";
import "../css/explorerstyle.css";

import min from "../img/min.png";
import max from "../img/max.png";
import close from "../img/close.png";

const Window = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const windowClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="explorer-wrap">
          <div className="explorerheader">
            <div className="window">
              <div className="title-bar">
                <div className="title-bar-text">{props.title}</div>
                <div className="title-bar-controls">
                  <button
                    className="title-bar-button"
                    aria-label="Minimize"
                    style={{ backgroundImage: `url(${min})` }}
                  ></button>
                  <button
                    className="title-bar-button"
                    aria-label="Maximize"
                    style={{ backgroundImage: `url(${max})` }}
                  ></button>
                  <button
                    className="title-bar-button"
                    aria-label="Close"
                    id="close"
                    style={{ backgroundImage: `url(${close})` }}
                    onClick={windowClose}
                  ></button>
                </div>
              </div>
              {props.menubar}
              <div style={props.style} className="explorer-view">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Window;
