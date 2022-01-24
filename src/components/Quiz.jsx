import React from "react";
import AnswerModal from "./AnswerModal";
import { MathHelper } from "../utils";
import './Quiz.css'
import getURLParams from "../utils/getURLParams";
import urlParams from '../utils/getURLParams'
import TraceNum from './maths grade 1/tracingNumbers/TraceNum'
import AscOrder from "./maths grade 1/ascending/ascOrder";
import DscOrder from "./maths grade 1/descending/dscOrder";
import Ban from "./maths grade 1/beforeAfterNumber/ban";
import Bos from "./maths grade 1/biggerOrSmaller/bos";
import Cb from "./maths grade 1/countBackwards/cb";
import CountingNumbers from "./maths grade 1/countNumbers_1-9/CN";
import CountingNumbers_10_s from "./maths grade 1/CountingNumbers/CN";
import pG_10_19 from "./maths grade 1/countNumbers_10-19/pG_10_19";
import pG_20_29 from "./maths grade 1/countNumbers_20-29/pG_20_29";
import pG_30_39 from "./maths grade 1/countNumbers_30-39/pG_30_39";
import pG_40_49 from "./maths grade 1/countNumbers_40-49/pG_40_49";
import pG_50_59 from "./maths grade 1/countNumbers_50-59/pG_50_59";
import pG_60_69 from "./maths grade 1/countNumbers_60-69/pG_60_69";
import pG_70_79 from "./maths grade 1/countNumbers_70-79/pG_70_79";
import pG_80_89 from "./maths grade 1/countNumbers_80-89/pG_80_89";
import pG_90_99 from "./maths grade 1/countNumbers_90-99/pG_90_99";

import MatchingNumbersWithName from "./maths grade 1/matchingNumbersWithName/MNWN";
import Cao from "./maths grade 1/compareAndOrder/cao";
import CO from "./maths grade 1/countObjects/CO";
import Number_10_s_and_1_s from "./maths grade 1/10's_1's/CN";
import MatchingNumbersWithObjects from "./maths grade 1/matchingNumbersWithObjects/MNWO";
import ACO from "./maths grade 1/additionCountingObjects/ACO";
import SCO from "./maths grade 1/subtractionCountingObjects/SCO";
import AnalogTime from "./maths grade 1/AnalogTime/AnalogTime";
import LLL from "./maths grade 1/LongLongerLongest/LLL";
import Mlm from "./gameType/mlm/Mlm";
import Measurements from "./maths grade 1/measurements/measurements";
import IdentifyShape from "./maths grade 1/identifyShape/IdentifyShape";
import IdentifyPositions from "./maths grade 1/IdentifyPositions/IdentifyPositions";
import DigitalTime from "./maths grade 1/digitalTime/DigitalTime";
// import Shape from "./geometry/shape";
class Quiz extends React.Component {
  _isMounted = false;
  _secondsIntervalRef;
  state = {
    modal: "",
    modalShowing: false,
    streaks: 0,
    units: 0
  };

  earnLife = () => {
    this.props.onEarnLife();
    this.showModal("success", "STREAK!! You won a life ♥");
    this.setState({
      streaks: 0,
      units: this.state.units < 3 ? this.state.units + 1 : 2
    });
  };

  correctAnswer = () => {
    if (this.state.streaks > 2) {
      this.earnLife();
    } else {
      this.showModal("success");
    }

    this._isMounted && this.props.onCorretAnswer();
    this.setState(state => {
      return {
        streaks: state.streaks + 1
      };
    });
    setTimeout(() => {

      this._isMounted &&
        this.setState({
          modalShowing: false,

        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);

  };
  componentDidUpdate() {
    if (this.state.totalProblems > getURLParams.limit) {
      this.props.onEndGame()
    }
  }
  componentDidMount() {
    this._isMounted = true;

    // this.answerInput.focus();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lifes < 1) {
      this.props.onEndGame(this.state.points);
      return false;
    }
    return nextProps.lifes > -1;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  wrongAnswer = () => {
    this._isMounted && this.props.onWrongAnswer();
    this.setState({
      streaks: 0
    });
    this.showModal("error");
    setTimeout(() => {
      this._isMounted &&
        this.setState({
          modalShowing: false,
        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);
  };
  showModal = (type, text) => {
    this.setState({
      modal: <AnswerModal type={type} text={text} soundEffect={this.props.soundEffect} />,
      modalShowing: true
    });
  };
  renderGrade1Games = (gameName) => {
    if (gameName.toLocaleLowerCase() == "ascorder") {
      return <AscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "incorder") {
      return <AscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "dscorder") {
      return <DscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "decorder") {
      return <DscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "ban") {
      return <Ban onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cb") {
      return <Cb onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} /> // can
    }
    else if (gameName.toLocaleLowerCase() == "bos") {
      return <Bos onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cao") {
      return <Cao onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_1_9") {
      return <CountingNumbers objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_10_19") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_10_19} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_20_29") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_20_29} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_30_39") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_30_39} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_40_49") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_40_49} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_50_59") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_50_59} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_60_69") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_60_69} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_70_79") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_70_79} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_80_89") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_80_89} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_90_99") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_90_99} />
    }
    else if (gameName.toLocaleLowerCase() == "n_10_1_s") {
      return <Number_10_s_and_1_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "mnwn") {
      return <MatchingNumbersWithName objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "mnwo") {
      return <MatchingNumbersWithObjects objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "co") {
      return <CO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "analogtime") {
      return <AnalogTime objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "aco") {
      return <ACO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "sco") {
      return <SCO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "lll") {
      return <LLL onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "mlm") {
      return <Measurements onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "idsh") {
      return <IdentifyShape onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "shpos") {
      return <IdentifyPositions onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "digiclock") {
      return <DigitalTime  onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
  }

  renderGame = (grade, gameName) => {
    console.log(grade, gameName)
    if (grade == 1 || grade == "1") {
      return this.renderGrade1Games(gameName)
    }
    else if (grade == 2 || grade == "2") {

    }
    else if (grade == 3 || grade == "3") {

    }
  }
  render() {
    return (
      <section className="show-up" style={{ width: "100%", height: "100vh" }}>
        {/* <Hints currentProblem={this.state.problem}/> */}
        <div >
          {this.state.modalShowing ? (
            this.state.modal
          ) : (
            <div>
              {this.renderGame(getURLParams.grade, getURLParams.gameName)}
              {/* <SCO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} /> */}
              {/* <Shape onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} /> */}
              {/* <TraceNum /> */}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Quiz;
