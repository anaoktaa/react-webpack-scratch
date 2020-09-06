import React from 'react';

import portfolio from './portfolio.png';

const Card = () => {
    return (
        <div>
            <img src={portfolio} alt='portfolio' width='100%' height='100%'/>
            <h1>Ini isinya seharusnya card sih. Cuma testing doang</h1>
        </div>
    )
};

export default Card;