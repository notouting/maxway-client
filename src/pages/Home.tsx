import { useContext, useEffect } from "react";
import { Context as ProductsContext } from "../contexts/ProductsContext";
import apiClient from "../service/api-client";
import ProductList from "../components/ProductList";

const Home = () => {
  const { setProducts } = useContext(ProductsContext);

  useEffect(() => {
    handleInfinityReload();
  }, []);

  async function handleInfinityReload() {
    apiClient.get("products").then((data) => {
      setProducts(data.data);
    });
  }

  return (
    <div className="mt-14">
      <ProductList />
    </div>
  );
};

export default Home;
