import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Google, HeadPhone, LogoFooter, WhatsApp } from "./icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" border text-center w-[1440px] bg-[#e2f4ff] m-auto">
      <div className="m-auto w-[1310px]  h-[139px] bg-white mt-[42px] rounded-[15px] flex justify-around  items-center text-white">
        <p className="font-bold text-[29px] text-[#1B5A7D]">
          Subscribe newsletter
        </p>
        <input
          className="px-[15px] w-[388px] h-[63px] bg-[#EDA415] text-white placeholder-white rounded-[20px] outline-none"
          placeholder="Email address"
        />
        <div className="flex justify-between">
          <img className="w-[45px] h-[45px] mr-[15px]" src={HeadPhone} />
          <p className="text-[14px] font-semibold text-black">
            Call us 24/7 : <br />
            (+62) 0123 567 789
          </p>
        </div>
      </div>
      <div className="w-[1310px] m-auto py-[45px] flex justify-between">
        <div>
          <Link className="w-[140] h-[39px]" to="">
            <img className="w-[140px] h-[39px] object-cover" src={LogoFooter} />
          </Link>
          <p className="text-left w-[183px] text-[16px] border-b-black py-[40px] text-[#1B5A7D]">
            64 st james boulevard hoswick , ze2 7zj
          </p>
          <div className="flex w-[140px] justify-between">
            <Link className="w-[24px] h-[24px]" to="">
              <img className="w-[24px] h-[24px]" src={Google} />
            </Link>
            <Link className="w-[24px] h-[24px]" to="">
              <img className="w-[24px] h-[24px]" src={Facebook} />
            </Link>
            <Link className="w-[24px] h-[24px]" to="">
              <img className="w-[24px] h-[24px]" src={WhatsApp} />
            </Link>
          </div>
        </div>
        <div className="text-left flex flex-col justify-between">
          <p className="text-[19px] font-semibold text-[#1B5A7D]">
            Find product
          </p>
          <ul>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Brownze arnold
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Chronograph blue
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Smart phones
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Automatic watch
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Hair straighteners
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-left flex flex-col justify-between">
          <p className="text-[19px] font-semibold text-[#1B5A7D]">Get help</p>
          <ul>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">About us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">Contact us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Return policy
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Privacy policy
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Payment policy
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-left flex flex-col justify-between">
          <p className="text-[19px] font-semibold text-[#1B5A7D]">About us</p>
          <ul>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">News</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">Service</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">Our policy</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">
                    Custmer care
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px] " />
                  <span className="text-[#1B5A7D] text-[19px]">Faq’s</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
