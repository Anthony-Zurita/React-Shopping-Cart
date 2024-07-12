import React from "react";
import { useState } from "react";
import { CartItemType } from "../App";


/*
  inventory is an array of CartItemType objects this data would usually be taken from an API call.
*/
const inventory: CartItemType[] = [
  {
    name: "Rechargable Lantern",
    cost: "$25.99",
    image: "https://m.media-amazon.com/images/I/71StlaTwNDL.jpg",
  },

  {
    name: "Camping Tent",
    cost: "$65.99",
    image:
      "https://m.media-amazon.com/images/I/71DPerT9EKL._AC_UF1000,1000_QL80_.jpg",
  },
];


export default function ProductItemCard({handleAddToCart}: {handleAddToCart: (item: CartItemType) => void;}) {
  
    const [products] = useState(inventory);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
