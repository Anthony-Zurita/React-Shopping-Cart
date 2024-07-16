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
  return (
    <>
      <h1>My Cart ({cart.length})</h1>
      {cart.length === 0 && (
        <p>
          We See You Have Not Items In Your Cart. . . Browse our products to find
          amazing deals!{" "}
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
