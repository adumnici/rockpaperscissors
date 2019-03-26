import React from 'react';
import './Score.css'

const Score = ({rounds, winner, draws, player, ai}) => {
    return(
        <div className="container">
            <div className="color black-50">Player</div>
            <div className="color black-50">Draws</div>
            <div className="color black-50">AI</div>
            <div className="scr">{player}</div>
            <div className="scr">{draws}</div>
            <div className="scr">{ai}</div>
        </div>
    )
}

export default Score;