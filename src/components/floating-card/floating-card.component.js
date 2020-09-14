import React from 'react';

import './floating-card.styles.css';

const FloatingCard = ({ headerContent, imageBackground, overlayColor, bodyContent, footerContent,
                        show }) => {
    return (
        <div className={`floating-card-container ${show? 'floating-card-show' : 'floating-card-hidden'}`}>
            <div className='floating-card-header' style={{backgroundImage: `url(${imageBackground})`}}>
                <div className='floating-card-overlay-content'>
                    {headerContent}
                </div>
                <div className='floating-card-overlay-header' style={{backgroundColor: `${overlayColor}`}}/>
            </div>
            <div className='floating-card-content'>
                {bodyContent}
            </div>
            <div className='floating-card-footer'>
                {footerContent}
            </div>
        </div>
    )
};

export default FloatingCard;