import React, { useState } from "react";
import "./App.css";

export const splitCamelWithSpace = ( colorName ) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

const App = () => {
  const [disabled, setDisabled] = useState(false);
  const [btnColor, setBtnColor] = useState("MediumVioletRed");
  const newBtnColor = btnColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const changeTextAndColor = () => {
    setBtnColor(newBtnColor);
  };

  return (
    <div className="App">
      <label htmlFor="disable-btn-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-btn-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        aria-checked={disabled}
      />
      <button
        style={{ backgroundColor: disabled ? 'gray' : btnColor }}
        onClick={() => changeTextAndColor()}
        disabled={disabled}
      >
        Change to {splitCamelWithSpace(newBtnColor)}
      </button>
    </div>
  );
};

export default App;
