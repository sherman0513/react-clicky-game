import React from 'react';
import CharacterCard from './components/CharacterCard';
import Wrapper from './components/Wrapper';
import characters from './character.json';
import Header from './components/Header';
import './App.css';

class App extends React.Component {

  state = {
    characters,
    score: 0,
    highScore: 0
  }

  // need to add different onclick event
  // way to shuffle cards around after each click

  render() {
    return (
      <div className="clicky-game">
        {/* header component here */}
        <Wrapper>
          <CharacterCard>

          </CharacterCard>
        </Wrapper>
      </div>
    )
  }


}

export default App;
