import React from 'react'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import FilledBox from '../../gameType/dragBox/filledBox'

import problemSolver from './problemSolver';
export default function CO(props) {
    const [problem, setproblem] = useState(null)
    const [answer, setanswer] = useState(10)
    const [object, setObject] = useState()
    const [ifCorrect, setIfCorrect] = useState(null)
    const getRandomObject = (objectList) => {
        return objectList[parseInt((Math.random() * (objectList.length)))]
    }
    useEffect(() => {
        setproblem(problemGenerator.generateCountingProblem())
        setObject(getRandomObject(props.objectList))
        setanswer(0)

    }, [])
    const evaluateProblem = () => {
        setIfCorrect(problemSolver.solve(problem.number, answer))
    }
    useEffect(() => {
        if (ifCorrect == null) return
        if (ifCorrect == false) {
            props.onWrongAnswer()
        }
        else {
            props.onCorrectAnswer()
        }
    }, [ifCorrect])
    return (
        <div>
            {problem && <h1 style={{ fontSize: "1.5em" }}> {problem.question} </h1>}
            {object && <FilledBox handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} img={object} />
            }        </div>
    )
}
