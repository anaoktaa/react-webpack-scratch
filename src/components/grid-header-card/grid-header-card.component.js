import React, { useRef } from 'react';
import { Button } from 'antd';
import { GlobalOutlined, SettingOutlined, DollarOutlined, ReconciliationOutlined,
         SafetyCertificateOutlined, PhoneOutlined } from '@ant-design/icons';

import FloatingCard from '../floating-card/floating-card.component';
import withClickOutside from  '../with-click-outside/with-click-outside.component';

import './grid-header-card.styles.css';

const GridHeaderCard = ({ show, ...props }) => {
    const ref = useRef(null);
    return (
        <div ref={ref}>
            <FloatingCard
                width={'300'}
                show={show}
                headerContent={
                    <div className='ghc-header-container'>
                        <p className='ghc-overviewtitle'>Grid Dashboard</p>
                        <p className='ghc-dropdown'>Easy grid navigation inside dropdowns</p>
                    </div>
                }
                position='right'
                imageBackground={'https://images.unsplash.com/photo-1418985227304-f32df7d84e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}
                overlayColor={'#3d4a8099'}
                bodyContent={
                    <div className='ghc-body-container'>
                        <div className='ghc-body-content'>
                            <GlobalOutlined twoToneColor="#eb2f96" className='ghc-icon-grid'/>
                            <p>Automation</p>
                        </div>
                        <div className='ghc-body-content'>
                            <DollarOutlined  twoToneColor="#eb2f96" className='ghc-icon-grid' />
                            <p>Reports</p>
                        </div>
                        <div className='ghc-body-content'>
                            <SettingOutlined className='ghc-icon-grid'/>
                            <p>Settings</p>
                        </div>
                        <div className='ghc-body-content'>
                            <ReconciliationOutlined className='ghc-icon-grid'/>
                            <p>Content</p>
                        </div>
                        <div className='ghc-body-content'>
                            <SafetyCertificateOutlined className='ghc-icon-grid'/>
                            <p>Activity</p>
                        </div>
                        <div className='ghc-body-content'>
                            <PhoneOutlined className='ghc-icon-grid' />
                            <p>Contact</p>
                        </div>
                    </div>
                }
                footerContent={
                    <div className='ghc-footer-container'>
                        <Button type='primary'>Follow Up</Button>
                    </div>
                }
            />
        </div>
    )
};

export default withClickOutside(GridHeaderCard);