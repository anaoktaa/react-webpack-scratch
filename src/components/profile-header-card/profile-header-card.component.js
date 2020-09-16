import React from 'react';
import { Avatar, Button } from 'antd';
import { MessageOutlined, TagOutlined } from '@ant-design/icons';

import FloatingCard from '../floating-card/floating-card.component';
import withClickOutside from  '../with-click-outside/with-click-outside.component';

import './profile-header-card.styles.css';

const ProfileHeaderCard = ({ show, ...props }) => {
    return (
        <div>
            <FloatingCard
                show={show}
                headerContent={
                    <div className='phc-header-container'>
                        <Avatar className='avatar-style' size={42} src='https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80' />
                        <div className='phc-profile-container'>
                            <p className='phc-name'>Alina Mclourd</p>
                            <p className='phc-desc'>A short profile description</p>
                        </div>
                        <Button>Logout</Button>
                    </div>
                }
                position='right'
                imageBackground={'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=336&q=80'}
                overlayColor={'#04303acf'}
                bodyContent={
                    <div className='phc-body-container'>
                        <p className='phc-main-title'>ACTIVITY</p>
                        <div className='phc-content-menu'>
                            <p className='phc-content-menu-atr'>Chat</p>
                            <div className='phc-count-number'>8</div>
                        </div>
                        <div className='phc-content-menu'>
                            <p className='phc-content-menu-atr'>Recover Password</p>
                        </div>
                        <p className='phc-main-title'>MY ACCOUNT</p>

                  
                    </div>
                }
                footerContent= {
                    <div className='phc-footer-container'> 
                        <div className='phc-box'>
                            <div className='phc-box-content'>
                                <div className='phc-box-field-1'>
                                    <MessageOutlined className='phc-box-field-icon-1' />
                                    <p className='phc-box-field-text-1'>Message</p>
                                </div>
                            </div>   
                            <div className='phc-box-content'>
                                <div className='phc-box-field-2'>
                                    <TagOutlined className='phc-box-field-icon-2'/>
                                    <p className='phc-box-field-text-2'>Support Tickets</p>
                                </div>
                            </div>   
                        </div>
                        <Button type='primary'>Open Messages</Button>
                    </div>
                }

            />

        </div>
    )
};

export default withClickOutside(ProfileHeaderCard);