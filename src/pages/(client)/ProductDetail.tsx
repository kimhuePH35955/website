import { IProduct } from "@/common/types/product";
import {
  ArrowRight,
  CameraBoxPrHome,
  CartBoxPr,
  EyeBoxPr,
  Facebook,
  Google,
  HeartBoxPr,
  HeartDetail,
  RemoteDetail,
  StartDetail,
  StartHome,
  WhatsApp,
} from "@/components/icons";
import { getProductsById } from "@/services/product";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  useEffect(() => {
    (async () => {
      const data = await getProductsById(id);
      setProduct({...data});
      // console.log(data.image);
    })();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      {/* <!-- mục  --> */}
      <div>
        <div className=" flex  m-auto h-[76px]  items-center mb-[100px]">
          <Link to="" className="font-medium mr-[20px] flex">
            Home
            <img className="w-[24px] ml-[15px] h-[24px]" src={ArrowRight} />
          </Link>
          <Link to="" className="font-medium mr-[20px] flex">
            All category
            <img className="w-[24px] ml-[15px] h-[24px]" src={ArrowRight} />
          </Link>
        </div>

        {/* main */}

        <div className=" m-auto flex justify-between">
          <div className="w-1/2 ">
            <div className="w-full mb-[28px] border-2 rounded-[15px]">
              <img
                className="w-[100%] h-[560px] object-cover"
                src={product.image}
              />
            </div>
            <div className="grid grid-cols-2 gap-[14px] h-[157px]">
              <img className="w-[310px] h-[157px]" src={RemoteDetail} />
              <img className="w-[310px] h-[157px]" src={RemoteDetail} />
            </div>
          </div>
          <div className="w-1/2 ml-[20px] mb-[76px]">
            <div className="mb-[30px]">
              <p className="text-[29px] font-medium text-[#003F62] mb-[25px]">
               {product.name}
              </p>
              <p className="text-[30px] font-semibold mb-[25px]">{product.price}</p>
              <div className="flex items-center mb-[25px]">
                <img className="w-[30px] h-[30px]" src={StartDetail} />
                <img className="w-[30px] h-[30px]" src={StartDetail} />
                <img className="w-[30px] h-[30px]" src={StartDetail} />
                <img className="w-[30px] h-[30px]" src={StartDetail} />
                <img className="w-[30px] h-[30px]" src={StartDetail} />
                <span className="ml-[9px] text-[13px] font-medium">
                  No reviews
                </span>
              </div>
              <p className="text-[18px] font-medium mb-[25px]">
                Availability: <span className="text-[green]">In stock</span>
              </p>
              <p className="text-[15px] text-[#5D5D5D] mb-[25px]">
                Hurry up! only 34 product left in stock!
              </p>
              <div className="border mb-[30px]" />
              <div>
                <div className="flex mb-[28px] ">
                  <p className="mr-[30px] font-medium text-[18px]">Color:</p>
                  <div className="flex items-center me-4">
                    <input
                      id="red-radio"
                      type="radio"
                      name="colored-radio"
                      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="red-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Red
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="green-radio"
                      type="radio"
                      name="colored-radio"
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="green-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Green
                    </label>
                  </div>
                </div>
                <div className="flex mb-[28px] ">
                  <p className="mr-[30px] font-medium text-[18px]">Size:</p>
                  <button className="w-[63px] h-[32px] text-center border bg-[#EEEEEE] ml-[20px]">
                    30
                  </button>
                  <button className="w-[63px] h-[32px] text-center border bg-[#EEEEEE] ml-[20px]">
                    32
                  </button>
                  <button className="w-[63px] h-[32px] text-center border bg-[#EEEEEE] ml-[20px]">
                    36
                  </button>
                  <button className="w-[63px] h-[32px] text-center border bg-[#EEEEEE] ml-[20px]">
                    39
                  </button>
                </div>
                <div className="flex mb-[28px] ">
                  <p className="mr-[30px] font-medium text-[18px]">Quantity:</p>
                  <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                    -
                  </button>
                  <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                    1
                  </button>
                  <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <button className="w-[241px] text-[22px] font-semibold h-[60px] bg-[#EDA415] text-white rounded-[25px]">
                    Add to cart
                  </button>
                  <button className="w-[241px] text-[22px] font-semibold h-[60px] bg-[#EDA415] text-white rounded-[25px]">
                    Buy it now
                  </button>
                  <button>
                    <img src={HeartDetail} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full text-left font-medium text-[18px] h-[150px] border-top-2 border-black flex flex-col justify-between">
              <p>
                Sku: <span>01133-9-9</span>
              </p>
              <p>
                Category: <span className="ml-[10px]">20% off,</span>
                <span className="ml-[10px]">49% off</span>
                <span className="ml-[10px]">Alex remote</span>
              </p>
              <div className="flex">
                <p>Share: </p>
                <div className="flex ">
                  <Link className="ml-[30px]" to="">
                    <img src={Google} />
                  </Link>
                  <Link className="ml-[30px]" to="">
                    <img src={Facebook} />
                  </Link>
                  <Link className="ml-[30px]" to="">
                    <img src={WhatsApp} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* phaan trang */}
        <div className="m-auto w-[1310px] text-center mb-[34px]">
          <button className=" mr-[20px] w-[187px] rounded-[15px] h-[60px] text-[20px] font-medium border">
            Description
          </button>
          <button className="w-[187px] rounded-[15px] h-[60px] text-[20px] text-white font-medium bg-[#003F62]">
            Description
          </button>
        </div>
        {/* Customer reviews */}
        <div className="w-[1310px] h-[223px] border rounded-[10px] m-auto flex flex-col justify-between px-[100px] py-[40px] mb-[74px]">
          <p className="font-semibold text-[23px]">Customer reviews</p>
          <p>No reviews yet</p>
          <button className="w-[196px] h-[40px] text-white bg-[#003f62]">
            Write a review
          </button>
        </div>
        <div className="m-auto w-[1310px]">
          <p className="text-[27px] font-semibold text-[#1B5A7D] mb-[62px]">
            Related product
          </p>
          <div className="grid grid-cols-4 gap-[26px] border-2 mb-[96px] ">
            {/*box  */}
            <div className="border-2 flex flex-col rounded-[20px] h-[313px]  relative group ">
              <div>
                <Link className="w-[100%] m-auto" to="">
                  <img className="m-auto" src={CameraBoxPrHome} />
                </Link>
                <button className="absolute top-[36px] right-[22px] w-[27px] h-[27px]">
                  <img className="w-[27px] h-[27px]" src={HeartBoxPr} />
                </button>
              </div>
              <div className="h-[100%] flex justify-between flex-col item-info group-hover:hidden p-[20px]">
                <p className="text-[17px] font-medium text-[#003F62]">
                  Wireless headphones
                </p>
                <p className="text-[#4A4A4A] font-medium text-[17px]">$11,70</p>
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
                  <img
                    className="w-[70px] h-[60px] object-cover"
                    src={EyeBoxPr}
                  />
                </button>
              </div>
            </div>
            <div className="border-2 flex flex-col rounded-[20px] h-[313px]  relative group">
              <div>
                <Link className="w-[100%] m-auto" to="">
                  <img className="m-auto" src={CameraBoxPrHome} />
                </Link>
                <button className="absolute top-[36px] right-[22px] w-[27px] h-[27px]">
                  <img className="w-[27px] h-[27px]" src={HeartBoxPr} />
                </button>
              </div>
              <div className="h-[100%] flex justify-between flex-col item-info group-hover:hidden p-[20px]">
                <p className="text-[17px] font-medium text-[#003F62]">
                  Wireless headphones
                </p>
                <p className="text-[#4A4A4A] font-medium text-[17px]">$11,70</p>
                <span className="flex">
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                </span>
              </div>
              <div className="hidden bottom-0 w-full h-[100%] px-[10px] transiton transform: rotate(360deg);   justify-between items-center hover-content group-hover:flex">
                <button className="mb-0 w-[204px] h-[60px] bg-[#87BCD9] relative flex items-center px-[10px] rounded-[20px] text-[16px] font-semibold">
                  Add to cart
                  <img
                    className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] object-cover"
                    src={CartBoxPr}
                  />
                </button>
                <button className="bg-[#87BCD9] w-[70px] rounded-full h-[60px]  ">
                  <img
                    className="w-[70px] h-[60px] object-cover"
                    src={EyeBoxPr}
                  />
                </button>
              </div>
            </div>
            <div className="border-2 flex flex-col rounded-[20px] h-[313px]  relative group">
              <div>
                <Link className="w-[100%] m-auto" to="">
                  <img className="m-auto" src={CameraBoxPrHome} />
                </Link>
                <button className="absolute top-[36px] right-[22px] w-[27px] h-[27px]">
                  <img className="w-[27px] h-[27px]" src={HeartBoxPr} />
                </button>
              </div>
              <div className="h-[100%] flex justify-between flex-col item-info group-hover:hidden p-[20px]">
                <p className="text-[17px] font-medium text-[#003F62]">
                  Wireless headphones
                </p>
                <p className="text-[#4A4A4A] font-medium text-[17px]">$11,70</p>
                <span className="flex">
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                </span>
              </div>
              <div className="hidden bottom-0 w-full h-[100%] px-[10px] transiton transform: rotate(360deg);   justify-between items-center hover-content group-hover:flex">
                <button className="mb-0 w-[204px] h-[60px] bg-[#87BCD9] relative flex items-center px-[10px] rounded-[20px] text-[16px] font-semibold">
                  Add to cart
                  <img
                    className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] object-cover"
                    src={CartBoxPr}
                  />
                </button>
                <button className="bg-[#87BCD9] w-[70px] rounded-full h-[60px]  ">
                  <img
                    className="w-[70px] h-[60px] object-cover"
                    src={EyeBoxPr}
                  />
                </button>
              </div>
            </div>
            <div className="border-2 flex flex-col rounded-[20px] h-[313px]  relative group">
              <div>
                <Link className="w-[100%] m-auto" to="">
                  <img className="m-auto" src={CameraBoxPrHome} />
                </Link>
                <button className="absolute top-[36px] right-[22px] w-[27px] h-[27px]">
                  <img className="w-[27px] h-[27px]" src={HeartBoxPr} />
                </button>
              </div>
              <div className="h-[100%] flex justify-between flex-col item-info group-hover:hidden p-[20px]">
                <p className="text-[17px] font-medium text-[#003F62]">
                  Wireless headphones
                </p>
                <p className="text-[#4A4A4A] font-medium text-[17px]">$11,70</p>
                <span className="flex">
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                  <img className="w-[15px] h-[15px]" src={StartHome} />
                </span>
              </div>
              <div className="hidden bottom-0 w-full h-[100%] px-[10px] transiton transform: rotate(360deg);   justify-between items-center hover-content group-hover:flex">
                <button className="mb-0 w-[204px] h-[60px] bg-[#87BCD9] relative flex items-center px-[10px] rounded-[20px] text-[16px] font-semibold">
                  Add to cart
                  <img
                    className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] object-cover"
                    src={CartBoxPr}
                  />
                </button>
                <button className="bg-[#87BCD9] w-[70px] rounded-full h-[60px]  ">
                  <img
                    className="w-[70px] h-[60px] object-cover"
                    src={EyeBoxPr}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
