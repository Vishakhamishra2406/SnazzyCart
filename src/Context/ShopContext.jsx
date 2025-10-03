import React, { createContext, useState, useCallback } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = useCallback((itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }, []);

    const removeFromCart = useCallback((itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    }, []);

    const getTotalCartAmount = useCallback(() => {
        return Object.entries(cartItems).reduce((total, [itemId, qty]) => {
            if (qty > 0) {
                const product = all_product.find(p => p.id === Number(itemId));
                return product ? total + product.new_price * qty : total;
            }
            return total;
        }, 0);
    }, [cartItems]);

    const getTotalCartItems = useCallback(() => {
        return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
    }, [cartItems]);

    return (
        <ShopContext.Provider value={{
            all_product,
            cartItems,
            addToCart,
            removeFromCart,
            getTotalCartItems,
            getTotalCartAmount
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
