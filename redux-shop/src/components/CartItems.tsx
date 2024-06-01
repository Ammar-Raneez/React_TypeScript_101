import { addToCart, removeFromCart } from "../store/cart-slice";
import type { CartItem } from '../store/cart-slice';
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function CartItems() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const formattedTotalPrice = totalPrice.toFixed(2);

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart({ id }));
  }

  return (
    <div id="cart">
      <p>No items in cart!</p>

      <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
