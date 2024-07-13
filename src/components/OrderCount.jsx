import { useState } from "react";
import { useContext } from "react";
import {ShopContext} from "../context/ShopContext"

function OrderCount({id, itemType}) {
  const {cartItems, cartProducts, addProduct, removeProduct, addToCart, removeFromCart} = useContext(ShopContext)
  const quantity = itemType === "item" ? cartItems[id] : cartProducts[id];
  const add = itemType === "item" ? addToCart : addProduct;
  const remove = itemType === "item" ? removeFromCart : removeProduct;
  return (
    <div className="flex items-center justify-center h-6 w-14 px-8 bg-white hover:bg-gray-300 text-gray-800 font-bold  rounded border border-gray-400">
      <button className="text-lg outline-none focus:outline-none" onClick={() => remove(id)}>-</button>
      <input className="w-8 styleBorder" value={quantity}/>
      <button className="outline-none focus:outline-none" onClick={() => add(id)}>+</button>
    </div>
  );
}

export default OrderCount;
