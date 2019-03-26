import React from 'react';
import './Reset.css'

const Reset = ({onClick}) => {
    return(
        <div>
            <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black" onClick={onClick}>New game</button>
        </div>
    )
}

export default Reset;