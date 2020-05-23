import React from "react";

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="messages">
        {console.log(messages)}
        <ul>{messages.map((m) => this.renderMessage(m))}</ul>
      </div>
    );
  }
  componentDidUpdate(message) {
    const newId = new Date().getTime();
  }

  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ? "my__message" : "person__message";
    return (
      <li
        style={{ borderColor: member.clientData.color }}
        className={className}
        // key={this.newId}
      >
        <div className="person__in--chat">
          <p className="person__info">{text}</p>
          {/* <img
            className="person__image"
            src="https://placeimg.com/40/40/people"
          ></img> */}
        </div>
        <p className="info__marks">
          <span
            className="date-time"
            style={{ color: member.clientData.color }}
          >
            {member.clientData.username}
          </span>
          {/* {console.log(member)}| */}
          <span className="date-time">{member.clientData.date}</span>|
          <span className="date-time">{member.clientData.time}</span>
        </p>
      </li>
    );
  }
}

export default Messages;
