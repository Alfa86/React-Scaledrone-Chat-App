import React from "react";

export default function ImgOutline({ stroke }) {
  const style = {
    stroke: "red",
    strokeWidth: 3,
    strokeLinecap: "butt",
    strokeDasharray: 80,
  };

  return (
    <div>
      {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle style={style} cx="60" cy="60" r="50" />
      </svg> */}
      <li className="person">
        <div className="person__in--chat">
          <img
            className="person__image"
            // style={imgStyle}
            src="https://placeimg.com/40/40/people"
          ></img>
          <p className="person__info">Ime Prezime</p>
        </div>
      </li>
    </div>
  );
}
