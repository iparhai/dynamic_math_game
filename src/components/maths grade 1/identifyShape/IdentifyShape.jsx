import React from 'react'
import problemGenerator from './problemGenerator'
import Randomimages from './Randomimages'

export default function IdentifyShape(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const handleAnswer = (name) => {
        if (problem.shape.toLocaleLowerCase() == name.toLocaleLowerCase()) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    return (
        <div className="fade">

            <div className="thought " style={{ color: "white" }}>
                {problem.question}
            </div>
            <div>
                <Randomimages handleAnswer={handleAnswer} />
            </div>
        </div>
    )
}
