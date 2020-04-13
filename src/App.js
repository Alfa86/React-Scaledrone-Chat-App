import React from "react";
import "./assets/style/style.scss";
import logo from "./logo.svg";
import "./App.css";
import { ReactComponent as Send } from "./assets/images/send.svg";

function App() {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__container--sidebar">
          <ul>
            <li className="person">
              <div className="person__in--chat">
                <img
                  className="person__image"
                  src="https://placeimg.com/40/40/people"
                ></img>
                <p className="person__info">Ime Prezime</p>
              </div>
            </li>
            <li className="person">
              <div className="person__in--chat">
                <img
                  className="person__image"
                  src="https://placeimg.com/40/40/people"
                ></img>
                <p className="person__info">Ime Prezime</p>
              </div>
            </li>
            <li className="person">
              <div className="person__in--chat">
                <img
                  className="person__image"
                  src="https://placeimg.com/40/40/people"
                ></img>
                <p className="person__info">Ime Prezime</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="main__container--content">
          <div className="messages">lyfb ydh ydh ydh yddfhyadhydhsrtg</div>
          <div className="input__field--container">
            <input className="input__field--field" type="text"></input>
            <button className="input__field--button">
              <Send className="input__field--send-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
