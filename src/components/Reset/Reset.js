import React from 'react';
import './Reset.css'

const Reset = ({onClick}) => {
    return(
        <div>
            <button className='reset' onClick={onClick}>New game</button>
        </div>
    )
}

export default Reset;