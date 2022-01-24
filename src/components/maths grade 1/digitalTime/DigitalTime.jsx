import React, { useEffect } from 'react'
import Time from '../../gameType/time/Time'
import problemGenerator from './problemGenerator';
import getAsset from '../../../utils/getAsset';
import './digitalTime.css'
export default function DigitalTime(props) {
    const [hour, setHour] = React.useState();
    const [minute, setMinute] = React.useState();
    const [question, setQuestion] = React.useState();
    const [hourCount, setHourCount] = React.useState("00")
    const [minCount, setMinCount] = React.useState("00")
    const [attemptedAnswer, setAttemptedAnswer] = React.useState()
    const [ifAm, setIfAm] = React.useState(true)
    const hourImage = getAsset.getObjectByProperty("clock_hour")
    const minImage = getAsset.getObjectByProperty("clock_min")
    const amImage = getAsset.getObjectByProperty("am")
    const pmImage = getAsset.getObjectByProperty("pm")
    useEffect(() => {
        const newProblemSet = problemGenerator.generateTimeProblem();
        setHour(newProblemSet.hour)
        setMinute(newProblemSet.minute)
        setQuestion(newProblemSet.question)

    }, [])
    return (
        <div className="fade">
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {question}
                </h5>
            </div>
            {/* <Time correctAnswer={{ hour: hour, minute: minute }} attemptedAnswer={(value) => {
                setAttemptedAnswer({
                    attemptedAnswer: value
                })
            }} submit={(correct, attemptedAnswer) => {
                // sessionData.setData(this.state.hour + "!" + this.state.minute, this.state.wordProblem, attemptedAnswer, this.state.hour + ':' + this.state.minute)
                if (correct) {
                    props.onCorrectAnswer()
                }
                else {
                    props.onWrongAnswer()
                }
            }} /> */}
            <div style={{ display: 'flex', transitionDuration: "0.6s" }}>
                <div className="container" onClick={() => {
                    var tempHour = parseInt(hourCount)
                    if (tempHour < 12)
                        tempHour = (tempHour + 1) + ""
                    if (tempHour < 10)
                        tempHour = "0" + tempHour
                    setHourCount(tempHour)
                }}>
                    <img src={hourImage} className="clock" />
                    <div className="center font" style={{ "pointer-events": "none" }} >
                        {hourCount}
                    </div>
                </div>
                <div style={{ fontSize: "10em", marginTop: "44vh" }}><strong>:</strong></div>

                <div className="container" onClick={() => {
                    var tempMin = parseInt(minCount)
                    if (tempMin < 60)
                        tempMin = (tempMin + 1) + ""
                    if (tempMin < 10)
                        tempMin = "0" + tempMin
                    setMinCount(tempMin)
                }}>
                    <img src={minImage} className="clock" />
                    <div className="center font" style={{ "pointer-events": "none" }}>
                        {minCount}
                    </div>
                </div>
                <div className="container">
                    <img src={ifAm ? amImage : pmImage} className="clock" onClick={() => {
                        setIfAm(!ifAm)
                    }} />

                </div >

            </div>
        </div>
    )
}
