import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
} from "react";

interface IProducts {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

interface IContext {
  products: IProducts[] | undefined;
  setProducts: Dispatch<SetStateAction<undefined>>;
}

const Context = createContext<IContext | null>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = React.useState(null);

  return (
    <Context.Provider value={{ products, setProducts }}>
      {children}
    </Context.Provider>
  );
};

export { ProductProvider, Context };
export default IProducts;
