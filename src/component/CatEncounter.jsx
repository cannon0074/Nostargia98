import React, { useState, useEffect } from "react";

import "../css/style.css";
import "../css/explorerstyle.css";

import nekobackground from "../img/nekostanp.png";
import Window from "../layout/Window.jsx";

const CatEncounter = () => {
  const [catUrl, setCatUrl] = useState("");

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
      <Window
        title="Cat Encounter"
        style={{ backgroundImage: `url(${nekobackground})` }}
      >
        {/* <Window></Window>で囲ってprops.childrenを使う */}

        <div className="app-mainview">
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
      </Window>
    </>
  );
};

export default CatEncounter;
