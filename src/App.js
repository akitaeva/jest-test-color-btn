import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [disabled, setDisabled] = useState(false);
  const [btnColor, setBtnColor] = useState("red");
  const [btnText, setBtnText] = useState("Change to blue");
  const newBtnColor = btnColor === "red" ? "blue" : "red";
  const newBtnText =
    btnText === "Change to blue" ? "Change to red" : "Change to blue";

  const changeTextAndColor = () => {
    setBtnColor(newBtnColor);
    setBtnText(newBtnText);
  };

  return (
    <div className="App">
      <input
        type="checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        aria-checked={disabled}
      />
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => changeTextAndColor()}
        disabled={disabled}
      >
        {btnText}
      </button>
    </div>
  );
};

export default App;
