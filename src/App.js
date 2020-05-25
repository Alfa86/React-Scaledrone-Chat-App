import React from "react";
import "./assets/style/style.scss";
import Chat from "./Components/Chat";
import { ReactComponent as Github } from "./assets/images/github.svg";

function App() {
  return (
    <div className="main">
      <h1>Chat App</h1>
      <Chat />
      <div className="info">
        <a
          href="https://github.com/Alfa86/React-Scaledrone-Chat-App"
          target="_blank"
        >
          <Github className="github" />
        </a>
      </div>
      <div className="info__about">
        <p className="info__about--paragraph">
          <a href="https://igor-apfentaler.from.hr/" target="_blank">
            Igor Apfentaler
          </a>
          | 2020 | Algebra - Seminarski rad
        </p>
      </div>
    </div>
  );
}

export default App;
