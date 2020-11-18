import React, { Component } from 'react';

import Title from '../../components/Title/Title';
import MainGame from '../../components/MainGame/MainGame';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import './App.scss';

class App extends Component {
  state = {
    choices: ['rock', 'paper', 'scissors', 'spock', 'scissors'],
    player: {
      choice: null,
      score: 0
    },
    houseChoice: null,
    winner: null,
    showRules: false,
    type: null
  }

  optionClickedHandler = (option) =>{
    const state = {...this.state};
    const player = {...state.player};
    player.choice = option;
    this.setState({ player: player } );

    const houseChoice = state.choices[Math.floor(Math.random() * (2 - 0))]
    setTimeout(()=>{
      this.setState({ houseChoice: houseChoice });
      this.checkWinner();
    }, 2000);
  }
  typeClickedHandler = (type)=>{
    this.setState({ type: type });
  }
  checkWinner = ()=>{
    const state = {...this.state};
    const player = state.player
    let winner = 'tie';
    switch (state.houseChoice) {
      case 'paper':
        if(state.player.choice === 'rock'){winner = 'house'}
        if(state.player.choice === 'scissors'){winner = 'player'}
        if(state.player.choice === 'spock'){winner = 'house'}
        if(state.player.choice === 'lizard'){winner = 'player'}
        break;
      case 'rock':
        if(state.player.choice === 'paper'){winner = 'player'}
        if(state.player.choice === 'scissors'){winner = 'house'}
        if(state.player.choice === 'spock'){winner = 'player'}
        if(state.player.choice === 'lizard'){winner = 'house'}
        break;
      case 'scissors':
        if(state.player.choice === 'rock'){winner = 'player'}
        if(state.player.choice === 'paper'){winner = 'house'}
        if(state.player.choice === 'spock'){winner = 'player'}
        if(state.player.choice === 'lizard'){winner = 'house'}
        break;
      case 'spock':
        if(state.player.choice === 'paper'){winner = 'player'}
        if(state.player.choice === 'scissors'){winner = 'house'}
        if(state.player.choice === 'rock'){winner = 'house'}
        if(state.player.choice === 'lizard'){winner = 'player'}
        break;
      case 'lizard':
        if(state.player.choice === 'rock'){winner = 'player'}
        if(state.player.choice === 'paper'){winner = 'house'}
        if(state.player.choice === 'scissors'){winner = 'player'}
        if(state.player.choice === 'spock'){winner = 'house'}
        break;
      default:
        winner = 'tie';
        break;
    }
    if(winner === 'player'){
      player.score += 1;
    }

    setTimeout(()=>{
      this.setState({ winner: winner, player: player });
    }, 1000);
  }
  playAgain = ()=>{
    const state = {...this.state};
    const player = {...state.player};
    player.choice = null;
    if(state.winner === 'house'){player.score = 0;}
    this.setState({ 
      ...state,
      player: player,
      houseChoice: null,
      winner: null
    });    
  }
  showModal = ()=>{
    console.log('show');
    this.setState({showRules: true});
  }
  removeModal = ()=>{
    this.setState({showRules: false});
  }
  render() {
    const {player, houseChoice, winner, type} = this.state;
    return (
      <div className="App">
        <main>
          <Title score={player.score}/>
          <MainGame
            playerChoice={player.choice}
            houseChoice={houseChoice}
            winner={winner}
            optionClicked={this.optionClickedHandler}
            typeClicked={this.typeClickedHandler}
            playAgainClicked={this.playAgain}
            gameType={type} />
          <div className='Home-Btn'>
            <Button title='Home' transparent={true} clicked={()=>{return this.typeClickedHandler(null)}}/>
          </div>
          <div className='Rules-Btn'>
            <Button title='Rules' transparent={true} clicked={this.showModal}/>
          </div>
          <Modal
            show={this.state.showRules}
            modalClosed={this.removeModal} >
            <div>
              <p>RULES</p>
              <div><span onClick={this.removeModal}></span></div>
            </div>
            <div className={(type === 'classic')? 'Rules': 'Rules-Bonus'}></div>
          </Modal>
        </main>
      </div>
    );
  }
}

export default App;
