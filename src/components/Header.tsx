import React from "react";
import { Link } from "react-router-dom";
import { CarHome, CartHome, HeartHome, LogoWebsite, Map, UserHome } from "./icons";

type Props = {};

const Header = (_props: Props) => {
  return (
    <>
      {/* info- header */}
      <div className="text-[14px] w-full m-auto h-[72px] flex justify-between items-center">
        <p>Hotline: 0369681754</p>
        <div className="flex w-[300px] justify-between">
          <Link to="" className="flex">
            <img className=" mr-[20px] w-[24px] h-[24px]" src={Map} alt="" />
            Our store
          </Link>
          <Link to="" className="flex">
            <img className="mr-[20px] w-[24px] h-[24px]" src={CarHome} />
            Track your order
          </Link>
        </div>
      </div>

      {/* header */}
      <header className=" bg-[#003f62] text-white">
        <div className="w-[1310px] h-[100px] w-100 mx-auto flex justify-between ">
          <div className="flex text-[14px] items-center">
            <Link to="" className="w-[140px] h-[39px] flex">
              <img src={LogoWebsite} alt="Logo" />
            </Link>
            <form className="relative w-[438px] h-[56px] ml-4">
              <input
                className="outline-none border-none rounded-[16px] w-full h-full pl-[25px] text-black"
                placeholder="Tìm kiếm"
                type="text"
              />
              <button className="rounded-[16px] font-semibold bg-[#eda415] w-[132px] h-full absolute right-0 top-0">
                Search
              </button>
            </form>
          </div>
          <div className="flex mr-3 text-right ">
            <div className="flex justify-between mr-3 ">
            <Link to="" className="flex items-center justify-between mr-8">
                <div className="flex items-center justify-between ">
                  <img className=" w-[24px] h-[24px] absolute" src={CartHome} />
                  <span className=" relative left-2 bottom-3  px-[5px] py-[2px] bg-[#EDA415] text-[10px] rounded-full ml-1">
                    0
                  </span>
                </div>
                <span className="ml-[13px]">Cart</span>
              </Link>
              <Link to="/login" className="flex items-center">
                <img className=" w-[24px] h-[24px]" src={UserHome} />
                <span className="ml-[13px]" />
                <span>Tài khoản</span>
              </Link>
              {/* <Link
                to="/register"
                className="flex items-center justify-between mr-4"
              >
                <div className="flex items-center justify-between ">
                  <img
                    className=" w-[24px] h-[24px]"
                    src={HeartHome}
                    alt="Yêu thích icon"
                  />
                </div>
                <span className="ml-[13px]" />
                <span>Đăng kí</span>
              </Link> */}
             
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
