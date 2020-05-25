import React from "react";

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="messages">
        <ul>{messages.map((m) => this.renderMessage(m))}</ul>
      </div>
    );
  }
  renderMessage(message) {
    const { member, text, id, time } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ? "my__message" : "person__message";
    return (
      <li
        style={{ borderColor: member.clientData.color }}
        className={className}
        key={id}
      >
        <div className="person__in--chat">
          <p className="person__info">{text}</p>
        </div>
        <p className="info__marks">
          <span
            className="date-time"
            style={{ color: member.clientData.color }}
          >
            {member.clientData.username}
          </span>
          |<span className="date-time"> {time}</span>
        </p>
      </li>
    );
  }
}

export default Messages;
