import React from "react";
import { useState } from "react";
import "./App.css";
import ProductItemCard from "./components/ProductItemCard";

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

function App() {

  const [cart, setCart] = useState<CartItemType[]>([]);
  const [page, setPage] = useState("products");

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

  /*
  This function takes a string as an argument and sets the page state to the value of the argument.
  This function is called once a user clicks the "Go to Cart" or "Browse Products" button.
  When the page state is set to "cart" the cart page is shown, when the page state is set to "products" the products page is shown.
  */
  const navigateTo = (nextPage: string) => {
    setPage(nextPage);
  }

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


  /*
    Added logic to switch which page is shown based on the value of the page state.
  */
  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(CART_PAGE)}>Go to Cart ({cart.length})</button>
        <button onClick={() => navigateTo(PRODUCTS_PAGE)}>Browse Products</button>
      </header>
      {page === PRODUCTS_PAGE && (<ProductItemCard handleAddToCart={handleAddToCart} />)}
      {page === CART_PAGE && renderCartPage()}
    </div>
  );
}

export default App;
