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
            <L href="/" target="_blank"> {t("sidebar.title")} </L>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['/']}
         mode="inline" selectedKeys={[ window.location.pathname ]}> 
            <Menu.Item key="/" icon={<BarsOutlined />}>
                <L href="/" className="nav-text">{t("sidebar.board ")}</L>
                
            </Menu.Item>
            <Menu.Item key="2" icon={<TrophyOutlined />}>
                <L href="/achievement" className="nav-text">{t("sidebar.heroism")}</L>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title={t("sidebar.profile.title")}>
                <Menu.Item key="3">
                    <L href="/edit-profile" className="nav-text">{t("sidebar.profile.edit")}</L>
                </Menu.Item>
                <Menu.Item key="4">
                    <L to="/change-language" className="nav-text" onClick={() =>changeLanguage()}>
                        {t("sidebar.profile.language")}
                    </L>
                </Menu.Item>
                { localStorage.getItem("user") &&
                <Menu.Item key="5">
                    <L href="/logout" className="nav-text"
                    onClick={() => {
                        localStorage.removeItem('user');
                        window.location.href="/signup";
                    }}
                    >{t("sidebar.profile.logout")}</L>
                </Menu.Item>
                }
            </SubMenu>
            <SubMenu key="sub2" icon={<InfoCircleOutlined />} title={t("sidebar.about.title")}>
                <Menu.Item key="6">
                    <L href="/concepts" className="nav-text">{t("sidebar.about.concept")}</L>
                </Menu.Item>
                <Menu.Item key="8">
                    <L href="/team" className="nav-text">{t("sidebar.about.team")}</L>
                </Menu.Item>
                <Menu.Item key="8">
                    <L href="/contact" className="nav-text">{t("sidebar.about.contact")}</L>
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