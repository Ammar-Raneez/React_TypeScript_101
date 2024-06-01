import { addToCart } from "../store/cart-slice";
import { useAppDispatch } from "../store/hooks";

interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  // Its recommended to create your own custom dispatch hook that is more type safe
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }));
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
