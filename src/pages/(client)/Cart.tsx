



import { ArrowBlack, ArrowRight, DeleteCart, ImgCart } from "@/components/icons";
import React from "react";
import { Link } from "react-router-dom";

// interface ICart {
//   id: number;
//   name: string;
//   quantity: number;
// }

const ShoppingCart: React.FC = () => {
  // const [cart, setCart] = useState<ICart[]>([]);
  // const [messageAPI, contextHolder] = message.useMessage();



  return (
 <>
      <div>
        {/* {contextHolder} */}
        <div className="w-[1310px] flex  m-auto h-[76px]  items-center mb-[100px]">
          <Link to="" className="font-medium mr-[20px] flex">
            Home
            <img className="w-[24px] ml-[15px] h-[24px]" src={ArrowRight} />
          </Link>
          <Link to="" className="font-medium mr-[20px] flex">
            All category
            <img className="w-[24px] ml-[15px] h-[24px]" src={ArrowRight} />
          </Link>
        </div>
        <div className="flex px-[6px] m-auto w-[1310px] ">
          <div className="w-2/3">
            <div className=" border-b-2" />
            <div className=" border-b-2" />
            <table className="text-center w-full h-[56px] mr-[18px] px-[15px]">
              <thead className=" bg-[#e2f4ff] h-[56px] ] ">
                <tr>
                  <th className="text-left pl-[15px]">Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr className="mt-[26px] pb-[26px] h-[119px]">
                  <td
                    className="w-2/5 h-[119px]"
                    style={{ paddingTop: 35, paddingBottom: 35 }}
                  >
                    <div className="flex items-center">
                      <img
                        className="w-1/2 h-[119px] object-cover"
                        src={ImgCart}
                      />
                      <div>
                        <p className="font-semibold text-[20px] text-[#003F62]">
                          Play game
                        </p>
                        <p>Color: Green</p>
                        <p>Size:30</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>$ 11,70</td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>
                    <button className="w-[35px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                      -
                    </button>
                    <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                      1
                    </button>
                    <button className="w-[35px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                      +
                    </button>
                  </td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>$ 11,70</td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>
                    <button>
                      <img src={DeleteCart} />
                    </button>
                  </td>
                </tr>
                <tr className="mt-[26px] pb-[26px] h-[119px]">
                  <td
                    className="w-2/5 h-[119px]"
                    style={{ paddingTop: 35, paddingBottom: 35 }}
                  >
                    <div className="flex items-center">
                      <img
                        className="w-1/2 h-[119px] object-cover"
                        src={ImgCart}
                      />
                      <div>
                        <p className="font-semibold text-[20px] text-[#003F62]">
                          Play game
                        </p>
                        <p>Color: Green</p>
                        <p>Size:30</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>$ 11,70</td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>
                    <button className="w-[35px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                      -
                    </button>
                    <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                      1
                    </button>
                    <button className="w-[35px] h-[32px] text-center border-black border-2 bg-[#EEEEEE] ">
                      +
                    </button>
                  </td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>$ 11,70</td>
                  <td style={{ paddingTop: 35, paddingBottom: 35 }}>
                    <button>
                      <img src={DeleteCart} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-full flex justify-between">
              <button className="w-[295px] h-[73px] bg-[#EDA415] text-white text-[22px] font-semibold rounded-[30px]">
                Continue shopping
              </button>
              <button className="w-[223px] h-[73px] border-2 text-[#797979] text-[22px] font-semibold rounded-[30px]">
                Update cart
              </button>
              <button className="w-[223px] h-[73px] border-2 border-[#C33131] text-[#C33131] text-[22px] font-semibold rounded-[30px]">
                Clear cart
              </button>
            </div>
          </div>
          <div className="w-1/3 ml-[20px] border mb-[92px] ">
            <form className="w-full">
              <div className="w-[100%] h-[56px] flex items-center justify-center  text-[20px] font-medium bg-[#e2f4ff]">
                Cart total
              </div>
              <div className="flex justify-between  h-[56px] my-[32px] mx-[42px] border-b-2 border-b-brown ">
                <p className="text-[20px] ">Subtotal</p>
                <p className="text-[22px] font-medium ">$ 23,20</p>
              </div>
              <div className="h-[56px]  mx-[42px]  relative ">
                <input
                  className=" px-[10px] h-[56px] outline-none border-2 rounded-[15px] w-full relative"
                  type="text"
                  placeholder="Enter coupon code"
                />
                <button className="absolute top-[30%] translate-x-[-50%] right-[0] text-[#003F62] font-medium">
                  Apply
                </button>
              </div>
              <div className="h-[56px]  mx-[42px] relative mt-[35px]">
                <input
                  className=" px-[10px] h-[56px] outline-none border-2 rounded-[15px] w-full relative"
                  type="text"
                  placeholder="County"
                />
                <button className="absolute top-[40%] translate-x-[-50%] right-[0] text-[#003F62] font-medium">
                  <img src={ArrowBlack} />
                </button>
              </div>
              <div className="flex justify-between  mx-[42px] my-[35px]">
                <p>Total amount</p>
                <p>$ 23,20</p>
              </div>
              <button className="text-[20px] font-semibold mx-[42px] w-[338px] rounded-[20px] h-[52px] mb-[20px] text-white bg-[#EDA415] ">
                Proceed to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
