import { useState } from "react";
import { useContext } from "react";
import {ShopContext} from "../context/ShopContext"

function OrderCount({id}) {
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)

  return (
    <div className="flex items-center justify-center h-6 w-14 px-8 bg-white hover:bg-gray-300 text-gray-800 font-bold  rounded border border-gray-400">
      <button className="text-lg outline-none focus:outline-none" onClick={() => removeFromCart(id)}>-</button>
      <input className="w-8" value={cartItems[id]}/>
      <button className="outline-none focus:outline-none" onClick={() => addToCart(id)}>+</button>
    </div>
  );
}

export default OrderCount;
