import React from 'react';
import { Timeline , Typography} from 'antd';

import FloatingCard from '../floating-card/floating-card.component';
import withClickOutside from  '../with-click-outside/with-click-outside.component';

import './notif-header-card.styles.css';

const { Text } = Typography;

const NotifHeaderCard = ({ show, ...props }) => {
    return (
        <div>
            <FloatingCard
                show={show}
                position='right'
                headerContent={
                    <div className='ntc-header-container'>
                        <p className='shc-overviewtitle'>Notifications</p>
                        <p className='shc-dropdown'>You have <strong>21</strong> notifications unread</p>
                    </div>
                }
                imageBackground={'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}
                overlayColor={'#24481199'}
                bodyContent={
                    <div className='ntc-body-container'>
                        <Timeline>
                            <Timeline.Item color="green">All hands meeting</Timeline.Item>
                            <Timeline.Item color="blue">Another meeting today, at <Text type="danger"><strong>12.01 PM</strong></Text></Timeline.Item>
                            <Timeline.Item color="red">Build the productions release</Timeline.Item>
                            <Timeline.Item color="#54d8a1">FontAwsome Icons</Timeline.Item>
                            <Timeline.Item color="gray">Another meeting today, at 12.00 PM</Timeline.Item>
                            <Timeline.Item color="green">All hands meeting</Timeline.Item>
                            <Timeline.Item color="blue">Another meeting today, at <Text type="danger"><strong>12.01 PM</strong></Text></Timeline.Item>
                        </Timeline>
                    </div>
                }
            />
        </div>
    )
};

export default withClickOutside(NotifHeaderCard);