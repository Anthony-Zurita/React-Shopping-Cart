import React from "react";
import { useState } from "react";
import { CartItemType } from "../App";


export default function CartItemCard( {handleRemoveFromCart, cart}: {handleRemoveFromCart: (item: CartItemType) => void; cart: CartItemType[];}
) {
  return (
    <>
      <h1>My Cart</h1>
      <div className="products">
        {cart.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleRemoveFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
