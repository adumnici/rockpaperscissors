import React from 'react';
import './SelectionHuman.css'

const SelectionHuman = ({src, firstRound}) => {
    if(firstRound === 0) {
        return(
            <div className='wrap'>
                <img className='humanImg' src={src} alt='The human selection'/>
            </div> 
        ) 
    } else {
        return(
            <div className='wrap'>
                <img className='humanImg2' src={src} alt='The human selection'/>
            </div>
        )
    }
  
}

export default SelectionHuman;