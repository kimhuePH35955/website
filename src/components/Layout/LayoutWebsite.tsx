import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <div className="border w-[1440px] m-auto">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
