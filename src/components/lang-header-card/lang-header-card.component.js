import React from 'react';
import { Menu } from 'antd';

import FloatingCard from '../floating-card/floating-card.component';
import withClickOutside from  '../with-click-outside/with-click-outside.component';

import france from '../../assets/flag/france.png';
import germany from '../../assets/flag/germany.png';
import indonesia from '../../assets/flag/indonesia.png';
import italy from '../../assets/flag/italy.png';
import spain from '../../assets/flag/spain.png';
import usa from '../../assets/flag/usa.png';

import './lang-header-card.styles.css';

const LangHeaderCard = ({ show, ...props }) => {
    return (
        <div>
            <FloatingCard
                width={'270'}
                show={show}
                headerContent={
                    <div className='lhc-header-container'>
                        <p className='ghc-dropdown'>Choose language</p>
                    </div>
                }
                position='right'
                imageBackground={'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'}
                overlayColor={'#22232599'}
                bodyContent={
                    <div className='lhc-body-container'>
                        <p className='lhc-title'>Popular Languages</p>
                        <Menu>
                            <Menu.Item>
                                <div className='lhc-menu-item-content'>
                                    <div className='lhc-lang-img-container'>
                                        <img src={indonesia} alt='indonesia' width='100%' height='100%'/>
                                    </div>
                                    <p>Indonesia</p>
                                </div>
                            </Menu.Item>
                            <Menu.Item>
                                <div className='lhc-menu-item-content'>
                                    <div className='lhc-lang-img-container'>
                                        <img src={usa} alt='usa' width='100%' height='100%'/>
                                    </div>
                                    <p>USA</p>
                                </div>
                            </Menu.Item>
                            <Menu.Item>
                                <div className='lhc-menu-item-content'>
                                    <div className='lhc-lang-img-container'>
                                        <img src={germany} alt='germany' width='100%' height='100%'/>
                                    </div>
                                    <p>Germany</p>
                                </div>
                            </Menu.Item>
                            <Menu.Item>
                                <div className='lhc-menu-item-content'>
                                    <div className='lhc-lang-img-container'>
                                        <img src={spain} alt='spain' width='100%' height='100%'/>
                                    </div>
                                    <p>Spain</p>
                                </div>
                            </Menu.Item>
                        </Menu>
                        <div className='lhc-line'/>
                        <p className='lhc-title'>Popular Languages</p>
                        <Menu>
                            <Menu.Item>
                                <div className='lhc-menu-item-content'>
                                    <div className='lhc-lang-img-container'>
                                        <img src={italy} alt='italy' width='100%' height='100%'/>
                                    </div>
                                    <p>Italy</p>
                                </div>
                            </Menu.Item>
                            <Menu.Item>
                                <div className='lhc-menu-item-content'>
                                    <div className='lhc-lang-img-container'>
                                        <img src={france} alt='france' width='100%' height='100%'/>
                                    </div>
                                    <p>France</p>
                                </div>
                            </Menu.Item>
                        </Menu>
                    </div>
                }
            />
        </div>
    )
};

export default withClickOutside(LangHeaderCard);