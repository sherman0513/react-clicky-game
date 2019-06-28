import React from 'react';
import './character.css';

function CharacterCard(props) {
    return (
        <div>
            <div>
                <img alt={props.name} src={props.image} id={props.id}
                    onClick={() => props.nameOfOnClickFunction(props.id)} className="">
                </img>
            </div>
        </div>
    );
}

export default CharacterCard;