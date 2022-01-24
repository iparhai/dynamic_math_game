import React, { useEffect } from 'react'
import getAsset from '../../../utils/getAsset'
import Measurements from '../../gameType/measurements/measurements'
import problemGenerator from './problemGenerator'

export default function LLL(props) {
    const [question, setQuestion] = React.useState(null)
    const [objects, setObjects] = React.useState(null)
    useEffect(() => {
        var temp = []
        temp.push(getAsset.getObjectByProperty("long"))
        temp.push(getAsset.getObjectByProperty("longer"))
        temp.push(getAsset.getObjectByProperty("longest"))
        setObjects(temp)
        setQuestion(problemGenerator.generate())
    }, [])
    const onClick = (obj) => {
        if (obj.includes(question)) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    return (
        <div className="fade">
            {objects && question && <Measurements handleClick={(e) => onClick(e)} objects={objects} problem={question} />}
        </div>
    )
}
