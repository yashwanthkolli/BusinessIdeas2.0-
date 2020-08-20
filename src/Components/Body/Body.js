import React from 'react';

import './Body.Styles.css';

const Body = ({ body }) => {
    return(
        <div className='body'>
            <p>{body}</p>
        </div>
    )
}

export default Body;