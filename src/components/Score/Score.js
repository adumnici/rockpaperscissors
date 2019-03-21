import React from 'react';
import './Score.css'

const Score = ({rounds, winner}) => {
    return(
        <div className="container">
            <div>{`The current round is ${rounds}`}</div>
            <div>Draws</div>
            <div>AI</div>
            <div>{`The previous winner is ${winner}`}</div>
            <div>Total Score Draw</div>
            <div>Total Score AI</div>
        </div>
    )
}

export default Score;