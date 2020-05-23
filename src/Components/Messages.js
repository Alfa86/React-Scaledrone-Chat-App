// import {Component} from "react";
import React, { useEffect } from "react";

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="messages">
        <ul>{messages.map((m) => this.renderMessage(m))}</ul>
      </div>
    );
  }
  //   timeDate() {
  //     const currentTime =
  //       new Date().getHours() +
  //       ":" +
  //       new Date().getMinutes() +
  //       ":" +
  //       new Date().getSeconds();
  //     const currentDate =
  //       new Date().getDate() +
  //       "." +
  //       (new Date().getMonth() + 1) +
  //       "." +
  //       new Date().getFullYear();
  //   }

  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ? "my__message" : "person__message";
    // const currentTime =
    //   new Date().getHours() +
    //   ":" +
    //   new Date().getMinutes() +
    //   ":" +
    //   new Date().getSeconds();
    const currentDate =
      new Date().getDate() +
      "." +
      (new Date().getMonth() + 1) +
      "." +
      new Date().getFullYear();
    return (
      <li className={className} key="{index}">
        <div className="person__in--chat">
          <p className="person__info">{text}</p>
          <img
            className="person__image"
            src="https://placeimg.com/40/40/people"
          ></img>
        </div>
        <p className="info__marks">
          {member.clientData.username} | {console.log(member.clientData)}
          <span className="date-time">{currentDate}</span>
          {/* |
          <span className="date-time">{currentTime}</span> */}
        </p>
      </li>
    );
  }
}

export default Messages;
