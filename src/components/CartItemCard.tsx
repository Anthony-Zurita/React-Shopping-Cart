
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
  handleQuantityChange,
}: {
  handleRemoveFromCart: (item: CartItemType) => void;
  clearCart: () => void;
  cart: CartItemType[];
  handleQuantityChange: (product: CartItemType, amtToChange: number) => void;
}) {
  /*
    The getTotalCartCost function calculates the total cost of all items in the cart array. It then returns it as a number with two 
    decimal places
  */
  const getTotalCartCost = () => {
    const cartTotal = cart.reduce(
      (total, { cost, quantity }) => total + cost * quantity,
      0
    );
    return cartTotal.toFixed(2);
  };

  const getCartTotalQuantity = () => {
    return cart.reduce((total, { quantity }) => total + quantity, 0);
  };
  

  return (
    <div className="background-cart">
    <div className="mycart-clearcart">
      <h1 className="cart-page-heading">My Cart ({getCartTotalQuantity()})</h1>
      {/* Used && operator to check if there are any items in the cart array. If there are exactly 0 items in the cart array, a message is shown
      to the user to encourage them to shop, otherwise it is not shown.*/}
      {cart.length === 0 && (
        <p className="cart-empty-text">
          We see that your cart is empty. . . . Browse our products to
          find amazing deals!{" "}
        </p>
      )}
      {/* Used && operator to check if there are any items in the cart array. If there are 0 items in the cart array, the Clear My Cart 
      button is not shown. If there are items in the cart array, the Clear My Cart button is shown. */}
      {cart.length > 0 && (
        <button className="clear-cart" onClick={() => clearCart()}>Clear My Cart</button>
      )}
      </div>

      <div className="cart">
        {cart.map((cart, index) => (
          <div key={index} className="cart-card">
            <div className="cart-info-container">

            <img src={cart.image} alt={cart.name} />

            <div className="cart-info-stack">
            <h3 className="cart-name">{cart.name}</h3>
            <h4 className="cart-cost">${cart.cost}</h4>
            

            <div>
              <button className="minus-button" onClick={() => handleQuantityChange(cart, -1)}>
                -
              </button>
              <span>Quantity: {cart.quantity}</span>
              <button className="plus-button" onClick={() => handleQuantityChange(cart, 1)}>
                +
              </button>
            </div>
            </div>
            </div>

            
            <button className="remove-from-cart" onClick={() => handleRemoveFromCart(cart)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart-cost-container">
      {cart.length > 0 && <h1 className="total-cart-cost">Cart Cost: ${getTotalCartCost()}</h1>}
    </div>
    </div>
  );
}
