import BoxProduct from "@/components/BoxProduct";
import {
  ArrowHome,
  ArrowHomeThree,
  BannerFooter,
  BannerHome,
  LatestHomeOne,
  LatestHomeTwo,
  SlideShowOne,
  SlideShowThree,
  SlideShowTwo,
} from "@/components/icons";
import instance from "@/configs/axios";
import { message } from "antd";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

type Props = {};

const HomeWebsite = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/categories");
        setCategories(data);
      } catch (error) {
        messageApi.error("Call api thất bại");
      }
    })();
  }, []);

  return (
    <>
      {contextHolder}
      {/* banner */}

      <div className="mb-[52px] w-[1314px] h-[394px] m-auto flex justify-between items-center ">
        <div className="ml-[109px]">
          <p className="font-bold text-[43px] text-[#1B5A7D]">Canon </p>
          <p className="font-bold text-[43px] text-[#1B5A7D] mb-[20px]">
            camera
          </p>
          <button className=" mr-[20px] w-[144px] h-[61px] rounded-[20px] font-semibold text-white bg-[#EDA415]">
            Shop now
          </button>
          <button className="w-[144px] h-[61px] rounded-[20px] font-semibold text-[#316887] border border-[#316887] ">
            View more
          </button>
        </div>
        <div className="relative mr-[109px]">
          <img className="w-[331px] h-[356px]" src={BannerHome} />
          <div className="absolute right-0 bottom-[50px] w-[120px] h-[114px] font-semibold text-[22px] text-center text-white bg-[#EDA415] rounded-full flex items-center justify-center">
            <div>
              only
              <br /> $89
            </div>
          </div>
        </div>
      </div>

      {/* slideshow */}

      <div className="w-[1222px] grid grid-cols-3 gap-[36px] h-[147px] m-auto relative">
        <div className=" border-2 border-brown h-[147px] rounded-[15px] flex items-center justify-around">
          <Link
            className=" absolute top-[50%]  w-[37px] h-[37px] left-0 text-center flex items-center translate-x-[-50%] translate-y-[-50%]"
            to=""
          >
            <img className="w-[37px] h-[37px] rounded-full" src={ArrowHome} />
          </Link>
          <img className="w-[154px] h-[94px]" src={SlideShowOne} />
          <div>
            <p className="text-[23px] text-[#1B5A7D]">Speaker</p>
            <span className="text-[18px] text-[#265F7F]">(6 items)</span>
          </div>
        </div>
        <div className=" border-2 boder-brown h-[147px] rounded-[15px] flex items-center justify-around">
          <img className="w-[122px] h-[118px]" src={SlideShowTwo} />
          <div>
            <p className="text-[23px] text-[#1B5A7D]">Desktop &amp; laptop</p>
            <span className="text-[18px] text-[#265F7F]">(6 items)</span>
          </div>
        </div>
        <div className=" border-2 boder-brown h-[147px] rounded-[15px] flex items-center justify-around ">
          <img className="w-[110px] h-[118px]" src={SlideShowThree} />
          <div>
            <p className="text-[23px] text-[#1B5A7D]">DSLR camera</p>
            <span className="text-[18px] text-[#265F7F]">(6 items)</span>
          </div>
          <Link
            className=" absolute top-[50%]  w-[37px] h-[37px] right-0 text-center flex items-center translate-x-[50%] translate-y-[-50%]"
            to=""
          >
            <img
              className="w-[37px] h-[37px] rounded-full"
              src={ArrowHomeThree}
            />
          </Link>
        </div>
      </div>

      <div>
        <div className=" w-[1314px] m-auto">
          {/* tieeu ddeef */}
          <div className="w-[100%] my-[62px] flex justify-between">
            <p className="text-[27.38px] font-semibold text-[#1B5A7D]">
              Popular products
            </p>
            <div className="flex">
            {categories.map((category: any, index) => (
              <div className="text-[16px]" key={index}>
                <button className="w-[139px] h-[45px]  border-2 boder-brown rounded-[20px] ml-[10px] font-medium text-[#1B5A7D]">
                  {category.name}
                </button>
              </div>
            ))}

            </div>
          </div>
          {/* group-box */}
          <div className="grid grid-cols-4 gap-[26px] mb-[48px] ">
            {/*box  */}
            <BoxProduct />
          </div>
          {/* phân trang */}
          <div className="w-[100px] m-auto flex justify-between mb-[50px]">
            <div className="w-[19px] h-[19px] rounded-full bg-[#ef9313] px-[7px]" />
            <div className="w-[19px] h-[19px] rounded-full border px-[7px]" />
            <div className="w-[19px] h-[19px] rounded-full border px-[7px]" />
          </div>
        </div>
        {/* banner_bottom */}
        <div className="w-[1310px] h-[417px] m-auto relative ">
          <img className="w-full" src={BannerFooter} />
          <div className="w-[370px] flex flex-col h-[100%] items-center absolute top-[50%] right-0 translate-x-[-30%] translate-y-[-35%] ">
            <div className="mb-[50px] w-[134px] leading-[45px] bg-[#EDA415] text-center text-white rounded-[19px] text-[14px]   ">
              New laptop
            </div>
            <p className="font-bold text-[41px] text-[#2E8FC5] ">
              Sale up to 50% off
            </p>
            <p className="text-white my-[40px]">12 inch hd display</p>
            <div className="w-[134px] leading-[45px] bg-[#EDA415] text-center text-white rounded-[19px] text-[14px]   ">
              Shop now
            </div>
          </div>
        </div>
        {/* latest news */}
        <div className=" w-[1310px]  m-auto">
          <div className="flex justify-between my-[62px]">
            <p className=" text-[#1B5A7D] text-[25px] font-semibold ">
              Latest news
            </p>
            <p className=" text-[#1B5A7D] text-[21px] font-medium">View all</p>
          </div>
          <div className="w-full grid grid-cols-2 gap-[20px]">
            <div className=" flex border-2 rounded-[20px] py-[38px] px-[15px]">
              <img src={LatestHomeOne} />
              <div className="pl-[34px] flex justify-between flex-col">
                <div className=" border w-[147px] leading-[41px] rounded-[20px] text-[20px] text-[#1B5A7D] font-medium text-center">
                  22,oct,2021
                </div>
                <p className="text-[#1B5A7D] font-semibold text-[22px]">
                  Who avoids a <br />
                  pain that produces?
                </p>
                <p className="text-[13px] text-[#003F62]">
                  Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                  faucibus bibendum ullamcorper. Phasellus tristique aenean at
                  lorem sed scelerisque.
                </p>
                <p className="text-[13px] text-[#003F62]">By spacing tech</p>
              </div>
            </div>
            <div className=" flex border-2 rounded-[20px] py-[38px] px-[15px]">
              <img src={LatestHomeTwo} />
              <div className="pl-[34px] flex justify-between flex-col">
                <div className=" border w-[147px] leading-[41px] rounded-[20px] text-[20px] text-[#1B5A7D] font-medium text-center">
                  22,oct,2021
                </div>
                <p className="text-[#1B5A7D] font-semibold text-[22px]">
                  Who avoids a <br />
                  pain that produces?
                </p>
                <p className="text-[13px] text-[#003F62]">
                  Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                  faucibus bibendum ullamcorper. Phasellus tristique aenean at
                  lorem sed scelerisque.
                </p>
                <p className="text-[13px] text-[#003F62]">By spacing tech</p>
              </div>
            </div>
          </div>
          {/* phân trang */}
          <div className="w-[100px] pt-[36px] m-auto flex justify-between mb-[100px] ">
            <div className="w-[19px] h-[19px] rounded-full bg-[#ef9313] px-[7px]" />
            <div className="w-[19px] h-[19px] rounded-full border px-[7px]" />
            <div className="w-[19px] h-[19px] rounded-full border px-[7px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWebsite;
