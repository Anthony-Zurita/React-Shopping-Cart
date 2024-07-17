
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
    <>
      <h1 className="product-cart-page-heading">My Cart ({getCartTotalQuantity()})</h1>
      {/* Used && operator to check if there are any items in the cart array. If there are exactly 0 items in the cart array, a message is shown
      to the user to encourage them to shop, otherwise it is not shown.*/}
      {cart.length === 0 && (
        <p className="cart-description-text">
          We see that your cart is empty. . . . Browse our products to
          find amazing deals!{" "}
        </p>
      )}
      {/* Used && operator to check if there are any items in the cart array. If there are 0 items in the cart array, the Clear My Cart 
      button is not shown. If there are items in the cart array, the Clear My Cart button is shown. */}
      {cart.length > 0 && (
        <button className="clear-cart" onClick={() => clearCart()}>Clear My Cart</button>
      )}
      <div className="products">
        {cart.map((product, index) => (
          <div key={index}>
            <h3 className="product-name">{product.name}</h3>
            <h4>Price: ${product.cost}</h4>

            <div>
              <button className="minus-button" onClick={() => handleQuantityChange(product, -1)}>
                -
              </button>
              <span>Quantity: {product.quantity}</span>
              <button className="plus-button" onClick={() => handleQuantityChange(product, 1)}>
                +
              </button>
            </div>

            <img src={product.image} alt={product.name} />
            <button className="remove-from-cart" onClick={() => handleRemoveFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && <h1 className="cart-cost">Total Cost: ${getTotalCartCost()}</h1>}
    </>
  );
}
