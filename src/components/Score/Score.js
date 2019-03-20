import React from 'react';
import './Score.css'

const Score = ({score}) => {
    return(
        <div className="container">
            <div>{`The current round is ${score}`}</div>
            <div>Draws</div>
            <div>AI</div>
            <div>Total Score Human</div>
            <div>Total Score Draw</div>
            <div>Total Score AI</div>
        </div>
    )
}

export default Score;