import React, { useState, createRef } from 'react'
import {  Layout, Tabs, Typography, Drawer, Form, 
  Button, Col, Row, Input, Select, DatePicker, Checkbox,
  Tooltip, AutoComplete, Cascader, } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {  PlusOutlined, UserOutlined, LockOutlined,
  EyeInvisibleOutlined, EyeTwoTone, QuestionCircleOutlined } from '@ant-design/icons'
import { StickyContainer, Sticky } from 'react-sticky';
import Captcha from "react-numeric-captcha";
import "./captcha.css";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { Content, Footer } = Layout;
const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

const Signup = () => {
 
  const [visible, setVisible] = useState(0);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    localStorage.setItem('user', Date.now());
    setVisible(0);
    window.location.href='/';
  };

  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+7</Option>
        <Option value="375">+8</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const [getCaptcha, toggleCaptcha] = useState(0)
  const [ captchaDone, setCaptchaDone ] = useState(0)
  let captcha = createRef();
  let [captchaMessage, setCaptchaMessage] = useState('');
  const captchaSubmit = e => {
    
    //e.preventDefault();
    if (captchaDone) {
      setCaptchaMessage("Form submitted ")
      toggleCaptcha(0)
    } else {
      setCaptchaMessage("Wrong captcha! Try again. ")
      console.log('wrong')
    }

    
  };

    return (
      <>
        <Button type="primary" onClick={() => setVisible(1)}>
          <PlusOutlined /> New account
        </Button>
        <Drawer
          //title="Create a new account"
          width={'max-content'}
          onClose={ () => setVisible(0)}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
            </div>
          }
        >
          <StickyContainer>
            <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
              <TabPane tab="Registration" key="1" >
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  prefix: '7',
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject('The two passwords that you entered do not match!');
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="nickname"
                  label={
                    <span>
                      Nickname&nbsp;
                      <Tooltip title="What do you want others to call you?">
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: 'Please input your nickname!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: '100%',
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="website"
                  label="Website"
                  rules={[
                    {
                      required: true,
                      message: 'Please input website!',
                    },
                  ]}
                >
                  <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                    <Input />
                  </AutoComplete>
                </Form.Item>

                <Form.Item label="Captcha" extra="We must make sure that your are a human.">      
                      <Button onClick={()=>{toggleCaptcha(1)}}>Get captcha</Button>
                    <br/><p style={{color: 'red'}}>{captchaMessage}</p>
                </Form.Item>
                { getCaptcha ?
                <form onSubmit={captchaSubmit}
                  style={{textAlign:'-webkit-center',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 30
                }}
                >
                  <Captcha
                    ref={captcha}
                    onChange={status => {console.log(status);setCaptchaDone(status)}}
                  />
                </form>
                : null  }
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox>
                    I have read the <a href="">agreement</a>
                  </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
  
              </TabPane>
              <TabPane tab="Login" key="2">
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                      remember: true,
                  }}
                  onFinish={onFinish}
                  width="250px"
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
                  </Form.Item>
              </Form>
              </TabPane>
            </Tabs>
          </StickyContainer>
          
        </Drawer>
      </>
    );
}

export default Signup