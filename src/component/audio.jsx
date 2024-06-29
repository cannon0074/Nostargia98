import React, { useState, useEffect, useRef } from "react";
import Audio from "../music/seatofgm.mp3";
import "../css/Audio.css";

export default function Home() {
  const [playState, setPlayState] = useState("stop");
  const [duration, setDuration] = useState(0);
  const [timePosition, setTimePosition] = useState(0);
  const [source, setSource] = useState(null);
  const [analyserNode, setAnalyserNode] = useState(null);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);

  const spectrumRef = useRef(null);

  useEffect(() => {
    audioCtxRef.current = new AudioContext();
    const elementSource = audioCtxRef.current.createMediaElementSource(
      audioRef.current
    );
    const analyser = audioCtxRef.current.createAnalyser();
    elementSource.connect(analyser).connect(audioCtxRef.current.destination);
    setSource(elementSource);
    setAnalyserNode(analyser);
  }, []);

  useEffect(() => {
    if (source && analyserNode && playState === "play") {
      const canvas = spectrumRef.current;
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
      const canvasCtx = canvas.getContext("2d");
      analyserNode.fftSize = 16384;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const bufferLength = analyserNode.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const barWidth = 1;

      let barHeight;
      let x = 0;

      function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyserNode.getByteFrequencyData(dataArray);
        canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        let bars = 128;

        for (let i = 0; i < bars; i++) {
          barHeight = dataArray[i];

          canvasCtx.fillStyle = `rgba(255,255,255,0.8)`;
          canvasCtx.fillRect(x, canvasHeight - barHeight, barWidth, barHeight);
          x += barWidth + canvasWidth / 128;
        }
      }
      renderFrame();
    }
  }, [playState, source, analyserNode]);

  const handleTogglePlay = () => {
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
      setPlayState("play");
    }

    if (playState === "stop") {
      audioRef.current.play();
      setPlayState("play");
    } else if (playState === "play") {
      audioRef.current.pause();
      setPlayState("stop");
    }
  };

  const handleTimeUpdate = () => {
    setTimePosition(audioRef.current.currentTime);
  };

  const handleEnded = () => {
    setTimePosition(0);
    setPlayState("stop");
  };

  const handleLoadedMetadata = () => {
    const duration = audioRef.current.duration;
    setDuration(duration);
  };

  const handleChangeTimePosition = (e) => {
    const position = parseInt(e.target.value);
    setTimePosition(position);
    audioRef.current.currentTime = position;
  };

  return (
    <>
      <div className="audiowrap">
        <button className="playbutton" type="button" onClick={handleTogglePlay}>
          {playState === "stop" && "開始"}
          {playState === "play" && "停止"}
        </button>
        <input
          className="playbar"
          type="range"
          min={0}
          max={duration}
          value={timePosition}
          onInput={handleChangeTimePosition}
        />
        <audio
          src={Audio}
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
        />
        <canvas className="spectrums" ref={spectrumRef} />
      </div>
    </>
  );
}
