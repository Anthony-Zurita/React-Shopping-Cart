import React from "react";
import { useState } from "react";
import { CartItemType } from "../App";


/*
  inventory is an array of CartItemType objects this data would usually be taken from an API call.
*/
const inventory: CartItemType[] = [

  {
    name: "Green Camping Tent",
    cost: 55.99,
    image:
      "https://m.media-amazon.com/images/I/71DPerT9EKL._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },

  {
    name: "6 Person Blackout Tent",
    cost: 85.99,
    image:
      "https://m.media-amazon.com/images/I/91xkwxZbn4L._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },

  {
    name: "2 Person Tent",
    cost: 65.99,
    image:
      "https://i5.walmartimages.com/seo/2-Person-Camping-Tent-Includes-Rain-Fly-and-Carrying-Bag-by-Wakeman-Outdoors-Blue_aac73663-3cf5-4343-a471-ba55898e3ce7.40901a1c9eec308bf48ef9c6e2386e1d.jpeg",
    quantity: 1,
  },

  {
    name: "Camping Tunnel Tent",
    cost: 105.99,
    image:
      "https://m.media-amazon.com/images/I/61ZCVOUTB9L._AC_UF894,1000_QL80_.jpg",
    quantity: 1,
  },
  {
    name: "Sleeping Bag 3 Seasons",
    cost: 35.99,
    image:
      "https://m.media-amazon.com/images/I/51YPCwIyV-L._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },
  {
    name: "Tough Outdoor Lumberjack Sleeping Bag",
    cost: 25.99,
    image:
      "https://m.media-amazon.com/images/I/61GIr6Dtm5L._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },

  {
    name: "Kid's Shark Sleeping Bag",
    cost: 25.99,
    image:
      "https://firefly-outdoorgear.com/cdn/shop/products/shark-kids-sleeping-bag-main3_1000x.jpg?v=1681940490",
    quantity: 1,
  },
  {
    name: "Green Coffin Sleeping Bag",
    cost: 25.99,
    image:
      "https://seatosummit.com/cdn/shop/files/AscentDownSleepingBag-9C-15FRegular_ASL041101-052003_PRIMARY_WBG.jpg?v=1702675375",
    quantity: 1,
  },

  {
    name: "Rechargable Lantern & Flashlight Set",
    cost: 35.99,
    image: "https://m.media-amazon.com/images/I/71StlaTwNDL.jpg",
    quantity: 1,
  },

  {
    name: "Energizer LED Flashlight",
    cost: 15.99,
    image: "https://m.media-amazon.com/images/I/61kA28NHixL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 1,
  },

  {
    name: "Coleman 1000L LED Lantern",
    cost: 28.99,
    image: "https://m.media-amazon.com/images/I/61LmTDeoWeL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    quantity: 1,
  },

  {
    name: "Everbrite LED Rechargeable Lantern",
    cost: 20.99,
    image: "https://m.media-amazon.com/images/I/61f1GG1wY2L.jpg",
    quantity: 1,
  },

  {
    name: "Gutsdoor Camping Cookware Set",
    cost: 21.99,
    image: "https://m.media-amazon.com/images/I/61SSCikBEJL._AC_UF1000,1000_QL80_.jpg",
    quantity: 1,
  },

  {
    name: "Coleman Propane Stove",
    cost: 40.99,
    image: "https://i5.walmartimages.com/seo/Coleman-Brand-Matchlight-10-000-BTU-2-Burner-Propane-Stove-black_91d46721-8192-48a1-b990-db171cf23614.d9ffe85f76efd81d93d2517fc08a7682.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    quantity: 1,
  },

  {
    name: "Compact Camping Stove",
    cost: 18.99,
    image: "https://americanadventurelab.com/wp-content/uploads/2021/05/B4410E3C-79C2-4E26-908B-C944CEE50B66.jpeg",
    quantity: 1,
  },

  {
    name: "Aluminum Camping Cookware Set",
    cost: 22.99,
    image: "https://images.thdstatic.com/productImages/e25cab39-0dad-45b9-89b4-a3903948027e/svn/camping-utensils-hddb1072-64_600.jpg",
    quantity: 1,
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
            <h4>${product.cost}</h4>
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
