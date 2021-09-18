import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  // This is a reducer
  switch (
    action.type // Switch on the action object
  ) {
    case "increment": // 1st action
      return { count: state.count + 1 }; // <-- Always return object!
    case "decrement": // 2nd action
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //         ^      ^
  //         |      |
  //   Curr State Dispatch Action

  return (
    <>
      <h1>useReducer Example</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {/* Dispatch action here when clicked */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default Reducer;
