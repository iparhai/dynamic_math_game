import React from 'react'
import { useState } from 'react';
// import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import problemSolver from './problemSolver';
import getURLParams from '../../../utils/getURLParams';
import Drop from '../../gameType/dragBox/drag'
import getAsset from '../../../utils/getAsset';
import '../CN.css'
import MultiDrag from '../../gameType/dragBox/multipleDrag';
import './somewhat.css'
export default function CountingNumbers_10_s(props) {
    const [problem, setproblem] = useState(props.problemGenerator.generateCountingProblem())
    const [answer, setanswer] = useState()
    const [objectList, setObjectList] = useState(getAsset.getObjectListByProperty("counting"))
    const [object_10, setObject_10] = useState()
    const [object_1, setObject_1] = useState()
    const [object_5, setObject_5] = useState()

    const [ifCorrect, setIfCorrect] = useState(null)

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
        setObject_5(getRandomObject("5_counting"))
        setObject_10(getRandomObject("10_drag"))

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
    const display = (number, index) => {
        console.log(number)
        if (number < 5) {
            return [...Array(parseInt(number))].map((item, index) => {
                return (
                    <div>
                        <img key={index} src={object_1} className="logo-image " draggable="false" />
                    </div>
                )
            })
        }
        else if (number == 5) {
            return (
                <div>
                    <img key={index} src={object_5} className="logo-image" draggable="false" />
                </div>
            )
        }
        else {
            return (
                <div>
                    <img key={index} src={object_10} className="logo-image" draggable="false" />
                </div>
            )
        }
    }
    const placeObjects = () => {
        const array = []
        var tempNumber = problem.number
        while (tempNumber > 10) {
            array.push(10)
            tempNumber = tempNumber - 10
        }
        if (tempNumber > 5) {
            array.push(5)
            tempNumber = tempNumber - 5
        }
        array.push(tempNumber)
        console.log(array, problem.number)
        return (
            <div className="partners" style={{ display: "flex", maxWidth: "60vw" }}>
                {array.map((e, i) => display(e, i))}
            </div>
        )
    }
    return (
        <div className="fade">
            {getURLParams.dif == 'b' && <div className="thought" style={{ color: "white" }}>
                <h5 >
                    {problem.question}
                </h5>
            </div>}
            <div className="centered">
                {getURLParams.dif == 'i' && placeObjects()}
            </div>
            <div style={{ marginTop: "55vh" }}>
                <MultiDrag handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} obj_1={object_1} obj_10={object_10} />
            </div>
        </div>
    )
}
