import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Proptypes from 'prop-types';
import { Menu, Button } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
    AimOutlined,
    CalendarOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;



const AppLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);


    const toggleCollapsed = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    return (

        <div style={{ width: 256 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Home
          </Menu.Item>
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Find">
                    <Menu.Item key="2" icon={<AimOutlined />}>Map</Menu.Item>
                    <Menu.Item key="3" icon={<CalendarOutlined />}>Calender</Menu.Item>

                </SubMenu>

                <Menu.Item key="4" icon={<SettingOutlined />}>
                    Settings
          </Menu.Item>

            </Menu>

            {children}
        </div>
    );
};
export default AppLayout;