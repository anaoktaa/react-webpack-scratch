import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { createStructuredSelector } from 'reselect';

import { MenuUnfoldOutlined, MenuFoldOutlined, GiftOutlined, SettingOutlined,
         MenuOutlined, MoreOutlined } from '@ant-design/icons';

import withWindowResize from '../with-window-resize/with-window-resize.component';
import HeaderTools from '../header-tools/header-tools.component';
import MegaMenu from '../mega-menu/mega-menu.component';
import SettingHeaderCardComponent from '../setting-header-card/setting-header-card.component';
import HeaderSearchInput from '../header-search-input/header-search-input.component';
import { setFoldDrawer, setFloatingHeaderTools, setMegaMenuToggle, setSettingHeaderToggle } from '../../redux/application/application.actions';
import { selectFoldDrawer, selectFloatingHeaderTools, selectMegaMenuToggle, selectSettingHeaderToggle } from '../../redux/application/application.selectors';

import admindash from '../../assets/logo/admin-dash.png';
import './custom-header.styles.css';
import  '../../App.css';

const { Header } = Layout;

const CustomHeader = ({ setFoldDrawer, foldDrawer, actualSize, setFloatingHeaderTools, floatingHeaderTools,
    megaMenuToggle, setMegaMenuToggle, settingHeaderToggle, setSettingHeaderToggle }) => {
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

    const handleToggleMegaMenu = () => {
        setMegaMenuToggle(true);
    }

    const handleToggleSettingMenu = () => {
        setSettingHeaderToggle(true);
    }
    
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
                                <a onClick={handleToggleMegaMenu}> <GiftOutlined /> Mega Menu</a>
                                <MegaMenu
                                    show={megaMenuToggle}
                                />
                            </div>
                            <div className='mega-menu-container'>
                                <a onClick={handleToggleSettingMenu}> <SettingOutlined /> Settings</a>
                                <SettingHeaderCardComponent
                                    show={settingHeaderToggle}
                                />
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
                           <div className='header-menu-floating-wrap'>
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
                </div>
            </Header>
        </Layout>
    
    )
};

const mapStateToProps = createStructuredSelector ({
    foldDrawer: selectFoldDrawer,
    floatingHeaderTools: selectFloatingHeaderTools,
    megaMenuToggle: selectMegaMenuToggle,
    settingHeaderToggle: selectSettingHeaderToggle
});

const mapDispatchToProps = dispatch => ({
    setFoldDrawer: () => dispatch(setFoldDrawer()),
    setFloatingHeaderTools: () => dispatch(setFloatingHeaderTools()),
    setMegaMenuToggle: (val) => dispatch(setMegaMenuToggle(val)),
    setSettingHeaderToggle: (val) => dispatch(setSettingHeaderToggle(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(withWindowResize(CustomHeader));