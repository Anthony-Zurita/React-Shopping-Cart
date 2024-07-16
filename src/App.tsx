import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import ProductItemCard from "./components/ProductItemCard";
import CartItemCard from "./components/CartItemCard";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
  PRODUCTS_PAGE is a constant that stores the string "products".
  CART_PAGE is a constant that stores the string "cart".
  These constants are used to help manage the page state but also used to avoid hardcording string that could have typos
  when mispelled and cause bugs in the application.

*/
const PRODUCTS_PAGE = "products";
const CART_PAGE = "cart";

/*
  cartFromLocalStorage is a variable that retrieves the cart array from local storage.
  Since their is a possibility that a user has not added anything to the cart yet, we need to provide a default value of an empty array.
*/
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

/*
  CartItemType is a type that defines the shape of the object that will be stored in the cart array.
*/
export type CartItemType = {
  name: string;
  cost: string;
  image: string;
};

function App() {

  /*
    cart is a state variable that stores the cart array.
    setCart is a function that is used to update the cart array.
    useState is a react hook that is used to create a state variable.
    The useState hook takes one argument which is the initial value of the state variable.
    The initial value of the cart state variable is the cartFromLocalStorage variable.
  */
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [page, setPage] = useState(PRODUCTS_PAGE);

  /*
    Use effect is a react hook that is called after the first render (when the app boots up for the first time) and after every update.
    In this case the useEffect hook is used to log the cart array to the console every time the cart array is updated. That is why cart is
    inside the dependency array. This is done to demonstrate the use of the useEffect hook.
    To set local storage we have to call the setItem method on the localStorage object. 
    The first argument is the key ("cart") and the second argument is the value (cart array).
    Use effect is being used to help store the cart array in local storage, which is half the work but we also need to retrieve the cart
    array from local storage.
  */
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
    setCart(cart.filter((product: CartItemType) => product !== productToBeRemoved));
  }

  /*
    The function clear cart removes all items within the cart by clearing the cart array and setting it to be an empty array.
  */
  const clearCart = () => {
    setCart([]);
  }

  /*
  This function takes a string as an argument and sets the page state to the value of the argument.
  This function is called once a user clicks the "Go to Cart" or "Browse Products" button.
  When the page state is set to "cart" the cart page is shown, when the page state is set to "products" the products page is shown.
  */
  const navigateTo = (nextPage: string) => {
    setPage(nextPage);
  }

  /*
    Added logic to switch which page is shown based on the value of the page state.
  */
  return (
    <BrowserRouter>
    <div className={"App"}>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/products"} element={<ProductItemCard handleAddToCart={handleAddToCart} />} />
        <Route path={"/mycart"} element={<CartItemCard handleRemoveFromCart = {handleRemoveFromCart} clearCart = {clearCart} cart = {cart} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
