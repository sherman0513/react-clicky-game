import React from 'react';
import CharacterCard from './components/CharacterCard';
import Wrapper from './components/Wrapper';
import characters from './character.json';
import Header from './components/Header';
import './App.css';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
class App extends React.Component {

  state = {
    characters,
    score: 0,
    highScore: 0,
    charactersClicked: [],
    winner: '',

  }

  characterClick = id => {
    if (this.state.charactersClicked.indexOf(id) === -1) {
      this.scoreIncrement();
      this.setState({ charactersClicked: this.state.charactersClicked.concat(id) });
    }
    else {
      alert('Shot hit the post! NO GOAL!!!' )
      this.gameOver();
    }
  }

  characterShuffle =() => {
    let shuffledCharacters = shuffle(characters);
    this.setState({ characters: shuffledCharacters})
  };

  scoreIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ winner: 'He SHOOTS and SCORES!!!' })
    }
    this.characterShuffle();
  }

  gameOver = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      charactersClicked: [],
      winner: '',
    });
  }

  render() {
    return (
      <div className="clicky-game">
        <Header
          score={this.state.score}
          highScore={this.state.highScore}
          winner={this.state.winner}
          loser={this.state.loser}
        />
        <Wrapper>
          {
            this.state.characters.map(characters =>
              <CharacterCard
                characterClick={this.characterClick}
                id={characters.id}
                image={characters.image}
              />
            )
          }
        </Wrapper>
      </div>
    )
  }
}

export default App;
