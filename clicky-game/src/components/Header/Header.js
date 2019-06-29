import React from 'react';
import './header.css';

function Header(props) {
    return (
        <header>
            <div className="header">
                <div>Clicky Game</div>
                <div>Score: {props.score} </div>
                <div>High Score: {props.highScore} </div>
                <div> {props.winner} </div>
                <div> {props.loser} </div>
            </div>
        </header>
    );
};

export default Header;