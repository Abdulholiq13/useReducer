/* eslint-disable react/prop-types */
import { useStateValue } from "@/context";
import { FaRegHeart } from "react-icons/fa";

const Products = ({ data, title }) => {
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div className="border p-3" key={product.id}>
      <div className="w-full h-60 bg-gray-200 relative">
        <img
          className="w-full h-full object-contain"
          src={product.images[0]}
          alt={product.title}
        />
        <button
          className="absolute top-[10px] right-[10px] p-1"
          onClick={() => {
            dispatch({ type: "TOGGLE_WISHLIST", payload: product });
          }}
        >
          <FaRegHeart className="text-2xl" />
        </button>
      </div>
      <p className="text-xl mb-4">{product.title}</p>
      <div className="flex items-center justify-between">
        <strong className="text-lg">{product.price} USD</strong>
        <button
          className="px-4 py-2 bg-zinc-400 rounded-lg text-white"
          onClick={() => {
            dispatch({ type: "TOGGLE-CART", payload: product });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
