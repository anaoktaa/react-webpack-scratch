import React, { useRef } from 'react';
import { ContactsOutlined, ContainerOutlined, PictureOutlined, DashboardOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { setMegaMenuToggle } from '../../redux/application/application.actions';
import withClickOutside from '../with-click-outside/with-click-outside.component';

import './mega-menu.styles.css';

const MegaMenu = ({ show, ...props }) => {
    const ref = useRef(null);

    return (        
        <div ref={ref} className={`initial-mega-menu ${show? 'show-mega-menu' : 'hide-mega-menu'}`}>
             <div className='tooltip'/>
            <div className='mega-menu-popover-container'>
                <div className='mega-menu-grid'>
                    <div>
                        <p className='title-mega-menu-header'>Overview</p>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'><ContactsOutlined className='mega-menu-icon' />Contacts</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'><ContainerOutlined className='mega-menu-icon'/>Incidents</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'><PictureOutlined className='mega-menu-icon'/>Companies</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'><DashboardOutlined className='mega-menu-icon'/>Dashboard</a>
                        </div>
                    </div>
                    <div>
                        <p className='title-mega-menu-header'>Favourites</p>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Reports Conversions</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Quick Start</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Users & Groups</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Proprieties</a>
                        </div>
                    </div>
                    <div>
                        <p className='title-mega-menu-header'>Sales & Marketing</p>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Queues</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Resource Groups</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Goal Metrics</a>
                        </div>
                        <div className='mega-menu-content-wrap'>
                            <a href='#'>Campaigns</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clickOutside: (val) => dispatch(setMegaMenuToggle(val))
})

export default connect(null, mapDispatchToProps)(withClickOutside(MegaMenu));