import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { createStructuredSelector } from 'reselect';

import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { setFoldDrawer } from '../../redux/application/application.actions';
import { selectFoldDrawer } from '../../redux/application/application.selectors';

import './custom-header.styles.css';
import  '../../App.css';

const { Header } = Layout;

const CustomHeader = ({ setFoldDrawer, foldDrawer }) => {

    const handleFoldDrawer = () => {
        setFoldDrawer();
    }

    return (
        <Layout className="site-layout">
            <Header className={`${foldDrawer? 'header-styles-fold' : 'header-styles'}`}>
                <div className='header-container'>
                    <div className='fold-container'>
                        {
                            foldDrawer?
                            <MenuUnfoldOutlined onClick={handleFoldDrawer}/> :
                            <MenuFoldOutlined onClick={handleFoldDrawer} />
                        }
                    </div>
                    <div className='user-profile'>
                        <div className='flex-start-center cursor'>
                            <Avatar className='avatar-style' size={50} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
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