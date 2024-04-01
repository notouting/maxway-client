import React, { useEffect } from "react";
import apiClient from "../service/api-client";

const CartItem = ({ cartId }: { cartId: number }) => {
  interface CartT {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
  }

  const [item, setItem] = React.useState<CartT>(null);
  useEffect(() => {
    handleInfinityReload(cartId);
  }, []);

  async function handleInfinityReload(id) {
    apiClient.get("products/" + id).then((data) => {
      setItem(data.data);
    });
  }

  // const handleDelete = (id) => {
  // 	if (localStorage.getItem("cart-id")) {
  // 		const oldArr = localStorage.getItem("cart-id")
  // 		const newArr = JSON.parse(oldArr)
  // 		const id = newArr.findIndex(id)
  // 		newArr.splice(id, 1)
  // 		localStorage.setItem("cart-id", JSON.stringify(newArr))
  // 	}
  // }

  return (
    <div className="p-6 border rounded-2xl bg-gray-100 border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
      <div className="img-box ">
        <img
          src={item?.image}
          alt="Denim Jacket image"
          className="w-full md:max-w-[122px]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
        <div className="">
          <h2 className="font-medium text-xl leading-8 text-black mb-3">
            {item?.title}
          </h2>
          <p className="font-normal text-lg leading-8 text-gray-500 ">
            {item?.category}
          </p>
        </div>
        <div className="flex items-center justify-between gap-8">
          <h6 className="font-medium text-xl leading-8 text-indigo-600">
            {item?.price} $
          </h6>
          <div className="flex flex-col gap-4">
            <button className="text-red-500 font-bold hover:border-2 border-black rounded-md">
              X
            </button>
            <button className="text-blue-500 font-semibold hover:border-2 border-black rounded-md">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* category: "men's clothing"
description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
id: 2
image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
price: 22.3
rating: {rate: 4.1, count: 259}
title: "Mens */

export default CartItem;
