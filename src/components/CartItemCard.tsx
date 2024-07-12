import { CartItemType } from "../App";

/*
    The CartItemCard component takes two props:
    1. handleRemoveFromCart: A function that takes a CartItemType object as an argument and returns void.
    2. cart: An array of CartItemType objects.
    The CartItemCard component returns a div element that contains a list of CartItemType objects that are iterated through using a map 
    function.
*/

export default function CartItemCard( {handleRemoveFromCart, cart}: {handleRemoveFromCart: (item: CartItemType) => void; cart: CartItemType[];}
) {
  return (
    <>
      <h1>My Cart ({cart.length})</h1>
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
