import React from "react";
import { chnl_ID, randomColor, randomName } from "../Utile";
import Messages from "./Messages";
import Person from "./Sender";
import Input from "./Input";

class Chat extends React.Component {
  state = {
    messages: [],
    members: [],
    member: {
      username: randomName(),
      color: randomColor(),
    },
  };
  componentWillMount() {
    this.drone = new window.Scaledrone(chnl_ID, {
      data: this.state.member,
    });

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");

    room.on("message", (message) => {
      const { data, id, timestamp, member } = message;
      const messages = this.state.messages;
      messages.push({ id, member, text: data, timestamp });
      this.setState({ messages });
    });
    // room.on("members", (members) => {
    //   const { data, id } = members;
    //   const memberList = this.state.members;
    //   memberList.push({ data, id });
    //   this.setState({ memberList });
    //   console.log(members);
    // });
  }

  render() {
    return (
      <div className="main__container">
        {/* <div className="main__container--sidebar">
          <h4>Ljudi u chatu</h4>
          <ul>
            <Person />
            <Person />
            <Person />
          </ul>
        </div> */}
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
// DOCUMENTATION https://www.scaledrone.com/docs/api-clients/observable-rooms
