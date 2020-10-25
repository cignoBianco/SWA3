import React, { useState } from 'react'
import {  Layout, Menu, Typography } from 'antd';
import { 
    TrophyOutlined,
    BarsOutlined,
    NotificationOutlined,
    InfoCircleOutlined,
    UserOutlined,
} from '@ant-design/icons'; 
import './../layout.css'

const { Sider } = Layout;
const { Title, Text, Link : L } = Typography;
const SubMenu = Menu.SubMenu;

const CustomSider = () => {

const [collapsed, setCollapsed] = useState(0);
return (
    <Sider collapsible collapsed={collapsed} onCollapse={()=>{setCollapsed(!collapsed)}}>
        <div className="logo" >
            <L href="/" target="_blank"> ToDo application </L>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['/']}
         mode="inline" selectedKeys={[ window.location.pathname ]}> 
            <Menu.Item key="/" icon={<BarsOutlined />}>
                <L href="/" className="nav-text">My Superhero Board</L>
                
            </Menu.Item>
            <Menu.Item key="2" icon={<TrophyOutlined />}>
                <L href="/achievement" className="nav-text">My Heroism</L>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="My Shelter">
                <Menu.Item key="3">
                    <L href="/edit-profile" className="nav-text">Edit Profile</L>
                </Menu.Item>
                <Menu.Item key="4">
                    <L href="/change-language" className="nav-text">Change Language</L>
                </Menu.Item>
                <Menu.Item key="5">
                    <L href="/logout" className="nav-text">Log Out</L>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<InfoCircleOutlined />} title="About App">
                <Menu.Item key="6">
                    <L href="/concepts" className="nav-text">Concept</L>
                </Menu.Item>
                <Menu.Item key="8">
                    <L href="/team" className="nav-text">Developers Team</L>
                </Menu.Item>
                <Menu.Item key="8">
                    <L href="/contact" className="nav-text">Contact Us</L>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<NotificationOutlined />}>
                News / Reports
            </Menu.Item>
        </Menu>
    </Sider>
)
}

export default CustomSider