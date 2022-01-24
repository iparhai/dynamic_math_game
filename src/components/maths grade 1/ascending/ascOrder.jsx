import React, { useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Draggable from '../../gameType/drag/draggable'
import problemGenerator from './problemGenerator'
import './ascending.css'
import getURLParams from '../../../utils/getURLParams'

export default function AscOrder(props) {
    const [problem, setProblem] = useState(problemGenerator.generateSequence(6))
    const question = "Arrange the following numbers into" + getURLParams.gameName == "ascorder" ? " ascending " : " increasing " + "order."

    const check = (arr) => {
        var currentValue = arr[0]
        for (var i = 0; i < arr.length; i++) {
            if (currentValue > arr[i]) {
                return false
            }
            currentValue = arr[i]
        }
        return true
    }
    const handleSubmit = () => {
        let ans = problem.map((obj) => {
            return (
                parseInt(obj.text)
            )
        })
        console.log(ans)
        if (check(ans)) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    return (
        <div>
            <div className="fade">
                <div className="thought " style={{ color: "white" }}>
                    {question}
                    {/* <ReactTypingEffect
                        text={question}
                        speed={70}
                        eraseSpeed={70}
                        eraseDelay={10000000}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h5>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        // if (i == 0) typingClick.play()
                                        // if (char == '?') {
                                        //     typingClick.pause()
                                        // }
                                        if (char == '.') {
                                            setModal(true)
                                        }
                                        return (
                                            <span
                                                key={key}
                                            >{char}</span>
                                        );
                                    })
                                    }
                                </h5>
                            );
                        }}
                    /> */}
                </div>
                <div>
                    <Draggable problemSequence={problem} handleSwap={(seq) => { setProblem(seq) }} />
                    <button className="App-link" style={{
                        background: "rgb(49 205 97)",
                        padding: "10px",
                        border: "1px solid #057897",
                        borderRadius: "0.6em",
                    }} onClick={handleSubmit}><i class="fa fa-paper-plane 3x" aria-hidden="true"></i></button></div>
            </div>
        </div>
    )
}
