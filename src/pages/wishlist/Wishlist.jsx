import Products from "@/components/products/Products";
import { useStateValue } from "@/context";

const Wishlist = () => {
  let [data, dispatch] = useStateValue();
  return (
    <div>
      <h2 className="text-center text-4xl">Wishlist</h2>
      <Products data={data.wishlist} />
    </div>
  );
};

export default Wishlist;
