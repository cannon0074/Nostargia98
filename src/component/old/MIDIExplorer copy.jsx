import React, { useState } from "react";
import "../css/style.css";
import "../css/explorerstyle.css";

import background from "../img/hosizora.gif";

import MIDIAudio from "./audio.jsx";
import MIDIAudio2 from "./audio2.jsx";
import MIDIAudio3 from "./audio3.jsx";
import MIDIAudio4 from "./audio4.jsx";

const MIDIExplorer = () => {
  return (
    <>
      {isVisible && (
        <div className="explorer-wrap">
          <div className="explorerheader">
            <div className="window">
              <div className="title-bar">
                <div className="title-bar-text">MIDI Explorer</div>
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
                    <div class="FakeSelect__children">
                      http//www.cannon0074.com/main.html
                    </div>
                    <div class="FakeSelect__arrow"></div>
                  </div>
                </div>
                <div className="frame"></div>
              </div>
              <div className="explorer-view">
                <div
                  style={{ backgroundImage: `url(${background})` }}
                  className="mainview"
                >
                  <div className="main">
                    <div className="txtbox">
                      <div className="main-ttl">★MIDI保管庫★</div>
                      <div className="main-txt">
                        ここはかつてのインターネットを再現した場所。
                        <br />
                        あの頃の雰囲気を少しでも楽しめたらいいなと思い作成しました。
                        <br />
                        <br />
                        個人ホームページでイラストを公開したり、MIDIが流れ出したり、掲示板でやりとりしたり、今では見なくなった文化がたくさんあります。
                        <br />
                        ここではあの頃の思い出が詰まったMIDIをご紹介いたします。（※MIDI自体は現在でも使われている規格です。）
                      </div>
                    </div>
                  </div>

                  <div className="main-midi">
                    <div className="main-midi-ttl">
                      【Seat of the Stardust】
                    </div>
                    <div className="main-midi-txt">
                      WWAというブラウザゲーム作品のひとつで使用されていた曲です。
                      <br />
                      主人公が魚で海が舞台のゲームでしたがそれとマッチしており今でも思い出深い一曲です。
                    </div>
                    <MIDIAudio />

                    <div className="main-midi-ttl">【ending】</div>
                    <div className="main-midi-ttl">【ds_01】</div>
                    <div className="main-midi-txt">
                      アドベンチャーゲーム★オンライン『迷宮』というブラウザゲームで使用されていた曲です。
                      <br />
                      PCの基本知識を使わせられたり、小さい自分にはとても難しく、とても楽しかったですね。今でも大好きなサイトです。
                      <br />
                      昔はゲーム音楽を耳コピしたものをサイトのコンテンツとして置いてあることが多々ありました。これもそのうちの一つでしょう。
                    </div>
                    <MIDIAudio2 />
                    <MIDIAudio3 />

                    <div className="main-midi-ttl">
                      【There's Something about Supertank】
                    </div>
                    <div className="main-midi-txt">
                      ポトリスというオンラインゲームで使用されていた曲です。
                      <br />
                      小学生のときにとても大好きなオンラインゲームでした。
                      <br />
                      試合中のBGMの中で特にお気に入りの一曲です。
                    </div>
                    <MIDIAudio4 />
                  </div>
                  <div className="end-txt">
                    いかがでしたでしょうか？
                    <br />
                    これらは昔のインターネットの極一部の思い出の一つです。
                    <br />
                    この時代のサイトなどレンタルサーバーのサービス終了などでどんどん消えてしまっています。
                    <br />
                    悲しいけど時代の流れですね。
                    <br />
                    時代の流れに逆らい、この音楽プレーヤーをプレーヤーらしく開発していきますので完成をお待ちください。
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="footerbar"></div>
                <div className="footermain"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MIDIExplorer;
