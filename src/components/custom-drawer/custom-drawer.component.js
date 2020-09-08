import React, { useState } from 'react';
import { Menu, Layout  } from 'antd';
import { createStructuredSelector } from 'reselect';

import { RocketOutlined, LayoutOutlined, AppstoreOutlined, GiftOutlined,
         BlockOutlined, TableOutlined } from '@ant-design/icons';

import { selectFoldDrawer } from '../../redux/application/application.selectors';

import './custom-drawer.styles.css';
import admindash from '../../assets/logo/admin-dash.png';
import adminlogo from '../../assets/logo/admin-logo.png';
import { connect } from 'react-redux';

const { Sider } = Layout;
const { SubMenu } = Menu;

const CustomDrawer = ({ foldDrawer }) => {

    return (
        <Sider
            className='drawer-style'
            theme="light"
            width={280}
            trigger={null}
            collapsible collapsed={foldDrawer}>
            <div className='logo'>
                <div className='logo-container'>
                    <div className={`${!foldDrawer ? 'logo-content-full': 'logo-content-sc' }`}>
                        <img src={!foldDrawer? admindash: adminlogo} alt='admin-dash' width='100%' height='100%'/>
                    </div>
                </div>
            </div>
            <Menu defaultSelectedKeys={['1']} mode="inline">
                <SubMenu key="sub1" icon={<RocketOutlined />} title="Dashboard">
                    <Menu.Item key="1">Analytics</Menu.Item>
                    <Menu.Item key="2">Commerce</Menu.Item>
                    <Menu.Item key="3">Sales</Menu.Item>
                    <Menu.Item key="4">Minimal</Menu.Item>
                    <Menu.Item key="5">CRM</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LayoutOutlined />} title="Pages">
                    <Menu.Item key="6">Login</Menu.Item>
                    <Menu.Item key="7">Login Boxed</Menu.Item>
                    <Menu.Item key="8">Register</Menu.Item>
                    <Menu.Item key="9">Register</Menu.Item>
                    <Menu.Item key="10">Register Boxed</Menu.Item>
                    <Menu.Item key="11">Forgot Password</Menu.Item>
                    <Menu.Item key="12">Forgot Password Boxed</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Applications">
                    <Menu.Item key="13">Mailbox</Menu.Item>
                    <Menu.Item key="14">Chat</Menu.Item>
                    <Menu.Item key="15">Split Layout</Menu.Item>
                    <Menu.Item key="16">FAQ Section</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<GiftOutlined />} title="Elements">
                    <Menu.Item key="17">Button</Menu.Item>
                    <Menu.Item key="18">Dropdowns</Menu.Item>
                    <Menu.Item key="19">Icons</Menu.Item>
                    <Menu.Item key="20">Badges</Menu.Item>
                    <Menu.Item key="21">Cards</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<BlockOutlined />} title="Components">
                    <Menu.Item key="22">Tabs</Menu.Item>
                    <Menu.Item key="23">Accordions</Menu.Item>
                    <Menu.Item key="24">Notifications</Menu.Item>
                    <Menu.Item key="25">Modals</Menu.Item>
                    <Menu.Item key="26">Loading Blocker</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" icon={<TableOutlined />} title="Tables">
                    <Menu.Item key="27">Data Tables</Menu.Item>
                    <Menu.Item key="28">Regular Tables</Menu.Item>
                    <Menu.Item key="29">Grid Tables</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
       
    )
};

const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer
});

export default connect(mapStateToProps)(CustomDrawer);

