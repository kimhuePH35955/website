import { IProduct } from "@/common/types/product";
import { getProducts, removeProductById } from "@/services/product";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Image, message, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [products, setProducts] = useState([]);
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

  const onHandleRemove = async (id: number) => {
    try {
      await removeProductById(id);
      messageApi.open({
        type: "success",
        content: "Xóa sản phẩm thành công",
      });
      setProducts(products.filter((product: IProduct) => product.id != id));
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Xóa sản phẩm thất bại",
      });
    }
  };
  const columns = [
    {
      key: "name",
      dataIndex: "name",
      title: "Tên sản phẩm",
    },
    {
      key: "image",
      dataIndex: "image",
      title: "Ảnh sản phẩm",
      render: (image: string) => (
        <Image width={100} src={image} alt="Ảnh sản phẩm" />
      ),
    },
    {
      key: "price",
      dataIndex: "price",
      title: "Giá sản phẩm",
    },
    {
      key: "description",
      dataIndex: "description",
      title: "Mô tả sản phẩm",
      className: "description-col",
    },
    {
      key: "count",
      dataIndex: "count",
      title: "Số lượng sản phẩm",
    },
    {
      key: "action",
      render: (_: any, product: IProduct) => {
        return (
          <>
            <Popconfirm
              title="Xóa sản phẩm"
              description="Bạn có chắc chắn muốn xóa không ? "
              okText="Yes"
              cancelText="No"
              onConfirm={() => onHandleRemove(product.id!)}
            >
              <Button danger>Delete</Button>
            </Popconfirm>
            <Link className="ml-4" to={`/admin/products/edit/${product.id!}`}>
              <Button type="primary">Update</Button>
            </Link>
          </>
        );
      },
    },
  ];

  const dataSource = products.map((product: IProduct) => ({
    key: product.id,
    ...product,
  }));

  return (
    <>
      {contextHolder}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Quản lí sản phẩm</h1>
        <Link to="/admin/products/add">
          <Button type="primary">
            <PlusCircleFilled />
            Thêm sản phẩm
          </Button>
        </Link>
      </div>
      <Table
        className="custom-table"
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default Products;
