import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage />
      <p style={contentLadyStyle}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
