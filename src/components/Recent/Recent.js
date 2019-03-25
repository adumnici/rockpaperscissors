import React from 'react';

const Recent = ({rounds}) => {
    if(rounds === 'player'){
        return(
            <div>The winner this round is the Mighty Player</div>
        )
    } else if (rounds === 'machine') {
        return (
            <div>The winner this round is the Superior Machine</div>
        )
    } else {
        return(
            <div>The result of this round is a Dull Draw</div>
        )
      
    }

}

export default Recent;