import React, { useState } from "react";

const AddCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Number</h1>
      <button onClick={handleClick}>버튼</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default AddCounter;
