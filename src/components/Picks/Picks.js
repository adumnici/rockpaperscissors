import React from 'react';
import'./Picks.css';

const Picks = ({onClick}) => {
    return(
        <div className="wrapper">
            <div>
                <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white btn1" onClick={onClick} id='1' >Rock</button>
                <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white btn2" onClick={onClick} id='2'>Paper</button>
                <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white btn3" onClick={onClick} id='3'>Scissors</button>
            </div>
        </div>
    )
}

export default Picks;