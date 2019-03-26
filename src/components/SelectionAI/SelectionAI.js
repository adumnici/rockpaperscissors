import React from 'react';
import './SelectionAI.css'

const SelectionAI = ({src, firstRound}) => {
    if(firstRound === 0) {
        return(
            <div>
                <img className="aiImg" src={src} alt='the AI selection' />
            </div>
        )    
    } else {
        return(
            <div>
                <img className="aiImg2" src={src} alt='the AI selection' />
            </div>
        )
    }
   
}

export default SelectionAI;