import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const cart = useContext(CartContext);

  console.log("This is from inside the Cart!!!", cart);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        <Item key={item.id} {...item} id={item.id} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
