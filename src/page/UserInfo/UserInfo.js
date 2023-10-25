import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import "./userInfo.scss";
import { getThongTinTaiKhoan, updateUserInfo } from "../../Services/api";
import moment from "moment/moment";

import Swal from "sweetalert2";

export default function UserInfo() {
  const [thongTinUser, setThongTinUser] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getThongTinTaiKhoan();
        setThongTinUser(res.data.content);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    form.setFieldsValue({
      taiKhoan: thongTinUser.taiKhoan,
      matKhau: thongTinUser.matKhau,
      email: thongTinUser.email,
      hoTen: thongTinUser.hoTen,
      soDt: thongTinUser.soDT,
      maLoaiNguoiDung: thongTinUser.loaiNguoiDung?.tenLoai,
    });
  });

  let renderThongTinVeDaDat = () => {
    return thongTinUser.thongTinDatVe?.map((item, index) => {
      let seats = item.danhSachGhe?.at(0);
      return (
        <div key={index} className='p-4 lg:w-1/2 w-full'>
          <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
            <img
              alt='team'
              className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
              src={item.hinhAnh}
            />
            <div className='flex-grow sm:pl-8'>
              <p>
                Ngày đặt : {moment(item.ngayDat).format("hh:mm A - DD-MM-YYYY")}
              </p>
              <h2 className='title-font font-medium text-lg text-orange-500'>
                Tên Phim: {item.tenPhim}
              </h2>
              <p>
                Thời lượng: {item.thoiLuongPhim}p , giá vé :
                {item.giaVe.toLocaleString()} vnđ
              </p>
              <p className='text-green-500 text-lg'>{seats.tenHeThongRap}</p>
              <p>
                <span>{seats.tenRap}</span> -
                <span className='mb-4 ml-1'>
                  Ghế số:
                  {item.danhSachGhe?.map((ghe, index) => {
                    return <Fragment key={index}>[{ghe.tenGhe}]</Fragment>;
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  const onFinish = (values) => {
    let newValues = {
      ...values,
      maNhom: thongTinUser.maNhom,
      maLoaiNguoiDung: thongTinUser.maLoaiNguoiDung,
    };
    updateUserInfo(newValues)
      .then((res) => {
        console.log("🚀 ~ file: UserInfo.js:85 ~ .then ~ res:", res);
        Swal.fire(
          "Update succeed!",
          "You'll need to sign in again!",
          "success",
        );
      })
      .catch((err) => {
        console.log(err);
        message.error("Cập nhật không thành công");
      });
  };

  return (
    <div
      style={{
        background: `url(../image/backapp.jpg)`,
        height: "100%",
      }}
    >
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className=' w-full mb-20  p-4 formInfo'>
            <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
              SETTINGS
            </h1>
            <p className='lg:w-2/3  leading-relaxed text-base'>
              Infomation maybe change
            </p>
            <Form
              layout='vertical'
              form={form}
              name='register'
              onFinish={onFinish}
              style={{
                width: "100%",
              }}
              className=' md:grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4'
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
                <Input autoComplete='username' />
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
              >
                <Input.Password
                  autoComplete='current-password'
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
                <Input />
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
                <Input />
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
                <Input />
              </Form.Item>
              <Form.Item name='maLoaiNguoiDung' label='Type'>
                <Input disabled={true} className=' font-bold' />
              </Form.Item>

              <Form.Item className='col-span-2 flex justify-end'>
                <Button
                  type='undefined'
                  htmlType='submit'
                  className=' bg-orange-300 hover:bg-orange-600 duration-300 flex justify-center items-center'
                >
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
          <h1 className='text-center text-white text-4xl font-bold'>
            Ticket-booking History
          </h1>
          <div className='flex flex-wrap  formInfo'>
            {renderThongTinVeDaDat()}
          </div>
        </div>
      </section>
    </div>
  );
}
