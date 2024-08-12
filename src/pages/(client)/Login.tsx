import { IUser } from "@/common/types/user";
import instance from "@/configs/axios";
import { Button, Form, FormProps, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  id?: number;
  email?: string;
  password?: string;
};

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const user: IUser = {
        email: values.email || "",
        password: values.password || "",
      };
      const { data } = await instance.post(`/signin`, user);
      localStorage.setItem("user", JSON.stringify(data));
      alert("Đăng nhập thành công");
      navigate("/");
    } catch (error) {
      messageApi.error("Đăng nhập thất bại. Vui lòng đăng nhập lại");
    }
  };

  return (
    <div className="w-[50%] m-auto flex flex-col items-center">
      {contextHolder}

      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl text-center font-semibold my-7">Đăng nhập</h1>
        <Form
          className="w-full max-w-md"
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Không được bỏ trống" },
              { type: "email", message: "Email phải đúng định dạng" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Không được bỏ trống" },
              { min: 6, message: "Mật khẩu không nhỏ hơn 6 kí tự" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
