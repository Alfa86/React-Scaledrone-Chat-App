import React from "react";
import "./assets/style/style.scss";
import Chat from "./Components/Chat";

// const randomColor = "stroke='%23EC3463'";
// const imgStyle = {
//   backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' {randomColor} stroke-width='5' stroke-dasharray='100%25%2c 70%25' stroke-dashoffset='64' stroke-linecap='butt'/%3e%3c/svg%3e")`,
// };
function App() {
  return (
    <div className="main">
      <Chat />
    </div>
  );
}

export default App;
