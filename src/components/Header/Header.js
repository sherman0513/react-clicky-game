import React from 'react';
import './header.css';

function Header(props) {
    return (
        <header className="container">
            <div className="header col-md-12 text-center">
                <div>Clicky Game</div>
            </div>
            <div>
                Click on an image to begin.  Don't click on the same image twice or you will lose
            </div>
            <div>
                <div className="col-md-6">Score: {props.score} </div>
                <div className="col-md-6">High Score: {props.highScore} </div>
                <div> {props.winner} </div>
            </div>
        </header >
    );
};

export default Header;