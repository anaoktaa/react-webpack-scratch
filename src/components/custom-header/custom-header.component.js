import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Badge, Avatar } from 'antd';
import { createStructuredSelector } from 'reselect';

import { MenuUnfoldOutlined, DownOutlined, BellOutlined, SafetyOutlined,
         AppstoreOutlined, SearchOutlined, MenuFoldOutlined, CloseOutlined,
         GiftOutlined, SettingOutlined } from '@ant-design/icons';

import { setFoldDrawer } from '../../redux/application/application.actions';
import { selectFoldDrawer } from '../../redux/application/application.selectors';

import german from '../../assets/logo/german.png';
import './custom-header.styles.css';
import  '../../App.css';

const { Header } = Layout;

const CustomHeader = ({ setFoldDrawer, foldDrawer }) => {
    const [ showInputSearch, setShowInputSearch ] = useState(false);

    const handleFoldDrawer = () => {
        setFoldDrawer();
    }

    const handleShowInputSearch = () => {
        setShowInputSearch(!showInputSearch);
    }
    return (
        <Layout className="site-layout">
            <Header className={`${foldDrawer? 'header-styles-fold' : 'header-styles'}`}>
                <div className='header-container'>
                    <div className='flex-start-center'>
                        <div className='fold-container'>
                            {
                                foldDrawer?
                                <MenuUnfoldOutlined onClick={handleFoldDrawer}/> :
                                <MenuFoldOutlined onClick={handleFoldDrawer} />
                            }
                        </div>
                       <div className='input-search-header-container'>
                            <CloseOutlined onClick={handleShowInputSearch} className={`close-input-search-header ${showInputSearch? 'close-input-search-header-show': ''}`}/>
                            <input placeholder='Type to search' type='text' name='search' className={`${showInputSearch ? 'input-search-hidden-header input-search-show-header' : 'input-search-hidden-header'}`}/>
                            <Avatar onClick={handleShowInputSearch} size={42} className={`dashboard-avatar-header ${showInputSearch? 'search-avatar-header search-rotate-avatar-header': 'search-avatar-header'}`} icon={<SearchOutlined />} />
                       </div>
                       <div className={`menu-header ${!showInputSearch? '' : 'menu-header-hidden'}`}>
                           <p> <GiftOutlined /> Mega Menu</p>
                           <p> <SettingOutlined /> Settings</p>
                       </div>
                    </div>
                    <div className='user-profile'>
                        <div className='right-tools-header'>
                            <Avatar size={42} className='dashboard-avatar-header' icon={<AppstoreOutlined />} />
                            <Badge dot style={{backgroundColor: '#d92550', position: 'absolute', top: '5px', right: '5px', width: '10px', height: '10px'}}>
                                <Avatar size={42} className='notif-avatar-header' icon={<BellOutlined className='bell-icon-header'/>} />
                            </Badge>
                            <Avatar size={42} className='lang-avatar-header' icon={<img src={german} alt='lang' style={{width: '65%', height: '65%'}}/>} />
                            <Avatar size={42} className='active-user-avatar-header' icon={<SafetyOutlined/>} />
                        </div>
                        <div className='line-header'/>
                        <div className='flex-start-center cursor'>
                            <Avatar className='avatar-style' size={45} src='https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80' />
                            <DownOutlined className='down-outline-avatar' />
                        </div>
                      
                        <div className='user-profile-name'>
                            <p className='avatar-name'>Alina Mclourd</p>
                            <p className='avatar-position'>VP People Manager</p>
                        </div>
                    </div>
                </div>
            </Header>
        </Layout>
    
    )
};

const mapStateToProps = createStructuredSelector ({
    foldDrawer: selectFoldDrawer
});

const mapDispatchToProps = dispatch => ({
    setFoldDrawer: () => dispatch(setFoldDrawer())
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);