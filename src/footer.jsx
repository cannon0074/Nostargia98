import React, { useEffect, useState } from "react";

const weekday = ["日", "月", "火", "水", "木", "金", "土"];

const Footer = () => {
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let dayofweek = d.getDay();
      setDate(year + "/" + month + "/" + day + "(" + weekday[dayofweek] + ")");
      let hour = d.getHours().toString().padStart(2, "0");
      let minute = d.getMinutes().toString().padStart(2, "0");

      setTime(hour + ":" + minute);
    }, 1000);
  }, []);

  return (
    <>
      <div className="taskbar">
        <div className="taskbar-line">
          <div className="taskbar-main">
            <button className="startButton">ｽﾀｰﾄ</button>
            <div className="imitation"></div>
            <div className="imitation2"></div>
          </div>
          <div className="taskbar-sub">
            <div className="imitation"></div>
            <div className="clock">
              <div className="time">{time}</div>
              <div className="date">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
