import React, { useState } from "react";
import "../css/style.css";
import "../css/explorerstyle.css";

import background from "../img/hosizora.gif";

import MIDIAudio from "./audio.jsx";
import MIDIAudio2 from "./audio2.jsx";
import MIDIAudio3 from "./audio3.jsx";
import MIDIAudio4 from "./audio4.jsx";
import Window from "../layout/Window.jsx";
import Menubar from "../layout/Menubar.jsx";

const MIDIExplorer = () => {
  return (
    <>
      <Window
        title="MIDI Explorer"
        menubar={<Menubar link="http//www.cannon0074.com/main.html" />}
      >
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
            <div className="main-midi-ttl">【Seat of the Stardust】</div>
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
      </Window>
      <div className="footer">
        <div className="footerbar"></div>
        <div className="footermain"></div>
      </div>
    </>
  );
};

export default MIDIExplorer;
