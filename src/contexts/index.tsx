import { ReactNode, createContext } from "react";
import { ProductProvider } from "./ProductsContext";

const Context = createContext(null);

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Context.Provider value={null}>
      <ProductProvider>{children}</ProductProvider>
    </Context.Provider>
  );
};

export { RootProvider };
