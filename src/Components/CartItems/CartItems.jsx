import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../../assets/remove.webp";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
        useContext(ShopContext);

    return (
        <div className="cartItems">
            {/* Header Row */}
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {/* ✅ Render all products in the cart */}
            {all_product.map((product) => {
                const quantity = cartItems[product.id] || 0;
                if (quantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartItems-format cartitems-format-main">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    height="100px"
                                />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className="cartitems-quantity">
                                    {quantity}
                                </button>
                                <p>${product.new_price * quantity}</p>
                                <img
                                    src={remove_icon}
                                    alt="remove"
                                    onClick={() => removeFromCart(product.id)}
                                    height="20px"
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            {/* ✅ Cart Summary Section */}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>

                {/* ✅ Promo Code Input */}
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
