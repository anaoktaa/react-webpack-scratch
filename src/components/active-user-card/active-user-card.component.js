import React from 'react';
import { Button, Typography } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';

import FloatingCard from '../floating-card/floating-card.component';
import CounterNumber from '../couter-number/counter-number.component';
import withClickOutside from  '../with-click-outside/with-click-outside.component';

import './active-user-card.styles.css';

const { Title } = Typography;

const ActiveUserCard = ({ show, ...props }) => {
    return (
        <div>
            <FloatingCard
                show={show}
                headerContent={
                    <div className='auc-header-container'>
                        <p className='ghc-overviewtitle'>Users Online</p>
                        <p className='ghc-dropdown'>Recent account Activity Overview</p>
                    </div>
                }
                position='right'
                imageBackground={'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}
                overlayColor={'#330f3399'}
                bodyContent={
                    <div className='auc-body-container'>
                        <UserOutlined style={{fontSize: '36px', color: '#886980', marginBottom: '8px'}}/>
                        <Title style={{margin: 0, padding: 0}}>
                            <CounterNumber
                                start={100}
                                end={999}
                                delay={50}
                            />
                            K
                        </Title>
                        <p>Profile views since last login</p>
                    </div>
                }
                footerContent={
                    <div className='auc-footer-container'>
                        <Button className='auc-button'><SettingOutlined spin/> Refresh List</Button>
                    </div>
                }
            />
        </div>
    )
};

export default withClickOutside(ActiveUserCard);