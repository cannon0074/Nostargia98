import React, { useState, useEffect } from "react";

import "../css/style.css";
import "../css/explorerstyle.css";

import min from "../img/min.png";
import max from "../img/max.png";
import close from "../img/close.png";
import nekobackground from "../img/nekostanp.png";

const CatEncounter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [catUrl, setCatUrl] = useState("");

  const windowClose = () => {
    setIsVisible(false);
  };

  const changeCatImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        return res.json();
      })
      .then((json) => setCatUrl(json[0].url));
  };

  useEffect(() => {
    changeCatImage();
  }, []);

  return (
    <>
      {isVisible && (
        <div className="explorer-wrap">
          <div className="explorerheader">
            <div className="window">
              <div className="title-bar">
                <div className="title-bar-text">Cat Encounter</div>
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

              <div
                style={{ backgroundImage: `url(${nekobackground})` }}
                className="explorer-view"
              >
                <div className="cat-mainview">
                  <div className="main">
                    <img
                      src={catUrl}
                      alt="猫の画像"
                      style={{ maxWidth: "500px", maxHeight: "300px" }}
                    />
                  </div>
                  <div className="cat-button">
                    <button onClick={changeCatImage}>更新</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatEncounter;
