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
      roundsPlayed: 1,
      playerSelection: [],
      aiSelection: [],
      previousWinner:''
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

  AiMovement(){
    const rockFilter = this.state.playerSelection.filter(value => value === '1').length;
    const paperFilter = this.state.playerSelection.filter(value => value === '2').length;
    const scissorsFilter = this.state.playerSelection.filter(value => value === '3').length;
    const rockOverall = rockFilter > paperFilter && rockFilter > scissorsFilter;
    const paperOverall = paperFilter > rockFilter && paperFilter > scissorsFilter;
    const scissorsOverall = scissorsFilter > rockFilter && scissorsFilter > paperFilter;
    const tie = rockFilter === paperFilter === scissorsFilter;
    console.log(this.state.playerSelection)
    switch(tie || rockOverall || paperOverall || scissorsOverall) {
      case tie: 
        this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)});
        console.log('im using tie case')
        break;
      case rockOverall:
        this.setState({imageOfAiSelection: '2'})
        console.log('im using the rock case')
        break;
      case paperOverall:
        this.setState({imageOfAiSelection: '3'});
        console.log('im using the paper case')
        break;
      case scissorsOverall:
        this.setState({imageOfAiSelection: '1'})
        console.log('im using the scissors case')
        break;
      default:
        this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)})
        console.log('default')
      }
    
    }

  determineWinner(){
    if(this.state.imageOfAiSelection > this.state.imageOfPlayerSelection && this.state.imageOfAiSelection !== 1){
      this.setState({previousWinner: 'The Machine'})
    } else {
      this.setState({previousWinner: 'The Player'})
    }
  }

  // updateAiSelection(){
  //   this.setState({aiSelection: this.state.aiSelection.concat(this.state.imageOfAiSelection)})
  //   console.log('this is the ai selection: '+ this.state.aiSelection)
  // }

  resetSelections(){
    this.setState({
      imageOfPlayerSelection: '',
      imageOfAiSelection: '',
      roundsPlayed: 1,
      playerSelection: []
    })
  }

  handleClick = (event) => {
    this.changeHumanImage(event);
    this.updateRound();
    this.updatePlayerSelection(event);
    this.AiMovement();
    // this.updateAiSelection();
    this.determineWinner();
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
        <Score rounds={this.state.roundsPlayed} winner={this.state.previousWinner}/>
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
