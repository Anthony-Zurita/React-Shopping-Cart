import { get } from "http";
import { CartItemType } from "../App";

/*
    The CartItemCard component takes two props:
    1. handleRemoveFromCart: A function that takes a CartItemType object as an argument and returns void.
    2. cart: An array of CartItemType objects.
    The CartItemCard component returns a div element that contains a list of CartItemType objects that are iterated through using a map 
    function.
*/

export default function CartItemCard({
  handleRemoveFromCart,
  clearCart,
  cart,
}: {
  handleRemoveFromCart: (item: CartItemType) => void;
  clearCart: () => void;
  cart: CartItemType[];
}) {
  /*
    The getTotalCartCost function calculates the total cost of all items in the cart array. It then returns it as a number with two 
    decimal places
  */
  const getTotalCartCost = () => {
    const cartTotal = cart.reduce((totalSum, { cost }) => totalSum + cost, 0);
    return cartTotal.toFixed(2);
  };

  return (
    <>
      <h1>My Cart ({cart.length})</h1>
      {/* Used && operator to check if there are any items in the cart array. If there are exactly 0 items in the cart array, a message is shown
      to the user to encourage them to shop, otherwise it is not shown.*/}
      {cart.length === 0 && (
        <p>
          We See You Have Not Items In Your Cart. . . Browse our products to
          find amazing deals!{" "}
        </p>
      )}
      {/* Used && operator to check if there are any items in the cart array. If there are 0 items in the cart array, the Clear My Cart 
      button is not shown. If there are items in the cart array, the Clear My Cart button is shown. */}
      {cart.length > 0 && (
        <button onClick={() => clearCart()}>Clear My Cart</button>
      )}
      <div className="products">
        {cart.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleRemoveFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && <h1>TOTAL COST: ${getTotalCartCost()}</h1>}
    </>
  );
}
