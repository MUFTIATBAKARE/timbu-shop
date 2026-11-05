import { createContext, useState } from "react";
import { Items } from "../Items";
import { Products } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= Items.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getInitialCart = () => {
  let cartB = {};
  for (let i = 1; i <= Products.length; i++) {
    cartB[i] = 0;
  }
  return cartB;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartProducts, setCartProducts] = useState(getInitialCart());
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [shippingData, setShippingData] = useState(null);

  const getSubtotalAmount = () => {
    let subtotalA = 0;
    selectedItems.forEach((itemId) => {
      const quantity = cartItems[itemId];
      const itemInfo = Items.find((item) => item.id === itemId);
      if (itemInfo && quantity > 0) {
        subtotalA += quantity * itemInfo.price;
      }
    });

    let subtotalB = 0;
    selectedProducts.forEach((itemId) => {
      const quantity = cartProducts[itemId];
      const itemInfo = Products.find((item) => item.id === itemId);
      if (itemInfo && quantity > 0) {
        subtotalB += quantity * itemInfo.price;
      }
    });

    return Number((subtotalA + subtotalB).toFixed(2));
  };

  const getTotalCartCount = () => {
    const countA = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
    const countB = Object.values(cartProducts).reduce((acc, qty) => acc + qty, 0);
    return countA + countB;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev : [...prev, itemId]
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newQuantity = Math.max(0, prev[itemId] - 1);
      if (newQuantity <= 0) {
        setSelectedItems((sel) => sel.filter((id) => id !== itemId));
      }
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    setSelectedItems((sel) => sel.filter((id) => id !== itemId));
  };

  const addProduct = (itemId) => {
    setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setSelectedProducts((prev) =>
      prev.includes(itemId) ? prev : [...prev, itemId]
    );
  };

  const removeProduct = (itemId) => {
    setCartProducts((prev) => {
      const newQuantity = Math.max(0, prev[itemId] - 1);
      if (newQuantity <= 0) {
        setSelectedProducts((sel) => sel.filter((id) => id !== itemId));
      }
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const deleteProduct = (itemId) => {
    setCartProducts((prev) => ({ ...prev, [itemId]: 0 }));
    setSelectedProducts((sel) => sel.filter((id) => id !== itemId));
  };

  const toggleItemSelection = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const toggleProductSelection = (itemId) => {
    setSelectedProducts((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    setCartProducts(getInitialCart());
    setSelectedItems([]);
    setSelectedProducts([]);
    setShippingData(null);
  };

  const contextValue = {
    cartItems,
    cartProducts,
    selectedItems,
    selectedProducts,
    shippingData,
    setShippingData,
    addToCart,
    removeFromCart,
    deleteFromCart,
    addProduct,
    removeProduct,
    deleteProduct,
    toggleItemSelection,
    toggleProductSelection,
    getSubtotalAmount,
    getTotalCartCount,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
