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
import 'tachyons';

const imageSelection = {
  'default': '/defaultpic.png',
  '1': '/rock.png',
  '2': '/paper.png',
  '3': '/scissors.png'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      imageOfPlayerSelection: 'default',
      imageOfAiSelection: 'default',
      roundsPlayed: 0,
      playerSelection: [],
      previousWinner: [],
      playerTotal: 0,
      drawsTotal: 0,
      aiTotal: 0
    }
  }
 
  async changeHumanImage(event){
    this.setState({imageOfPlayerSelection: event.target.id});
    await this.state.imageOfPlayerSelection;
  }

  updateRound(){
    this.setState({roundsPlayed: this.state.roundsPlayed + 1})
  }

  async updatePlayerSelection(event){
    this.setState({playerSelection: this.state.playerSelection.concat(event.target.id) })
    await this.state.playerSelection
  }

  AiMovement(){
    const rockFilter = this.state.playerSelection.filter(value => value === '1').length;
    const paperFilter = this.state.playerSelection.filter(value => value === '2').length;
    const scissorsFilter = this.state.playerSelection.filter(value => value === '3').length;
    const rockOverall = rockFilter > paperFilter && rockFilter > scissorsFilter;
    const paperOverall = paperFilter > rockFilter && paperFilter > scissorsFilter;
    const scissorsOverall = scissorsFilter > rockFilter && scissorsFilter > paperFilter;
    const tie = rockFilter === paperFilter === scissorsFilter;
    switch(tie || rockOverall || paperOverall || scissorsOverall) {
      case tie: 
        this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)});
        break;
      case rockOverall:
        this.setState({imageOfAiSelection: '2'})
          if(Number(this.state.imageOfAiSelection) > Number(this.state.imageOfPlayerSelection)){
            this.setState({imageOfAiSelection: '2'})
          } else {
            this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)});
            this.setState({playerSelection: []})
          }
        break;
      case paperOverall:
        this.setState({imageOfAiSelection: '3'})
          if(Number(this.state.imageOfAiSelection) > Number(this.state.imageOfPlayerSelection) && Number(this.state.imageOfPlayerSelection) !== 1){
            this.setState({imageOfAiSelection: '3'})
          } else {
            this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)})
            this.setState({playerSelection: []})
          }
        break;
      case scissorsOverall:
        this.setState({imageOfAiSelection: '1'})
          if(Number(this.state.imageOfAiSelection) === 1 && Number(this.state.imageOfPlayerSelection) === 3){
            this.setState({imageOfAiSelection: '1'})
          } else {
            this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)})
            this.setState({playerSelection: []})
          }
        break;
      default:
        this.setState({imageOfAiSelection: Math.floor((Math.random() * 3) + 1).toString(16)})
      }
    
    }
  componentDidUpdate(prevProps, prevState) {
      if(prevState.roundsPlayed < this.state.roundsPlayed) {
        const imageOfAiSelection = this.state.imageOfAiSelection;
        const imageOfPlayerSelection = this.state.imageOfPlayerSelection;
        if((imageOfAiSelection === '1' && imageOfPlayerSelection === '3') 
        || (imageOfAiSelection === '2' && imageOfPlayerSelection === '1') 
        || (imageOfAiSelection === '3' && imageOfPlayerSelection === '2')){
          this.setState({previousWinner: this.state.previousWinner.concat('machine')})
        } else if ((imageOfPlayerSelection === '1' && imageOfAiSelection === '3') 
        || (imageOfPlayerSelection === '2' && imageOfAiSelection === '1')
        || (imageOfPlayerSelection === '3' && imageOfAiSelection === '2')){
          this.setState({previousWinner: this.state.previousWinner.concat('player')})
        } else {
          this.setState({previousWinner: this.state.previousWinner.concat('tie')})
      }
    } else {
      console.log('What are you doing in the console log, checking for weird messages? Go and play the game, see if you can beat the Machine')
    }
    if(prevState.previousWinner.length < this.state.previousWinner.length){  
      if(this.state.previousWinner[this.state.previousWinner.length - 1] === 'player'){
        this.setState({playerTotal: this.state.playerTotal + 1})
      } else if (this.state.previousWinner[this.state.previousWinner.length - 1] === 'machine'){
        this.setState({aiTotal: this.state.aiTotal + 1})
      } else {
        this.setState({drawsTotal: this.state.drawsTotal + 1})
      }
    }
  }

  resetSelections(){
    this.setState({
      imageOfPlayerSelection: 'default',
      imageOfAiSelection: 'default',
      roundsPlayed: 0,
      playerSelection: [],
      previousWinner: [],
      playerTotal: 0,
      drawsTotal: 0,
      aiTotal: 0
    })
  }

  handleClick = (event) => {
    this.changeHumanImage(event);
    this.updateRound();
    this.updatePlayerSelection(event);
    this.AiMovement();
  }

  handleResetClick = () => {
    this.resetSelections();
  }

  render() {
    const imageHuman = this.state.imageOfPlayerSelection;
    const imageAi = this.state.imageOfAiSelection;
    const lastWinner = this.state.previousWinner[this.state.previousWinner.length - 1]
    const firstRound = this.state.roundsPlayed;
    return (
      <div className=".aspect-ratio--16x9 font">
        <Navigation />
        <Score 
          rounds={this.state.roundsPlayed} 
          winner={this.state.previousWinner} 
          draws={this.state.drawsTotal} 
          player={this.state.playerTotal} 
          ai={this.state.aiTotal}
        />
        <div className="containerImage">
          <SelectionHuman className="playerImage" src={imageSelection[imageHuman]} firstRound={firstRound}/>
          <Recent className="recent" rounds={lastWinner} firstRound={firstRound}/>
          <SelectionAI className="aiImage" src={imageSelection[imageAi]} firstRound={firstRound}/>
        </div>
        <div className="containerBtn">
          <Picks className="picks" onClick={this.handleClick}/>
          <Reset className="reset" onClick={this.handleResetClick}/>
        </div>
      </div>
    );
  }
}

export default App;
