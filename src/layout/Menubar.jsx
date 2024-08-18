import React from "react";

import "../css/style.css";
import "../css/explorerstyle.css";

import leftarrow from "../img/leftarrow.png";
import rightarrow from "../img/rightarrow.png";
import play from "../img/play.png";
import stop from "../img/stop.png";
import favorite from "../img/favorite.png";
import history from "../img/history.png";

const Menubar = (props) => {
  return (
    <>
      <div className="bar">
        <div className="menubar">
          <div className="imitation3"></div>
          <div className="menubar-button-wrap">
            <button className="menubar-button">ファイル(F)</button>
            <button className="menubar-button">編集(E)</button>
            <button className="menubar-button">表示(V)</button>
            <button className="menubar-button">お気に入り(A)</button>
            <button className="menubar-button">ツール(T)</button>
            <button className="menubar-button">ヘルプ(H)</button>
          </div>
        </div>
        <div className="toolbar">
          <div className="mini-tool"></div>
          <div className="toolbar-button-wrap">
            <button className="toolbar-button">
              <img className="toolbar-button-img" src={leftarrow} />
              <div className="toolbar-button-txt">戻る</div>
            </button>
            <button className="toolbar-button">
              <img className="toolbar-button-img" src={rightarrow} />
              <div className="toolbar-button-txt">進む</div>
            </button>
            <button className="toolbar-button">
              <img className="toolbar-button-img" src={play} />
              <div className="toolbar-button-txt">再生</div>
            </button>
            <button className="toolbar-button">
              <img className="toolbar-button-img" src={stop} />
              <div className="toolbar-button-txt">停止</div>
            </button>
            <button className="toolbar-button">
              <img className="toolbar-button-img" src={favorite} />
              <div className="toolbar-button-txt">お気に入り</div>
            </button>
            <button className="toolbar-button">
              <img className="toolbar-button-img" src={history} />
              <div className="toolbar-button-txt">履歴</div>
            </button>
          </div>
        </div>
        <div className="addressbar">
          <div className="imitation3"></div>
          <div className="addressbar-ttl">アドレス(D)</div>
          <div className="FakeSelect">
            <div class="FakeSelect__children">{props.link}</div>
            <div class="FakeSelect__arrow"></div>
          </div>
        </div>
        <div className="frame"></div>
      </div>
    </>
  );
};

export default Menubar;
