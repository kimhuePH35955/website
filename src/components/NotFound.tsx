import { BackwardFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="m-auto w-max">
      <p className="py-4">Đường dẫn không tồn tại</p>
      <br />
      <Link to={"/"}>
        <Button type="primary">
          <BackwardFilled />
          Quay lại trang quản lí
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
