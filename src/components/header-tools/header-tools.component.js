import React from 'react';
import { Badge, Avatar } from 'antd';

import { DownOutlined, BellOutlined, SafetyOutlined, AppstoreOutlined } from '@ant-design/icons';

import german from '../../assets/logo/german.png';

import './header-tools.styles.css';

const HeaderTools = () => {
    return (
        <div className='user-profile-tools-container'>
             <div className='grid-user-profile'>
                <Avatar size={42} className='dashboard-avatar-header' icon={<AppstoreOutlined />} />
                <Badge dot style={{backgroundColor: '#d92550', position: 'absolute', top: '5px', right: '5px', width: '10px', height: '10px'}}>
                    <Avatar size={42} className='notif-avatar-header' icon={<BellOutlined className='bell-icon-header'/>} />
                </Badge>
                <Avatar size={42} className='lang-avatar-header' icon={<img src={german} alt='lang' style={{width: '65%', height: '65%'}}/>} />
                <Avatar size={42} className='active-user-avatar-header' icon={<SafetyOutlined/>} />
                <div className='flex-start-center cursor'>
                    <Avatar className='avatar-style' size={42} src='https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80' />
                    <DownOutlined className='down-outline-avatar' />
                </div>
            </div>
            <div className='user-profile-name'>
                <p className='avatar-name'>Alina Mclourd</p>
                <p className='avatar-position'>VP People Manager</p>
            </div>
        </div>           
    )
};

export default HeaderTools;