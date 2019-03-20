import React from 'react';

const Picks = ({onClick}) => {
    return(
        <div>
            <button onClick={onClick} id='1' >Rock</button>
            <button onClick={onClick} id='2'>Paper</button>
            <button onClick={onClick} id='3'>Scissors</button>
        </div>
    )
}

export default Picks;