import { Container } from "@radix-ui/themes";
import { useContext } from "react";
import IProducts, {
  Context as ProductsContext,
} from "../contexts/ProductsContext";
import Product from "./Product/Product";

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  console.log(products);
  return (
    <Container>
      <ul className="flex flex-wrap lg:gap-5 md:gap-10 -m-4">
        {products?.map((product: IProducts) => (
          <Product
            key={product.id}
            description={product.description}
            category={product.category}
            id={product.id}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
            count={product.rating.rate}
            title={product.title}
          />
        ))}
      </ul>
    </Container>
  );
};

export default ProductList;
