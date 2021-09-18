import React, { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

function Memo() {
  const [number, setNumber] = useState(1);
  // const fib = fibonacci(number)
  const fib = useMemo(() => fibonacci(number), [number]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <h3>
        Fibonacci of {number} is {fib}
      </h3>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}

export default Memo;
