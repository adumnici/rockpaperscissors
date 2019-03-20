import React from 'react';
// import './SelectionHuman.css'

const SelectionHuman = ({src}) => {
    return(
        <div className='wrap'>
            <img className='img' src={src} alt='The human selection'/>
        </div>
    )
}

export default SelectionHuman;