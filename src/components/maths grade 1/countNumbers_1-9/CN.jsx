import React from 'react'
import Drop from '../../gameType/dragBox/drag'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import problemSolver from './problemSolver';
import getURLParams from '../../../utils/getURLParams';
import './CN.css'
export default function CountingNumbers(props) {
    const [problem, setproblem] = useState(problemGenerator.generateCountingProblem())
    const [answer, setanswer] = useState()
    const [object, setObject] = useState()
    const [ifCorrect, setIfCorrect] = useState(null)
    const getRandomObject = (objectList) => {

        objectList = objectList.filter((item) => {
            if (item.includes("drag") && !item.includes("10_drag")) {
                return true
            }
            return false
        })
        return objectList[parseInt((Math.random() * (objectList.length)))]
    }
    useEffect(() => {
        // setproblem(problemGenerator.generateCountingProblem())
        setObject(getRandomObject(props.objectList))
        setanswer(0)
    }, [])
    const evaluateProblem = () => {
        setIfCorrect(problemSolver.solveCountingProblem(problem.number, answer))
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


    const placeObjects = () => {

        return (
            <div style={{ display: "flex", marginTop: "20vh" }}>
                {[...Array(parseInt(problem.number))].map((e, i) => {
                    return <img key={i} src={object} className="placeObjects" draggable="false" />
                })}
            </div>
        )
    }
    return (

        <div className="fade">
            <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>
            <div className="centered">
                {getURLParams.dif == 'i' && placeObjects()}
            </div>
            <div style={{ marginTop: "55vh" }}>
                <Drop handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} img={object} />
            </div>
        </div>
    )
}
