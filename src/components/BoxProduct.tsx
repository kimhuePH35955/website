import { IProduct } from "@/common/types/product";
import { getProducts } from "@/services/product";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartBoxPr, EyeBoxPr, HeartBoxPr, StartHome } from "./icons";
import instance from "@/configs/axios";

interface ICart {
  id: number;
  name: string;
  quantity: number;
}

const BoxProduct: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICart[]>([]);
  
  const userId = "123"; // Đảm bảo userId có giá trị hợp lệ

  const addItemToCart = (item: ICart) => {
    setCart(dataCart => {
      const itemIndex = dataCart.findIndex(i => i.id === item.id);
      if (itemIndex > -1) {
        const updatedCart = [...dataCart];
        updatedCart[itemIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        return [...dataCart, item];
      }
    });
  };

  const saveCartToDb = async () => {
    try {
      const response = await instance.post('/save_cart', {
        cart,
        idUser: userId,
      });

      if (response.status === 200) {
        messageApi.success('Cart saved successfully');
      } else {
        messageApi.error('Failed to save cart');
      }
    } catch (error) {
      console.error('Error saving cart:', error);
      messageApi.error('Error saving cart');
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      saveCartToDb();
    }
  }, [cart]);

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
      {products.map((product: IProduct) => (
        <div
          key={product.id} // Sử dụng product.id làm key
          className="border-2 flex flex-col rounded-[20px] h-[313px] relative group"
        >
          <div className="w-[100%] h-[60%]">
            <Link className="w-[100%] h-[100%] m-auto" to={`/products/${product.id}`}>
              <img
                className="m-auto w-[60%] h-[100%] object-cover"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <button className="absolute top-[36px] right-[22px] w-[27px] h-[27px]">
              <img className="w-[27px] h-[27px]" src={HeartBoxPr} alt="Add to Wishlist" />
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
              {[...Array(5)].map((_, starIndex) => (
                <img key={starIndex} className="w-[15px] h-[15px]" src={StartHome} alt="Star" />
              ))}
            </span>
          </div>
          <div className="hidden bottom-0 w-full h-[100%] px-[10px] justify-between items-center hover-content group-hover:flex">
            <button 
              onClick={() => addItemToCart({ id: product.id, name: product.name, quantity: 1 })} 
              className="mb-0 w-[204px] h-[60px] bg-[#87BCD9] relative flex items-center px-[10px] rounded-[20px] text-[16px] font-semibold"
            >
              Add to cart
              <img
                className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] object-cover"
                src={CartBoxPr}
                alt="Add to cart"
              />
            </button>
            <button className="bg-[#87BCD9] w-[70px] rounded-full h-[60px]">
              <img className="w-[70px] h-[60px] object-cover" src={EyeBoxPr} alt="View" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BoxProduct;
