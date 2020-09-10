import React from 'react';
import { Avatar } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

import './header-search-input.styles.css';

const HeaderSearchInput = ({ handleShowInputSearch, showInputSearch }) => {
    return (
        <div className='input-search-header-container'>
            {/* <CloseOutlined onClick={handleShowInputSearch} className={`close-input-search-header ${showInputSearch? 'close-input-search-header-show': ''}`}/> */}
            <input placeholder='Type to search' type='text' name='search' className={`${showInputSearch ? 'input-search-hidden-header input-search-show-header' : 'input-search-hidden-header'}`}/>
            <Avatar onClick={handleShowInputSearch} size={42} className={`dashboard-avatar-header ${showInputSearch? 'search-avatar-header search-rotate-avatar-header': 'search-avatar-header'}`} icon={<SearchOutlined />} />
        </div>
    )
};

export default HeaderSearchInput;