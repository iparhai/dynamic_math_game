import React, { Component } from 'react';
import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from './redux/index'
import Start from './containers/Start';
import MathQuiz from './containers/MathQuiz';
import './App.css';
import getAsset from './utils/getAsset';
import problemGenerator from './components/additionCountingObjects/problemGenerator';
import Footer from './components/Footer';
import sessionData from './utils/sessionData';
import mlmBackground from './bgnow-01.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import problemSolver from './components/additionCountingObjects/problemSolver';
import Mlm from './components/gameType/mlm/Mlm';
import getURLParams from './utils/getURLParams';

const { background, objects, backgroundMusic, soundEffect } = getAsset.getRandomTheme()

class App extends Component {


  state = {
    // isUrdu: queryParams.get('isUrdu') ? queryParams.get('isUrdu') == true ?  true  : false : false
  }


  gameStart = () => {
    this.props.onStartGame();
  }
  handleURL() {
    // const query = new URLSearchParams(this.props.location.search);
    // const token = query.get('id')
    // const queryParams = new URLSearchParams(window.location.search);
    // const id = queryParams.get('id');

    // alert(id)
  }
  handleLanguageSwitch = () => {
    //this.setState({ isUrdu: !this.state.isUrdu })
  }
  render() {
    // const problem = problemGenerator.generateAdditionProblem("" , 3)
    // console.log("the problem is : "+ problem)
    // console.log(problemSolver.solveAdditionProblem(problem, 4))
    return (
      <div className="App"  >

        <header className="App-header">
          {getURLParams.gameName == "mlm" ? <img src={mlmBackground} id="bg" /> : <img src={background} id="bg" alt="" />}
          {/* <p className="newBG" style={{
            background: `url(${background})`,
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0px",
            left: "0px",
            zIndex: "-1",
            backgroundAttachment: "scroll",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
          }}> </p> */}
          {
            !this.props.isStarted ? (
              <Start startPressed={this.gameStart} soundEffect={soundEffect} />
            ) : (

              <MathQuiz {...this.props} gameStart={this.gameStart} soundEffect={soundEffect} backgroundMusic={backgroundMusic} objectList={objects} />
            )
          }
        </header>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
