import React from 'react';
import './character.css';

function CharacterCard(props) {
    return (
        <div>
            <img
                alt={props.name}
                src={props.image}
                id={props.id}
                onClick={() => props.characterClick(props.id)} className="card">
            </img>
        </div>
    );
}

export default CharacterCard;