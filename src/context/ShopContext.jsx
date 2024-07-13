import { createContext, useState } from "react";
import { Items } from "../Items";
import { Products } from "../Products"


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Items.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}
const getInitialCart = () => {
    let cartB = {}
    for (let i = 1; i < Products.length + 1; i++) {
        cartB[i] = 0
    }
    return cartB;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [cartProducts, setCartProducts] = useState(getInitialCart());
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);


    const getSubtotalAmount = () => {
        let subtotalAmountA = 0;
        selectedItems.forEach(itemId => {
            const quantity = cartItems[itemId];
            const itemInfo = Items.find(item => item.id === itemId);
            if (itemInfo && quantity > 0) {
                subtotalAmountA += quantity * itemInfo.price;
            }
        });
        let subtotalAmountB = 0;
        selectedProducts.forEach(itemId => {
            const quantity = cartProducts[itemId];
            const itemInfo = Products.find(item => item.id === itemId);
            if (itemInfo && quantity > 0) {
                subtotalAmountB += quantity * itemInfo.price;
            }
        });
        return subtotalAmountA + subtotalAmountB
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const newQuantity = prev[itemId] - 1;
            const updateCart = { ...prev, [itemId]: newQuantity < 0 ? 0 : newQuantity };
            if (newQuantity <= 0) {
                setSelectedItems(prevSelectedItems => prevSelectedItems.filter(id => id !== itemId));
            }
            return updateCart
        });
    }
    const addProduct = (itemId) => {
        setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeProduct = (itemId) => {
        setCartProducts(prev => {
            const newQuantity = prev[itemId] - 1;
            const updateCart = { ...prev, [itemId]: newQuantity < 0 ? 0 : newQuantity };
            if (newQuantity <= 0) {
                setSelectedProducts(prevSelectedProducts => prevSelectedProducts.filter(id => id !== itemId));
            }
            return updateCart
        });
    }
    const toggleItemSelection = (itemId) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(itemId)
                ? prevSelectedItems.filter((id) => id !== itemId)
                : [...prevSelectedItems, itemId]
        );
    };
    const toggleProductSelection = (itemId) => {
        console.log("Toggling selection for product:", itemId);
        setSelectedProducts((prevSelectedProducts) =>
            prevSelectedProducts.includes(itemId)
                ? prevSelectedProducts.filter((id) => id !== itemId)
                : [...prevSelectedProducts, itemId]
        );
    };
    const contextValue = { cartItems, cartProducts, selectedItems, selectedProducts, addToCart, removeFromCart, addProduct, removeProduct, toggleItemSelection, toggleProductSelection, getSubtotalAmount }

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}