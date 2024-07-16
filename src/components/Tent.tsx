import React from "react";
import { useState } from "react";
import { CartItemType } from "../App";


//TODO: ADD AN EXTRA PROP TO THE CartItemType interface called category to be able to filter the products by category
// for the tent category, sleeping bag category, flashlight category, and camping cookware category


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


  {
    name: "Camping Tent XL",
    cost: "$75.99",
    image:
      "https://m.media-amazon.com/images/I/71DPerT9EKL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Camping Tent 4 Person",
    cost: "$80.99",
    image:
      "https://m.media-amazon.com/images/I/71DPerT9EKL._AC_UF1000,1000_QL80_.jpg",
  },
];

/*
    The ProductItemCard component takes one prop:
    1. handleAddToCart: A function that takes a CartItemType object as an argument and returns void.
    The ProductItemCard component returns a div element that contains a list of CartItemType objects that are iterated through using a map 
    function.
    The ProductItemCard component returns a div element that contains a list of CartItemType objects that are iterated through using a map
    function.
*/

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