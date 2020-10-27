import React, { useState } from 'react'
import {  Layout, Checkbox, Typography, Drawer, Form,
  Button, Input, Select, DatePicker } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {  PlusOutlined, UserOutlined, LockOutlined  } from '@ant-design/icons'

const { Option } = Select;
const { Content, Footer } = Layout;

const Signup = () => {
    
  const [visible, setVisible] = useState(0);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

    return (
      <>
        <Button type="primary" onClick={() => setVisible(1)}>
          <PlusOutlined /> Sign In
        </Button>
        <Drawer
          title="Sign in"
          width={720}
          onClose={ () => setVisible(0)}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={() => setVisible(0)} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={() => {
                  //TODO auth logic
                //localStorage.setItem('user', Date.now());
                setVisible(0);
                //window.location.href='/';
              }}
               type="primary">
                Submit
              </Button>
            </div>
          }
        >
           <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </Drawer>
      </>
    );
}

export default Signup

