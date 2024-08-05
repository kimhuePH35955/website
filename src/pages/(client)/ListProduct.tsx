import BoxProduct from "@/components/BoxProduct";
import { ArrowRight } from "@/components/icons";

import { Link } from "react-router-dom";

const ListProduct = () => {
  return (
    <>
      {/* <!-- mục  --> */}
      <div>
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
        {/* main */}
        <div className="flex justify-between mb-[58px]">
          {/* left */}
          <div className="w-1/4 leading-[30px] pr-[20px]">
            <div className="flex w-full justify-between mb-[15px]">
              <p className="text-[#003F62] font-medium">Categories</p>
              <p className="text-[#595959] text-[15px] mr-[80px]">Reset</p>
            </div>
            <div className="w-[250px]">
              <div className="flex justify-between items-center w-full mb-[10px]">
                <span className="leading-[30px] flex">
                  <input
                    className="mr-[10px] text-[#222222] checked:bg-[#533939] checked:text-white rounded-[8px] w-[30px] h-[30px]"
                    type="checkbox"
                  />
                  <Link to="">
                    <label>All product</label>
                  </Link>
                </span>
                <p>5</p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-3/4 grid grid-cols-3 gap-[23px] mb-[23px]">
            {/*box item */}
            <BoxProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
