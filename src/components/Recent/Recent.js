import React from 'react';
import './Recent.css';


const Recent = ({rounds, firstRound}) => {
    if(rounds === 'player'){
        return(
            <div>
                <div className="text tc">Well done ! You won this round !</div>
            </div>
            
        )
    } else if (rounds === 'machine') {
        return (
            <div>
                <div className="text">This round is mine !</div>
            </div>
        )
    } else {
        if(firstRound === 0){
            return(
                <div className="text">I'm waiting for you to start the game !</div>
            )
        } else {
            return(
                <div>
                    <div className="text">Hmm, it seems neither of us has won this round !</div>
                    {/* <img src='/tiepic.jpg' alt="pic representing a tie"/> */}
                </div>
            )
        }    
      
    }

}

export default Recent;