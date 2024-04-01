import "./product.css";

const Product = ({ description, id, image, price, title }) => {
  const handleAddToCart = (id: number) => {
    if (localStorage.getItem("cart-id")) {
      const oldArr = localStorage.getItem("cart-id");
      const newArr = JSON.parse(oldArr);
      newArr.push(id);
      localStorage.setItem("cart-id", JSON.stringify(newArr));
    } else {
      localStorage.setItem("cart-id", JSON.stringify([id]));
    }
  };
  return (
    <li className="product rounded-2xl shadow-md overflow-hidden">
      <div className="block relative h-48 bg-[#EBE3D1]">
        <img
          alt="ecommerce"
          className="object-contain object-center w-full h-full block"
          src={image}
        />
      </div>
      <div className="py-2 px-4 flex flex-col">
        <h3 className="text-gray-900 text-xl font-medium">
          {title.slice(0, 20)}
        </h3>
        <p className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {description.slice(0, Math.floor(Math.random() * (55 - 40) + 40))}
        </p>
        <div className="w-full flex justify-between">
          <p className="mt-1 font-semibold">{price} so'm</p>
          <button
            onClick={() => handleAddToCart(id)}
            className="bg-[#51267D] px-5 text-white font-normal text-base py-2 rounded-3xl"
          >
            Qo'shish
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;
