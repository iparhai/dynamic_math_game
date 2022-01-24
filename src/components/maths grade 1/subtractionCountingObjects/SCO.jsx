import React from 'react'
import Drop from '../../gameType/dragBox/drag'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import problemSolver from './problemSolver';
export default function SCO(props) {
    const [problem, setproblem] = useState()
    const [answer, setanswer] = useState()
    const [object, setObject] = useState()
    const [ifCorrect, setIfCorrect] = useState(null)
    const getRandomObject = (objectList) => {
        objectList = objectList.filter((item) => {
            if (item.includes("drag")) {
                return true
            }
            return false
        })
        return objectList[parseInt((Math.random() * (objectList.length)))]
    }
    useEffect(() => {
        setproblem(problemGenerator.generateSubtractionProblem(""))
        setObject(getRandomObject(props.objectList))
        setanswer(0)
    }, [])
    const evaluateProblem = () => {
        setIfCorrect(problemSolver.solve(problem, answer))
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
            {problem && <div>
                <h1 style={{ fontSize: "3.5em" }}> {problem.problem} </h1>
                <Drop handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} img={object} />
            </div>}
        </div>
    )
}
