import { useState } from "react";

function OrderCount() {
  const [count, setCount] = useState(0);

  return (
    <button className="flex items-center justify-center h-6 w-14 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold  rounded border border-gray-400">
      <button className="text-lg outline-none focus:outline-none" onClick={() => {if(count > 0)setCount((c) => c - 1)}}>-</button>
      <span className="text-lg mx-4">{count}</span>
      <button className="outline-none focus:outline-none" onClick={() => setCount((c) => c + 1)}>+</button>
    </button>
  );
}

export default OrderCount;
