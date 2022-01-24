import React, { useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import getAsset from '../../../utils/getAsset';
import problemGenerator from './problemGenerator';
import './bos.css'
import Tap from '../../gameType/tap/tap';
export default function Bos(props) {
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
    const [problem, setProblem] = useState(problemGenerator.generateProblem(50))
    const [ans, setAns] = useState(null)
    const [options, setOptions] = useState(null)
    const [pad, setPad] = useState(null)
    const [tappedBoxId, setTappedBoxId] = useState(null)
    const object = getAsset.getObjectByProperty("writeable")

    useEffect(() => {
        if (problem.question == null || problem.number == null) return
        setAns(problemGenerator.getAnswer(problem.type, problem.number))
    }, [problem])

    useEffect(() => {
        if (ans == null) return
        console.log(ans)
        setOptions(problemGenerator.getOption(problem.type, ans))
    }, [ans])
    return (
        <div className="fade">
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            {/* {ans} */}
            <Tap handleClick={(option) => {
                if (option == ans) {
                    props.onCorrectAnswer()
                }
                else {
                    props.onWrongAnswer()
                }
            }} object={object} options={options} />
        </div >
    )
}
