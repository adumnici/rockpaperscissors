import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Picks from './components/Picks/Picks';
import Recent from './components/Recent/Recent';
import Reset from './components/Reset/Reset';
import Score from './components/Score/Score';
import SelectionHuman from './components/SelectionHuman/SelectionHuman';
import SelectionAI from './components/SelectionAI/SelectionAI';

const imageSelection = {
  '1': '/rock.png',
  '2': '/paper.png',
  '3': '/scissors.png'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      imageOfPlayerSelection: '',
      imageOfAiSelection: '',
      roundsPlayed: 0,
      playerSelection: []
    }
  }
 
  changeHumanImage(event){
    this.setState({imageOfPlayerSelection: event.target.id});
  }

  updateRound(){
    this.setState({roundsPlayed: this.state.roundsPlayed + 1})
    console.log(this.state.roundsPlayed)
  }

  updatePlayerSelection(event){
    this.setState({playerSelection: this.state.playerSelection.concat(event.target.id) })
  }

  changeAiImage(){
    if(this.state.roundsPlayed < 1){
      this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)})
    }
  } 

  AiMovement(){
    const rockFilterLength = this.state.playerSelection.filter(value => value === '1'); //need to introduce promise in order for the code to function properly
    console.log(rockFilterLength)
  }

  resetSelections(){
    this.setState({
      imageOfPlayerSelection: '',
      imageOfAiSelection: '',
      roundsPlayed: 0,
      playerSelection: []
    })
  }

  handleClick = (event) => {
    this.changeHumanImage(event);
    this.updateRound();
    this.changeAiImage();
    this.updatePlayerSelection(event);
    this.AiMovement();
  }

  handleResetClick = () => {
    this.resetSelections();
  }

  render() {
    const imageHuman = this.state.imageOfPlayerSelection;
    const imageAi = this.state.imageOfAiSelection;
    return (
      <div>
        <Navigation />
        <Score score={this.state.roundsPlayed}/>
        <div className="containerImage">
          <SelectionHuman src={imageSelection[imageHuman]}/>
          <Recent rounds={this.state.playerSelection}/>
          <SelectionAI src={imageSelection[imageAi]}/>
        </div>
        <Picks onClick={this.handleClick}/>
        <Reset onClick={this.handleResetClick}/>
      </div>
    );
  }
}

export default App;
