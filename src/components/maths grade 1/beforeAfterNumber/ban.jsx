import React, { useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import getAsset from '../../../utils/getAsset';
import problemGenerator from './problemGenerator';
import './ban.css'
import Tap from '../../gameType/tap/tap';
export default function Ban(props) {
    const style = {
        border: '1px dashed gray',
        padding: '1rem 1.5rem',
        marginBottom: '.5rem',
        marginRight: ".25rem",
        borderRadius: "50%",
        backgroundColor: 'black',
        transitionDuration: "0.5s",
        cursor: 'move',
    };
    const [question, setQuestion] = useState(problemGenerator.generateProblem())
    const [ans, setAns] = useState(null)
    const [options, setOptions] = useState(null)
    const [pad, setPad] = useState(null)
    const [tappedBoxId, setTappedBoxId] = useState(null)
    const object = getAsset.getObjectByProperty("writeable")
    useEffect(() => {
        console.log(question)
        // setQuestion(problemGenerator.generateProblem())
    }, [])
    useEffect(() => {
        if (question.problem == null || question.number == null) return
        setAns(problemGenerator.getAnswer(question.problem, question.number))
    }, [question])

    useEffect(() => {
        if (ans == null) return
        console.log(ans)
        setOptions(problemGenerator.getOption(ans))
    }, [ans])
    return (
        <div className="fade">
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {question.problem}
                </h5>
            </div>
            <Tap handleClick={(option) => {
                if (option == ans) {
                    props.onCorrectAnswer()
                }
                else {
                    props.onWrongAnswer()
                }
            }} object={object} options={options} />
            {/* {ans} */}
        </div >
    )
}
