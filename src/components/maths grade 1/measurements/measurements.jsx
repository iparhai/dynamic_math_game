import React from 'react'
import Mlm from '../../gameType/mlm/Mlm'
import problemGenerator from './problemGenerator'

export default function Measurements(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate())
    const handleAnswer = (quesKey) => {
        if (quesKey.includes(problem.quesKey.toLocaleLowerCase())) {
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
                <Mlm handleAnswer={handleAnswer} />
            </div>
        </div>
    )
}
