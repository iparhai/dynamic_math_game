import React from 'react'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import problemSolver from './problemSolver';
import getURLParams from '../../../utils/getURLParams';
import MultiDrag from '../../gameType/dragBox/multipleDrag';
import getAsset from '../../../utils/getAsset';
export default function Number_10_s_and_1_s(props) {
    const [problem, setproblem] = useState(problemGenerator.generateNumberProblem())
    const [answer, setanswer] = useState()
    const [object, setObject] = useState()
    const [ifCorrect, setIfCorrect] = useState(null)
    const [objectList, setObjectList] = useState(getAsset.getObjectListByProperty("counting"))
    const [object_10, setObject_10] = useState()
    const [object_1, setObject_1] = useState()
    const getRandomObject = (type) => {
        const fetched = objectList.filter((item) => {
            if (item.includes(type)) {
                return true
            }
            return false
        })
        return fetched[parseInt((Math.random() * (fetched.length)))]
    }
    useEffect(() => {
        // setproblem(problemGenerator.generateCountingProblem())
        setObject_1(getRandomObject("1_counting"))
        setObject_10(getRandomObject("10_counting"))

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
            <div style={{ display: "flex" }}>
                {[...Array(parseInt(problem.number))].map((e, i) => {
                    return <img key={i} src={object} className="questionImage" draggable="false" />
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
                <MultiDrag handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} obj_1={object_1} obj_10={object_10} />
            </div>
        </div>
    )
}
