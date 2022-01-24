import React, { useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import problemGenerator from './problemGenerator'
import './cao.css'
import Draggable from '../../gameType/drag/draggable'

export default function Cao(props) {
    const [problem, setProblem] = useState(problemGenerator.generateSequence())
    const question = "Compare Numbers and order them"

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
                <div className="thought" style={{ color: "white" }}>
                    <h5 >
                        {question}
                    </h5>
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
