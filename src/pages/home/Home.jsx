import Products from "@/components/products/Products";
import { useStateValue } from "@/context";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const { data: payload, loading } = useFetch("/products", { limit: 4 });
  const [data, dispatch] = useStateValue();
  return (
    <div>
      <h2 className="text-center text-4xl">Home</h2>
      <button onClick={() => dispatch({ type: "INC", payload: 1 })}>
        Count +1
      </button>

      <Products title={"New Products"} data={payload?.products} />
    </div>
  );
};

export default Home;
