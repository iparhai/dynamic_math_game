import React from 'react'
import problemGenerator from './problemGenerator'
import Shapes from './Shapes'

export default function IdentifyPositions(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const handleAnswer = (name) => {
        if (name.toLocaleLowerCase().includes(problem.position.toLocaleLowerCase())) {
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
                <Shapes handleAnswer={handleAnswer} />
            </div>
        </div>
    )
}
