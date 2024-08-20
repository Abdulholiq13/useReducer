import Products from "@/components/products/Products";
import { useStateValue } from "@/context";

const Cart = () => {
  let [data, dispatch] = useStateValue();
  return (
    <div>
      <h2 className="text-center text-4xl">Cart</h2>
      <Products data={data.cart} />
    </div>
  );
};

export default Cart;
