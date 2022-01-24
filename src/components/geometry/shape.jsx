import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import triangle from '../../assets/objects/triangle'
import circle from '../../assets/objects/circle'
import rect from '../../assets/objects/rect'
import square from '../../assets/objects/square'
export default function Shape(props) {
    const [problem, setproblem] = useState()
    const [answer, setanswer] = useState()
    const [cAnswer, setcAnswer] = useState()
    const [object, setObject] = useState()
    const [ifCorrect, setIfCorrect] = useState(null)
    const [shapes, setShapes] = useState([
        { obj: triangle, name: "triangle" }, { obj: circle, name: "circle" },
        { obj: rect, name: "rect" }, { obj: square, name: "square" }])
    const getRandomObject = (objectList) => {
        return objectList[parseInt((Math.random() * (objectList.length)))]
    }
    const generateProblem = () => {
        const target = getRandomObject(shapes)
        const tShape = target.obj
        const tName = target.name
        setcAnswer(target)
        const question = "Identify the " + tName + " and click on it"
        return { question, tShape, tName }
    }
    useEffect(() => {
        setproblem(generateProblem())
    }, [])
    const evaluateProblem = () => {
        if (problem.tName == answer) {
            setIfCorrect(true)
        }
        else {
            setIfCorrect(false)
        }
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
            <h1 style={{ fontSize: "3.5em" }}> {problem.question} </h1>
            {/* <Drop handleAnswer={() => evaluateProblem()} answer={answer} incCount={(number) => { setanswer(answer + number) }} decCount={(number) => { setanswer(answer - number) }} count={answer} img={object} /> */}
        </div>
    )
}
