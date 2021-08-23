import { useState } from "react";

function State() {
  const [isRed, setIsRed] = useState(true);

  const alterColor = () => {
    setIsRed(!isRed);
  };

  return (
    <>
      <p style={{ color: isRed ? "red" : "blue" }}>I am changing color</p>

      <button onClick={alterColor}>Click me to change color</button>
    </>
  );
}

export default State;
