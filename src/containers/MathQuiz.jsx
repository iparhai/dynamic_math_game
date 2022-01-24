import React from 'react';
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";
import Timmer from '../components/Timmer';
import Lifes from '../components/Lifes'
import Points from '../components/Points'
import "./MathQuiz.css"
import TableScore from '../components/TableScore';
import Loader from '../components/loader';
// import Hints from '../components/Hints';


class MathQuiz extends React.Component {
  state = {
    isBeginningDone: false,
    isLoadingDone: false,
    lastPoints: 0,
    sound: new Audio(this.props.backgroundMusic),
    mute: false,
  };

  retryGame = () => {
    this.setState({ isBeginningDone: false })
    this.props.onRetryGame();
  }

  completeBeginning = () => {
    this.setState({ isBeginningDone: true });
  };
  completeLoading = () => {
    this.setState({ isLoadingDone: true });
  }

  handleSoundClick = () => {
    if (!this.state.sound.paused) {
      this.state.sound.pause()
      this.setState({
        mute: true
      })
    }
    else if (this.state.sound.paused) {
      this.state.sound.play()
      this.setState({
        mute: false
      })
    }
  }
  pauseSound = () => {

  }


  render() {
    return !this.props.isFinished ? (
      <div>
        {!this.state.isLoadingDone ? <Loader isComplete={this.completeLoading} /> : !this.state.isBeginningDone ? (
          <Beginning isComplete={this.completeBeginning} soundEffect={this.props.soundEffect} />
        ) : (
          <div className="noselect ">
            {/* <img src={this.state.images.map()} alt="learning" /> */}
            <div className="App-header-bar">
              <span onClick={this.handleSoundClick}>
                {this.state.mute ? <i className="fas fa-volume-mute" /> : <i className="fa fa-volume-up " />}
              </span>
              <Timmer {...this.props} />
              <Lifes {...this.props} />
              <Points {...this.props} />
              {/* 
              <span onClick={this.props.handleLanguageSwitch}>
                {this.props.isUrdu ? <i class="fa fa-language " aria-hidden="true" style={{color : "black"}}>اردو</i> : <i class="fa fa-language" aria-hidden="true" style={{color : "black"}}>English</i>}
              </span> */}
            </div>
            <div>
              <Quiz {...this.props} objectList={this.props.objectList} soundEffect={this.props.soundEffect} />
            </div>
          </div>
        )}
      </div>
    ) : (

      <Done {...this.props} retryGame={this.retryGame} isUrdu={this.props.isUrdu} >
        <TableScore {...this.props} />
      </ Done>
    );
  }
}

export default MathQuiz;