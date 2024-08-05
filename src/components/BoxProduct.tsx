import { IProduct } from "@/common/types/product";
import { getProducts } from "@/services/product";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartBoxPr, EyeBoxPr, HeartBoxPr, StartHome } from "./icons";

const BoxProduct = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        messageApi.error("Call api thất bại");
      }
    })();
  }, []);

  return (
    <>
      {contextHolder}
      {products.map((product: IProduct, index) => (
        <div
          key={index}
          className="border-2 flex flex-col rounded-[20px] h-[313px]  relative group "
        >
          <div className="w-[100%] h-[60%]">
            <Link className="w-[100%] h-[100%] m-auto" to={`/products/${product.id}`}>
              <img
                className="m-auto w-[60%] h-[100%] object-cover"
                src={product.image}
              />
            </Link>
            <button className="absolute top-[36px] right-[22px] w-[27px] h-[27px]">
              <img className="w-[27px] h-[27px]" src={HeartBoxPr} />
            </button>
          </div>
          <div className="h-[100%] flex justify-between flex-col item-info group-hover:hidden p-[20px]">
            <Link to={`/products/${product.id}`}>
            <p className="text-[17px] font-medium text-[#003F62]">
              {product.name}
            </p>
            </Link>
            <Link to={`/products/${product.id}`}>
            <p className="text-[#4A4A4A] font-medium text-[17px]">
              {product.price}
            </p>
            </Link>
            <span className="flex">
              <img className="w-[15px] h-[15px]" src={StartHome} />
              <img className="w-[15px] h-[15px]" src={StartHome} />
              <img className="w-[15px] h-[15px]" src={StartHome} />
              <img className="w-[15px] h-[15px]" src={StartHome} />
              <img className="w-[15px] h-[15px]" src={StartHome} />
            </span>
          </div>
          <div className="hidden bottom-0 w-full h-[100%] px-[10px] justify-between items-center hover-content group-hover:flex">
            <button className="mb-0 w-[204px] h-[60px] bg-[#87BCD9] relative flex items-center px-[10px] rounded-[20px] text-[16px] font-semibold">
              Add to cart
              <img
                className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] object-cover"
                src={CartBoxPr}
              />
            </button>
            <button className="bg-[#87BCD9] w-[70px] rounded-full h-[60px]  ">
              <img className="w-[70px] h-[60px] object-cover" src={EyeBoxPr} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BoxProduct;
