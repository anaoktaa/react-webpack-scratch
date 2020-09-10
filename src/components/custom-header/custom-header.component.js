import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { createStructuredSelector } from 'reselect';

import { MenuUnfoldOutlined, MenuFoldOutlined, GiftOutlined, SettingOutlined,
         MenuOutlined, MoreOutlined, ContactsOutlined, ContainerOutlined,
         PictureOutlined, DashboardOutlined } from '@ant-design/icons';

import withWindowResize from '../with-window-resize/with-window-resize.component';
import HeaderTools from '../header-tools/header-tools.component';
import HeaderSearchInput from '../header-search-input/header-search-input.component';
import { setFoldDrawer, setFloatingHeaderTools } from '../../redux/application/application.actions';
import { selectFoldDrawer, selectFloatingHeaderTools } from '../../redux/application/application.selectors';

import admindash from '../../assets/logo/admin-dash.png';
import './custom-header.styles.css';
import  '../../App.css';

const { Header } = Layout;

const CustomHeader = ({ setFoldDrawer, foldDrawer, actualSize, setFloatingHeaderTools, floatingHeaderTools }) => {
    const [ showInputSearch, setShowInputSearch ] = useState(false);

    const handleFoldDrawer = () => {
        setFoldDrawer();
        if (foldDrawer && showInputSearch && (actualSize.width > 768 && actualSize.width <= 1024)) {
            setShowInputSearch(false);
        } 
    }

    const handleShowInputSearch = () => {
        if (!foldDrawer && !showInputSearch && actualSize.width <= 1024 ) {
            setFoldDrawer();
        }
        setShowInputSearch(!showInputSearch);
    }

    const handleHeaderToolsFloating = () => {
        setFloatingHeaderTools();
    }

    const content = (
        <div>
            <div className='mega-menu-grid'>
                <div>
                    <p className='title-mega-menu-header'>Overview</p>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><ContactsOutlined className='mega-menu-icon' />Contacts</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><ContainerOutlined className='mega-menu-icon'/>Incidents</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><PictureOutlined className='mega-menu-icon'/>Companies</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><DashboardOutlined className='mega-menu-icon'/>Dashboard</a>
                    </div>
                </div>
                <div>
                    <p className='title-mega-menu-header'>Favourites</p>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Reports Conversions</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Quick Start</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Users & Groups</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Proprieties</a>
                    </div>
                </div>
                <div>
                    <p className='title-mega-menu-header'>Sales & Marketing</p>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Queues</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Resource Groups</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Goal Metrics</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Campaigns</a>
                    </div>
                </div>

            </div>
        
        </div>
    );

    return (
        <Layout className="site-layout">
            <Header className={`${foldDrawer? 'header-styles-fold' : 'header-styles'}`}>
                <div className='header-container-desktop'>
                    <div className='flex-start-center'>
                        <div className='fold-container'>
                            {
                                foldDrawer?
                                <MenuUnfoldOutlined onClick={handleFoldDrawer}/> :
                                <MenuFoldOutlined onClick={handleFoldDrawer} />
                            }
                        </div>
                       <HeaderSearchInput
                            showInputSearch={showInputSearch}
                            handleShowInputSearch={handleShowInputSearch}
                       />
                       <div className={`menu-header ${!showInputSearch? '' : 'menu-header-hidden'}`}>
                            <div className='mega-menu-container'>
                                <p> <GiftOutlined /> Mega Menu</p>
                                <div className='tooltip'>

                                </div>
                                <div className='mega-menu-popover-container'>
                                    {content}
                                </div>
                            </div>
                            <div className='mega-menu-container'>
                                <p> <SettingOutlined /> Settings</p>
                            </div>
                                              
                       </div>
                    </div>
                    <HeaderTools/>
                </div>
                <div className='header-container-mobile-tablet'>
                    <MenuOutlined onClick={handleFoldDrawer} style={{fontSize: '22px'}} />
                    <div className='logo-header-admin-dash'>
                        <img src={admindash} alt='admin-dash-logo' width='100%' height='100%'/>
                    </div>
                    <div className='outer-more-container'>
                        <MoreOutlined onClick={handleHeaderToolsFloating} style={{fontSize: '22px', color: 'white'}} />
                    </div>

                    <div className={`header-menu-floating ${floatingHeaderTools? 'header-menu-floating-show' : ''}`}>
                        <div className='header-menu-floating-container'>
                            <div className='header-search-menu-floating-container'>
                                <HeaderSearchInput
                                    showInputSearch={showInputSearch}
                                    handleShowInputSearch={handleShowInputSearch}
                                />
                            </div>
                            <HeaderTools/>
                        </div>
                    </div>
                </div>
            </Header>
        </Layout>
    
    )
};

const mapStateToProps = createStructuredSelector ({
    foldDrawer: selectFoldDrawer,
    floatingHeaderTools: selectFloatingHeaderTools
});

const mapDispatchToProps = dispatch => ({
    setFoldDrawer: () => dispatch(setFoldDrawer()),
    setFloatingHeaderTools: () => dispatch(setFloatingHeaderTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(withWindowResize(CustomHeader));