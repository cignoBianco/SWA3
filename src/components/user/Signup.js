import React, { useState } from 'react'
import {  Layout, Tabs, Typography, Drawer, Form,
  Button, Col, Row, Input, Select, DatePicker, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {  PlusOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'
import { StickyContainer, Sticky } from 'react-sticky';

const { Option } = Select;
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
                <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[{ required: true, message: 'Please enter user name' }]}
                    >
                      <Input placeholder="Please enter user name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="url"
                      label="Url"
                      rules={[{ required: true, message: 'Please enter url' }]}
                    >
                      <Input
                        style={{ width: '100%' }}
                        addonBefore="http://"
                        addonAfter=".com"
                        placeholder="Please enter url"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="owner"
                      label="Owner"
                      rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                      <Select placeholder="Please select an owner">
                        <Option value="xiao">Xiaoxiao Fu</Option>
                        <Option value="mao">Maomao Zhou</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="type"
                      label="Type"
                      rules={[{ required: true, message: 'Please choose the type' }]}
                    >
                      <Select placeholder="Please choose the type">
                        <Option value="private">Private</Option>
                        <Option value="public">Public</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="approver"
                      label="Approver"
                      rules={[{ required: true, message: 'Please choose the approver' }]}
                    >
                      <Select placeholder="Please choose the approver">
                        <Option value="jack">Jack Ma</Option>
                        <Option value="tom">Tom Liu</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="dateTime"
                      label="DateTime"
                      rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                      <DatePicker.RangePicker
                        style={{ width: '100%' }}
                        getPopupContainer={trigger => trigger.parentElement}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="description"
                      label="Description"
                      rules={[
                        {
                          required: true,
                          message: 'please enter url description',
                        },
                      ]}
                    >
                      <Input.TextArea rows={4} placeholder="please enter url description" />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button"
                        onClick={() => {
                          localStorage.setItem('user', Date.now());
                          setVisible(0);
                          window.location.href='/';
                        }}>
                      Sign in
                      </Button>
                  </Form.Item>
                  </Col>
                </Row>
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

