import { IProduct } from "@/common/types/product";
import { addProduct } from "@/services/product";
import { BackwardFilled } from "@ant-design/icons";
import { Button, Form, FormProps, Input, InputNumber, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import {  useState } from "react";
import { Link } from "react-router-dom";

type FieldType = {
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  count?: number;
};

const ProductAdd = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [form] = Form.useForm()

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const product: IProduct = {
        name: values.name || "",
        image: values.image || "",
        price: Number(values.price) || 0, 
        description: values.description || "",
        count: Number(values.price) || 0, 
      };
      const data = await addProduct(product);
      setProducts([...products, data]);
      messageApi.success("Sản phẩm đã được thêm thành công");
      form.resetFields()
    } catch (error) {
      messageApi.error("Thêm sản phẩm thất bại");
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Thêm sản phẩm</h1>
        <Link to="/admin/products">
          <Button type="primary">
            <BackwardFilled />
            Quay lại
          </Button>
        </Link>
      </div>

      <div className="m-auto mt-7">
        <Form form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Không được bỏ trống" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Giá sản phẩm"
            name="price"
            rules={[
              { required: true, message: "Không được bỏ trống" },
              { type: "number", min: 0, message: "Phải là số dương" },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType>
            label="Ảnh sản phẩm"
            name="image"
            rules={[{ required: true, message: "Không được bỏ trống" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Số lượng sản phẩm"
            name="count"
            rules={[
              { required: true, message: "Không được bỏ trống" },
              { type: "number", min: 0, message: "Phải là số dương" },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType>
            label="Mô tả sản phẩm"
            name="description"
            rules={[{ required: true, message: "Không được bỏ trống" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProductAdd;
