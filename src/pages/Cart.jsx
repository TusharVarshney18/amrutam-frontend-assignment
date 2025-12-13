import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  if (cart.length === 0)
    return <h2 className="text-center mt-20">Your cart is empty</h2>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-semibold">Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mt-6 border-b pb-4">
          <div className="flex gap-4">
            <img src={item.image} className="w-20 h-20 rounded-md" />
            <div>
              <h3>{item.name}</h3>
              <p className="text-[#0C5C4C] font-semibold">₹{item.price}</p>

              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => updateQty(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQty(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          </div>

          <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
