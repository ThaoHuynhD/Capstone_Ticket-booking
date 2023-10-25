import React from "react";
import { Button, Form, Input, message } from "antd";
import { userRegister } from "../../Services/api";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 0,
    },
    md: {
      span: 24,
    },
    xl: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};
export default function FormRegister() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    let fetchDataUserRegister = async () => {
      try {
        let res = await userRegister(values);
        message.success("Đăng ký thành công");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataUserRegister();
  };

  return (
    <Form
      {...formItemLayout}
      layout='vertical'
      form={form}
      name='register'
      onFinish={onFinish}
      className=' grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4'
      style={{
        width: "100%",
      }}
      scrollToFirstError
    >
      <Form.Item
        label='Username'
        name='taiKhoan'
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder='Username' />
      </Form.Item>

      <Form.Item
        name='matKhau'
        label='Password'
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          placeholder='Password'
          style={{
            borderRadius: 0,
            borderColor: "#6B7280",
            padding: "0.5rem 0.75rem",
          }}
        />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={["matKhau"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("matKhau") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!"),
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder='Confirm Password'
          style={{
            borderRadius: 0,
            borderColor: "#6B7280",
            padding: "0.5rem 0.75rem",
          }}
        />
      </Form.Item>

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder='E-mail' />
      </Form.Item>

      <Form.Item
        name='hoTen'
        label='Nickname'
        tooltip='What do you want others to call you?'
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder='Nickname' />
      </Form.Item>

      <Form.Item
        name='soDt'
        label='Phone Number'
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input placeholder='Phone Number' />
      </Form.Item>

      <Form.Item className='col-span-2' {...tailFormItemLayout}>
        <Button
          type='undefined'
          htmlType='submit'
          className='w-full bg-orange-400 hover:bg-orange-500 duration-300 shadow-md'
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
