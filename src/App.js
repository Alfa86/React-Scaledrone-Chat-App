import React from "react";
import "./assets/style/style.scss";
import logo from "./logo.svg";
import "./App.css";

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
          <div>porukr</div>
          <input type="text"></input>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
