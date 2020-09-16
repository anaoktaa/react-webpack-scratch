import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Badge, Avatar } from 'antd';
import { DownOutlined, BellOutlined, SafetyOutlined, AppstoreOutlined } from '@ant-design/icons';

import german from '../../assets/logo/german.png';
import GridHeaderCard from '../grid-header-card/grid-header-card.component';
import NotifHeaderCard from '../notif-header-card/notif-header-card.component';
import LangHeaderCard from '../lang-header-card/lang-header-card.component';
import ActiveUserCard from '../active-user-card/active-user-card.component';
import ProfileHeaderCard from '../profile-header-card/profile-header-card.component';

import { setGridDashboardToggle, setNotifHeaderToggle, setLangHeaderToggle, 
         setActiveUserHeaderToggle, setProfileHeaderToggle } from '../../redux/application/application.actions';
import { selectGridDashboardToggle, selectNotifHeaderToggle, selectLangHeaderToggle,
         selectActiveUserHeaderToggle, selectProfileHeaderToggle } from '../../redux/application/application.selectors';

import './header-tools.styles.css';
import '../../App.css';

const HeaderTools = ({ setGridDashboardToggle, gridDashboardToggle, setNotifHeaderToggle, notifHeaderToggle,
                       setLangHeaderToggle, langHeaderToggle, setActiveUserHeaderToggle, activeUserToggle,
                       setProfileHeaderToggle, profileToggle }) => {

    const handleGridDashboard = () => {
        setGridDashboardToggle(true);
    }   

    const handleNotifToggle = () => {
        setNotifHeaderToggle(true);
    }

    const handleLangToggle = () => {
        setLangHeaderToggle(true);
    }

    const handleActiveUserToggle = () => {
        setActiveUserHeaderToggle(true);
    }

    const handleProfileToggle = () => {
        setProfileHeaderToggle(true);
    }

    return (
        <div className='user-profile-tools-container'>
             <div className='grid-user-profile'>
                <div className='relative' onClick={handleGridDashboard}>
                    <Avatar size={42} className='dashboard-avatar-header' icon={<AppstoreOutlined />} />
                    <GridHeaderCard show={gridDashboardToggle} clickOutside={() => setGridDashboardToggle(false)}/>
                </div>
                <div className='relative' onClick={handleNotifToggle}>
                    <Badge dot style={{backgroundColor: '#d92550', top: '5px', right: '5px', width: '10px', height: '10px'}}>
                        <Avatar size={42} className='notif-avatar-header' icon={<BellOutlined className='bell-icon-header'/>} />
                    </Badge>
                    <NotifHeaderCard show={notifHeaderToggle} clickOutside={() => setNotifHeaderToggle(false)}/>
                </div>
                <div className='relative' onClick={handleLangToggle}>
                    <Avatar size={42} className='lang-avatar-header' icon={<img src={german} alt='lang' style={{width: '65%', height: '65%'}}/>} />
                    <LangHeaderCard show={langHeaderToggle} clickOutside={() =>  setLangHeaderToggle(false)}/>
                </div>
                <div className='relative' onClick={handleActiveUserToggle}>
                    <Avatar size={42} className='active-user-avatar-header' icon={<SafetyOutlined/>} />
                    <ActiveUserCard show={activeUserToggle} clickOutside={() => setActiveUserHeaderToggle(false)}/>
                </div>
                
                <div className='flex-start-center cursor relative' onClick={handleProfileToggle}>
                    <Avatar className='avatar-style' size={42} src='https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80' />
                    <DownOutlined className='down-outline-avatar' />
                    <ProfileHeaderCard show={profileToggle} clickOutside={() => setProfileHeaderToggle(false)}/>
                </div>
            </div>
            <div className='user-profile-name'>
                <p className='avatar-name'>Alina Mclourd</p>
                <p className='avatar-position'>VP People Manager</p>
            </div>
        </div>           
    )
};

const mapStateToProps = createStructuredSelector ({
    gridDashboardToggle : selectGridDashboardToggle,
    notifHeaderToggle: selectNotifHeaderToggle,
    langHeaderToggle: selectLangHeaderToggle,
    activeUserToggle: selectActiveUserHeaderToggle,
    profileToggle : selectProfileHeaderToggle
});

const mapDispatchToProps = dispatch => ({
    setGridDashboardToggle: (val) => dispatch(setGridDashboardToggle(val)),
    setNotifHeaderToggle: (val) => dispatch(setNotifHeaderToggle(val)),
    setLangHeaderToggle: (val) => dispatch(setLangHeaderToggle(val)),
    setActiveUserHeaderToggle: (val) => dispatch(setActiveUserHeaderToggle(val)),
    setProfileHeaderToggle: (val) => dispatch(setProfileHeaderToggle(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTools);