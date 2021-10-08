import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ btnColor, setBtnColor ] = useState('red');
  const [ btnText, setBtnText ] = useState('Change to blue');
  const newBtnColor = btnColor === 'red' ? 'blue' : 'red';
  const newBtnText = btnText === 'Change to blue' ? 'Change to red' : 'Change to blue'

  const changeTextAndColor = () => {
    setBtnColor(newBtnColor);
    setBtnText(newBtnText);
  };


  return (
    <div className="App">
      <button style={{backgroundColor: btnColor }} onClick={()=>changeTextAndColor()}>
        {btnText}
      </button>
    </div>
  );
}

export default App;
