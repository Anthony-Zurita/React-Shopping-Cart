import React from "react";
import { useState } from "react";
import "./App.css";

const PRODUCTS_PAGE = "products";
const CART_PAGE = "cart";

/*
  CartItemType is a type that defines the shape of the object that will be stored in the cart array.
*/
export type CartItemType = {
  name: string;
  cost: string;
  image: string;
};

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

function App() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [page, setPage] = useState("products");
  const [products] = useState(inventory);

  /*
  This function takes a product object as an argument and adds it to the cart array.
  This function is called once a user clicks the "Add to Cart" button.
  Destruct operator is used to descruct the cart array and append the product to the end of the array.
  Product object is spread to create a new object in order to avoid mutating duplicates of the same.
  */
  const handleAddToCart = (product: CartItemType) => {
    setCart([...cart, { ...product}]);
  };

  /*
  This function takes a product object as an argument and deletes it from the cart array.
  This function is called once a user clicks the "Remove from Cart" button.
  The filter method is used to filter out the product that needs to be removed from the cart array.
  */
  const handleRemoveFromCart = (productToBeRemoved: CartItemType) => {
    setCart(cart.filter((product) => product !== productToBeRemoved));
  }

  const navigateTo = (nextPage: string) => {
    setPage(nextPage);
  }

  const renderProductsPage = () => (
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

  const renderCartPage = () => (
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
  )

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(CART_PAGE)}>Go to Cart ({cart.length})</button>
        <button onClick={() => navigateTo(PRODUCTS_PAGE)}>Browse Products</button>
      </header>
      {page === PRODUCTS_PAGE && renderProductsPage()}
      {page === CART_PAGE && renderCartPage()}
    </div>
  );
}

export default App;
