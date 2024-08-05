import { IProduct } from "@/common/types/product";
import { getProductsById, updateProduct } from "@/services/product";
import { BackwardFilled } from "@ant-design/icons";
import { Button, Form, FormProps, Input, InputNumber, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type FieldType = {
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  count?: number;
};

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const data = await getProductsById(id);
          setProduct(data);
          form.setFieldsValue(data);
        }
      } catch (error) {
        messageApi.error("Call API thất bại");
      }
    })();
  }, [id, form, messageApi]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      if (!product) {
        throw new Error("Không có dữ liệu");
      }

      const updatedProduct: IProduct = {
        id: product.id,
        name: values.name || "",
        image: values.image || "",
        price: Number(values.price) || 0, 
        description: values.description || "",
        count: Number(values.count) || 0, 
      };

      const { data } = await updateProduct(updatedProduct);
      setProduct(data);
      messageApi.success("Sản phẩm đã được cập nhật thành công");
    } catch (error) {
      messageApi.error("Cập nhật sản phẩm thất bại");
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Cập nhật sản phẩm</h1>
        <Link to="/admin/products">
          <Button type="primary">
            <BackwardFilled />
            Quay lại
          </Button>
        </Link>
      </div>

      <div className="m-auto mt-7">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
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

export default ProductEdit;
