import React from 'react'
import { useState } from 'react';
import problemGenerator from './problemGenerator';
import { useEffect } from 'react';
import problemSolver from './problemSolver';
import getURLParams from '../../../utils/getURLParams';
import './MNWN.css'
import Match from '../../gameType/match/match';
import getAsset from '../../../utils/getAsset';
import { object } from 'prop-types';
export default function MatchingNumbersWithName(props) {

    const [numberOptions, setNumberOptions] = React.useState(null)
    const [nameOptions, setNameOptions] = React.useState(null)
    const [ans, setAnswer] = React.useState(null)
    const [problem, setProblem] = React.useState(null)
    const [numberTap, setNumberTap] = React.useState(false)
    const [nameTap, setNameTap] = React.useState(false)
    const [board, setBoard] = React.useState(null)

    useEffect(() => {
        setProblem(problemGenerator.generateProblem())
        setNumberTap(true)
        setBoard(getBoard("board"))
    }, [])
    useEffect(() => {
        if (problem == null) return
        const options = problemGenerator.generateOptions(problem, 4)
        setNameOptions(options.names.sort(() => Math.random() > 0.5))
        setNumberOptions(options.numbers)
    }, [problem])
    useEffect(() => {
        if (ans == null) return
        if (ans.name == null || ans.number == null) {
            return
        }
        console.log(ans)
        setTimeout(() => {
            if (problemSolver.solveProblem(ans, problem)) {
                return props.onCorrectAnswer()
            }
            return props.onWrongAnswer()
        }, 500)
    }, [ans])

    const getBoard = (property) => {
        const objects = getAsset.getObjectListByProperty(property)
        console.log(objects.length)
        console.log(parseInt(Math.random() * objects.length))
        return objects[parseInt(Math.random() * objects.length)]
    }
    return (
        <div className="fade">
            {/* {problem && <div className="thought" style={{ color: "white" }}>
                <h5>
                    Can You Match {problem.number} with its name ?
                </h5> 
            </div>} */}
            {numberOptions && nameOptions && <Match listA={numberOptions} listB={nameOptions} problem={problem} ans={ans} setAnswer={setAnswer} object={board} combination={"01"} />}
        </div>
    )
}
