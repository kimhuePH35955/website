import React from "react";
import { Link } from "react-router-dom";
import { ArrowBlack, ArrowDown } from "./icons";

const Menu = () => {
  return (
    <div className=" w-[1310px] m-auto h-[70px] text-[16px] flex items-center justify-between">
      <div className="bg-[#EDA415] text-white text-center w-[188px] px-[15px] h-[70px] flex items-center justify-center">
        <span>Browse categories</span>
        <img
          className="ml-[5px] text-white flex font-bold items-end mt-[4px]"
          src={ArrowDown}
        />
      </div>
      <div className="flex w-3/4 justify-between items-center">
        <ul className="flex items-center w-1/2 h-[70px] font-medium ">
          <li className="w-1/5">
            <Link to="/" className="flex justify-evenly">
              Home
              <img
                className="mt-1 text-black flex font-bold "
                src={ArrowBlack}
              />
            </Link>
          </li>
          <li className="w-1/5">
            <Link to="/products" className="flex justify-evenly">
              Product
              <img className="mt-1" src={ArrowBlack} />
            </Link>
          </li>
          <li className="w-1/5">
            <Link to="/cart" className="flex justify-evenly">
              Cart
            </Link>
          </li>
          <li className="w-1/5">
            <Link to="" className="flex justify-evenly">
              Pages
              <img
                className="mt-1 text-black flex font-bold "
                src={ArrowBlack}
              />
            </Link>
          </li>
          <li className="w-1/5">
            <Link to="" className="flex justify-around">
              About us
              <img
                className="mt-1 text-black flex font-bold "
                src={ArrowBlack}
              />
            </Link>
          </li>
        </ul>
        <Link className="font-bold text-[#003F62]" to="">
          30 Days Free Return
        </Link>
      </div>
    </div>
  );
};

export default Menu;
