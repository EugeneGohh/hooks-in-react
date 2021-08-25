import React, { useContext } from "react";

const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
};

const colorContext = React.createContext(colors);

function Context() {
  const useColors = useContext(colorContext);

  return (
    <button style={{ color: useColors.red }}>
      I am a button!
    </button>
  );
}

export default Context;
