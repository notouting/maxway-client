import CartItem from "./CartItem";
import React, { useEffect } from "react";

const CartList = () => {
  const [cartProducts, setCartProducts] = React.useState([]);

  useEffect(() => {
    handleInfinityReload();
  }, []);

  async function handleInfinityReload() {
    setCartProducts(JSON.parse(localStorage.getItem("cart-id")));
  }

  return (
    <div className="grid grid-cols-1 gap-6 rounded-2xl  overflow-hidden border-gray-400">
      {cartProducts?.map((id) => <CartItem key={id} cartId={id} />)}
    </div>
  );
};

export default CartList;
