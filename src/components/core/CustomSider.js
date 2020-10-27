import React, { useState } from 'react'
import {  Layout, Menu, Typography } from 'antd';
import Player from './../Player'
import { 
    TrophyOutlined,
    BarsOutlined,
    NotificationOutlined,
    InfoCircleOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { useTranslation } from "react-i18next";
import './../layout.css'


const { Sider } = Layout;
const { Title, Text, Link : L } = Typography;
const SubMenu = Menu.SubMenu;

const CustomSider = ({ changeLanguage }) => {

const { t, i18n } = useTranslation();

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
                    <L to="/change-language" className="nav-text" onClick={() =>changeLanguage()}>
                        Change Language
                        <button onClick={() => changeLanguage("en")}>EN</button>
                        <button onClick={() => changeLanguage("ru")}>RU</button>
                    </L>
                </Menu.Item>
                <Menu.Item key="5">
                    <L href="/logout" className="nav-text"
                    onClick={() => {
                        localStorage.removeItem('user');
                        window.location.href="/signup";
                    }}
                    >Log Out</L>
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
                <Player />white noise
            </Menu.Item>
        </Menu>
    </Sider>
)
}

export default CustomSider