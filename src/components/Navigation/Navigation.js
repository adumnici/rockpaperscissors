import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return(
    <header className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3 center">
            The best rock paper scissors game, maybe ever !!
        </h1>
        <h2 className="f5 f4-m f3-l fw2 black-70 mt0 lh-copy">
            The rules of the game are simple: Rock beats scissors, scissors beats paper and last but not least paper beats rocks. 
        </h2>
        <div className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
            Now that you know the rules, try to beat our AI (nicknamed "The Machine") at it's own game.
            It's going to be good practice for when you want to beat your friends/colleagues at this game. 
            Now, without further ado, what do you say we play and see who gets to 10 wins first?
        </div>
    </header>
    )
}

export default Navigation;