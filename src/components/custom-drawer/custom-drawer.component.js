import React from 'react';
import { Layout, Drawer } from 'antd';
import { createStructuredSelector } from 'reselect';

import DrawerMenu from '../drawer-menu/drawer-menu.component';
import withWindowResize from '../with-window-resize/with-window-resize.component';

import { selectFoldDrawer } from '../../redux/application/application.selectors';

import './custom-drawer.styles.css';
import admindash from '../../assets/logo/admin-dash.png';
import adminlogo from '../../assets/logo/admin-logo.png';
import { connect } from 'react-redux';

const { Sider } = Layout;


const CustomDrawer = ({ foldDrawer, actualSize }) => {
    return (
       <div>
            <div className='drawer-desktop-styles'>
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
                    <DrawerMenu/>
                </Sider>
            </div>
            <div className='drawer-mobile-tablet-styles'>
                <Drawer
                    title="Basic Drawer"
                    width='280'
                    placement="left"
                    closable={false}
                    visible={!foldDrawer && (actualSize.width <= 768 )}
                >
                    <div style={{paddingTop: '20px'}}>
                        <DrawerMenu/>
                    </div>
                </Drawer>
            </div>
       </div>
       
    )
};

const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer
});

export default connect(mapStateToProps)(withWindowResize(CustomDrawer));

