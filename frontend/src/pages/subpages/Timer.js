import React, { useState } from "react";
import Draggable from "../../components/Draggable/Draggable";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.scss";

const Timer = ({ currentTheme, currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentColor, setCurrentColor] = useState(currentSong.color[0]);
  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };
  const [key, setKey] = useState(0);

  return (
    <div className="timer" style={{ display: "none" }}>
      <Draggable initialPos={{ x: 100, y: 100 }} className="window">
        <div className={"window-size " + currentTheme}>
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              opacity: 0.8,
              cursor: "pointer",
            }}
            onClick={(e) => {
              document.querySelector(".timer").style.display = "none";
            }}
          >
            <img src="./close.png" alt="" height={15} width={15} />
          </div>
          {/* Timer window to be implemented */}
          <div className="time-component">
            <CountdownCircleTimer
              isPlaying={isPlaying}
              key={key}
              duration={70}
              rotation="counterclockwise"
              colors={currentSong.color}
              colorsTime={[70, 0]}
              trailColor={currentTheme !== "dark" ? "#515151" : "#fafafabc"}
            >
              {({ remainingTime, color }) => {
                setCurrentColor(color);
                const hours = Math.floor(remainingTime / 3600);
                let strhours = "";
                if (hours <= 9) {
                  strhours = "0" + hours;
                } else {
                  strhours = hours;
                }
                const minutes = Math.floor((remainingTime % 3600) / 60);
                let strminutes = "";
                if (minutes <= 9) {
                  strminutes = "0" + minutes;
                } else {
                  strminutes = minutes;
                }
                const seconds = remainingTime % 60;
                let strseconds = "";
                if (seconds <= 9) {
                  strseconds = "0" + seconds;
                } else {
                  strseconds = seconds;
                }
                return `${hours !== 0 ? strhours + ":" : ""}${
                  minutes !== 0 ? strminutes + ":" : ""
                }${strseconds}`;
              }}
            </CountdownCircleTimer>
            <div className="timer-buttons">
              <button
                onClick={togglePlaying}
                className="play-pause"
                style={{ backgroundColor: currentColor }}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 320 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                )}
              </button>
              <button onClick={() => setKey((prevKey) => prevKey + 1)} style={{ backgroundColor: currentColor }}>
              <svg height="24"
                    width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6H7M7 6L10 3M7 6L10 9" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Timer;
