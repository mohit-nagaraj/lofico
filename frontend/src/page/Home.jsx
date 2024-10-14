import { useState, useRef } from "react";
import "./home.scss";
import Player from "../components/Player/Player";
import Nav from "../components/Nav/Nav";
import { playlistData } from "../playlist";
import Timer from "./subpages/Timer";
import Notes from "./subpages/Notes";
import Chat from "./subpages/Chat";
import Calendar from "./subpages/Calendar";
import Scenery from "./subpages/Scenery";
import { sceneryInfo } from "../utils/sceneryInfo";
import { useSelector } from "react-redux";

const Home = () => {
    const [songs, setSongs] = useState(playlistData);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const currentScenery = useSelector((state) => state.user.currentScenery)


    //keep track of song information, used in slider(Player.js)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });

    //fnc to find current song being played, and play next song in playlist
    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        //make sure the index comes back to 0 when it reaches the end of the playlist
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        //if song was in play state, play the next song automatically
        audioRef.current.play();
    };

    //fnc to update the time of the song being played, from the slider
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        //calculate percentage of song played, control animation of slider of custom progress bar
        const animationPercentage = Math.round(
            (roundedCurrent / roundedDuration) * 100
        );
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,
            animationPercentage,
        });
    };
    return (
        <div className="home">
            <video autoPlay loop muted id="video-player" src={`/videos${sceneryInfo[currentScenery]}.mp4`} type="video/mp4" />
            <Nav />
            <Scenery />
            <Timer currentSong={currentSong} />
            <Notes />
            <Chat />
            <Calendar />
            <Player
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                songs={songs}
                setSongs={setSongs}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
            />
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
};

export default Home;