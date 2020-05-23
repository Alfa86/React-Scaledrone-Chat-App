import React from "react";
import {
  chnl_ID,
  randomColor,
  randomName,
  currentTime,
  currentDate,
} from "../Utile";
import Messages from "./Messages";
import Person from "./Sender";
import Input from "./Input";

class Chat extends React.Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
      time: currentTime(),
      date: currentDate(),
    },
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone(chnl_ID, {
      data: this.state.member,
    });
    // console.log(this.state.member);

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");

    console.log(room);
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  render() {
    return (
      <div className="main__container">
        <div className="main__container--sidebar">
          <h4>Ljudi u chatu</h4>
          <ul>
            {console.log(this.drone.args)}
            {/* {this.room._cache.map((person) => {
              return <Person />;
            })} */}
          </ul>
        </div>
        <div className="main__container--content">
          <Messages
            messages={this.state.messages}
            currentMember={this.state.member}
          />
          <Input onSendMessage={this.onSendMessage} />
        </div>
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };
}

export default Chat;

// DOCUMENTATION https://www.scaledrone.com/docs/api-clients/javascript
