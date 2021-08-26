import React, { useContext, createContext } from "react";

const colorHex = {
  blue: "#03619c",
  yellow: "#8c8f03",
};

const ColorContext = createContext(colorHex);

function Context() {
  return (
    <ColorContext.Provider value={colorHex.blue}>
      <ButtonHex />
    </ColorContext.Provider>
  );
}

function ButtonHex() {
  const btnHex = useContext(ColorContext);

  return <button>{btnHex}</button>;
}

export default Context;
