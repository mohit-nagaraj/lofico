import React, { useState,useRef } from "react";
import Draggable from "../../components/Draggable/Draggable";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.scss";

const Timer = ({ currentTheme, currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentColor, setCurrentColor] = useState(currentSong.color[0]);
  const [inputTime, setInputTime] = useState(30);
  const alarmSrc = "./alarm.mp3";
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [displayInput, setDisplayInput] = useState(true);
  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };
  const [key, setKey] = useState(0);
  const editContent = (e) => {
    const nums = e.target.textContent.split("");
    for (let i = 0; i < nums.length; i++) {
      if (isNaN(nums[i])) {
        nums[i] = "";
        e.target.textContent = nums.join("");
      }
    }
    if (e.target.textContent.length > 2) {
      e.target.textContent = nums[2] + nums[0];
    }
  };
  const simulateClick = (str) => {
    document.querySelector(str).contentEditable = true;
    document.querySelector(str).focus();
  };
  const buttonTimeClick = (time) =>{
    setInputTime(time);
                  setDisplayInput(!displayInput);
                  setIsPlaying(!isPlaying);
  }
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
              userSelect: "none",
            }}
            onClick={(e) => {
              document.querySelector(".timer").style.display = "none";
            }}
          >
            <img
              style={{ userSelect: "none" }}
              src="./close.png"
              alt=""
              height={15}
              width={15}
            />
          </div>
          {/* Timer window to be implemented */}
          {!displayInput ? "" : "Timer"}
          <div
            className={"input-component " + (displayInput ? "disp" : "Ndisp")}
          >
            <div className="preset-buttons">
              <button
                className={currentTheme}
                onClick={(e) => buttonTimeClick(300)}
              >
                5<br></br>mins
              </button>
              <button
                className={currentTheme}
                onClick={(e) => buttonTimeClick(600)}
              >
                10<br></br>mins
              </button>
              <button
                className={currentTheme}
                onClick={(e) => buttonTimeClick(900)}
              >
                15<br></br>mins
              </button>
              <button
                className={currentTheme}
                onClick={(e) => buttonTimeClick(1800)}
              >
                30<br></br>mins
              </button>
              <button
                className={currentTheme}
                onClick={(e) => buttonTimeClick(3600)}
              >
                1<br></br>hour
              </button>
              <button
                className={currentTheme}
                onClick={(e) => buttonTimeClick(10800)}
              >
                3<br></br>hours
              </button>
            </div>
            <div className="custom-input">
              <p>Set custom time:</p>
              <div className="time-container">
                <div
                  className={"hour " + currentTheme}
                  onInput={(e) => editContent(e)}
                  onClick={() => simulateClick(".hour")}
                >
                  00
                </div>
                <span>:</span>
                <div
                  className={"minute " + currentTheme}
                  onInput={(e) => editContent(e)}
                  onClick={() => simulateClick(".minute")}
                >
                  00
                </div>
                <span>:</span>
                <div
                  className={"second " + currentTheme}
                  onInput={(e) => editContent(e)}
                  onClick={() => simulateClick(".second")}
                >
                  00
                </div>
              </div>
              <button
                onClick={() => {
                  const hour = document.querySelector(".hour").textContent;
                  const minute = document.querySelector(".minute").textContent;
                  const second = document.querySelector(".second").textContent;
                  setInputTime(hour * 3600 + minute * 60 + second * 1);
                  setDisplayInput(!displayInput);
                  setIsPlaying(!isPlaying);
                }}
              >
                START
              </button>
            </div>
          </div>
          <div
            className={"time-component " + (!displayInput ? "disp" : "Ndisp")}
          >
            <audio src={alarmSrc} id="alarm" ref={audioRef}></audio>
            <button className={"bell-handler "+ currentTheme} onClick={()=>setIsMuted(!isMuted)}>{isMuted?<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style={{stroke: currentTheme === "dark" ? "#fafafa" : "#000000"}} d="M3 3L21 21M9.37747 3.56325C10.1871 3.19604 11.0827 3 12 3C13.5913 3 15.1174 3.59 16.2426 4.6402C17.3679 5.69041 18 7.11479 18 8.6C18 10.3566 18.2892 11.7759 18.712 12.9122M17 17H15M6.45339 6.46451C6.15686 7.13542 6 7.86016 6 8.6C6 11.2862 5.3238 13.1835 4.52745 14.4866C3.75616 15.7486 3.37051 16.3797 3.38485 16.5436C3.40095 16.7277 3.43729 16.7925 3.58603 16.9023C3.71841 17 4.34762 17 5.60605 17H9M9 17V18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18V17M9 17H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>:<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style={{stroke: currentTheme === "dark" ? "#fafafa" : "#000000"}} d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}</button>
            <button
              className={"back-handler " + currentTheme}
              onClick={(e) => {
                setDisplayInput(!displayInput);
                setIsPlaying(!isPlaying);
                setKey((prevKey) => prevKey + 1);
              }}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <g
                    data-name="E421, Back, buttons, multimedia, play, stop"
                    id="E421_Back_buttons_multimedia_play_stop"
                  >
                    <circle
                      className="cls-1"
                      cx="256"
                      cy="256"
                      r="246"
                      style={{
                        fill: "none",
                        stroke: currentTheme === "dark" ? "#fafafa" : "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "35px",
                      }}
                      
                    />

                    <line
                      className="cls-1"
                      x1="352.26"
                      x2="170.43"
                      y1="256"
                      y2="256"
                      style={{
                        fill: "none",
                        stroke: currentTheme === "dark" ? "#fafafa" : "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "35px",
                      }}
                    />

                    <polyline
                      className="cls-1"
                      style={{
                        fill: "none",
                        stroke: currentTheme === "dark" ? "#fafafa" : "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "35px",
                      }}
                      points="223.91 202.52 170.44 256 223.91 309.48"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              key={key}
              onComplete={() => {
                if(!isMuted){
                  audioRef.current.play();
                }
              }}
              duration={inputTime}
              rotation="counterclockwise"
              colors={currentSong.color}
              colorsTime={[inputTime, 0]}
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
                return (
                  <div className="timer-text">
                    {hours !== 0 ? strhours + ":" : ""}
                    {minutes !== 0 ||
                    (remainingTime >= 60 && remainingTime % 60 === 0)
                      ? strminutes + ":"
                      : ""}
                    {strseconds}
                  </div>
                );
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
                    <path
                      style={{
                        fill:
                          currentTheme !== "dark" ? "#fafafadd" : "#000000dd  ",
                      }}
                      d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 384 512"
                  >
                    <path
                      style={{
                        fill:
                          currentTheme !== "dark" ? "#fafafadd" : "#000000dd",
                      }}
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setKey((prevKey) => prevKey + 1)}
                style={{ backgroundColor: currentColor }}
              >
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6H7M7 6L10 3M7 6L10 9"
                    style={{
                      stroke:
                        currentTheme !== "dark" ? "#fafafadd" : "#000000dd",
                    }}
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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
