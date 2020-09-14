import React from 'react';
import { Menu, Button } from 'antd';

import FloatingCard from '../floating-card/floating-card.component';

import './setting-header-card.styles.css';

const SettingHeaderCardComponent =  ({ show }) => {
    return (
        <div>
            <FloatingCard
                show={show}
                headerContent={
                    <div className='shc-header-container'>
                        <p className='shc-overviewtitle'>Overview</p>
                        <p className='shc-dropdown'>Dropdown menus for everyone</p>
                    </div>
                }
                imageBackground={'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}
                overlayColor={'#37383699'}
                bodyContent={
                    <div>
                        <p className='shc-keyframes'>KEY FRAMES</p>
                        <Menu>
                            <Menu.Item>
                                Service Calendar
                            </Menu.Item>
                            <Menu.Item>
                                Knowledge Base
                            </Menu.Item>
                            <Menu.Item>
                                Accounts
                            </Menu.Item>
                        </Menu>
                    </div>
                }
                footerContent={
                    <div>
                         <Button type="primary" danger>
                            Cancel
                        </Button>
                    </div>
                }
            />
        </div>
    )
};

export default SettingHeaderCardComponent;