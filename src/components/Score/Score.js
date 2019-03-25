import React from 'react';
import './Score.css'

const Score = ({rounds, winner, draws, player, ai}) => {
    return(
        <div className="container">
            <div>Player</div>
            <div>Draws</div>
            <div>AI</div>
            <div>{player}</div>
            <div>{draws}</div>
            <div>{ai}</div>
        </div>
    )
}

export default Score;