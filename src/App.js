import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [activeKey, setActiveKey] = useState("");

  function playSound(key) {
    const sound = document.getElementById(key).querySelector("audio");
    sound.play();
    console.log(key);
    setActiveKey(key);
  }

  useEffect(() => {
    document.addEventListener("click", (event) => {
      let key = event.target.id;
      playSound(key);
    });
    document.addEventListener("keydown", (event) => {
      let key = event.key.toUpperCase();
      playSound(key);
    });
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>Drum machine</h1>
        <div id="display">Played: {activeKey}</div>
        <div className="drum-pads">
          {drumPads.map((pad) => (
            <div className="drum-pad" id={pad.text} key={pad.keyCode}>
              {pad.text}
              <audio className="clip" id={pad.text} src={pad.src}></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
