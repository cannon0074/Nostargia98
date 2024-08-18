import React, { useState, useEffect } from "react";

import "../css/style.css";
import "../css/explorerstyle.css";

import nekobackground from "../img/nekostanp.png";
import Window from "../layout/Window.jsx";

const FoxShrine = () => {
  const [foxUrl, setFoxUrl] = useState("");

  const changeFoxImage = () => {
    fetch("https://randomfox.ca/floof")
      .then((res) => {
        return res.json();
      })
      .then((json) => setFoxUrl(json.image));
  };

  useEffect(() => {
    changeFoxImage();
  }, []);

  return (
    <>
      <Window
        title="Fox Shrine"
        style={{ backgroundImage: `url(${nekobackground})` }}
      >
        {/* <Window></Window>で囲ってprops.childrenを使う */}

        <div className="app-mainview">
          <div className="main">
            <img
              src={foxUrl}
              alt="狐の画像"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            />
          </div>
          <div className="cat-button">
            <button onClick={changeFoxImage}>更新</button>
          </div>
        </div>
      </Window>
    </>
  );
};

export default FoxShrine;
