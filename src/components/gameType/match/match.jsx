import React, { useEffect } from 'react'
import './match.css'
import WithName from './withName'
import WithNumber from './withNumber'
import WithObject from './withObject'
export default function Match({ listA, listB, setAnswer, object, combination, questionObject, problem }) {

    const [num, setNum] = React.useState(null)
    const [name, setName] = React.useState(null)

    useEffect(() => {
        setAnswer({ number: num, name: name })
    }, [num, name])

    const renderPair = (combination) => {
        if (combination[0] == '0' && combination[1] == '1') {
            return (
                <div style={{ display: "flex" }}>
                    <WithNumber list={listA} setNum={(e) => { setNum(e) }} />
                    <WithName list={listB} setName={(e) => { setName(e) }} />
                </div>
            )
        }
        else if (combination[0] == '0' && combination[1] == '2') {
            return (
                <div style={{ display: "flex" }}>
                    <WithNumber list={listA} setNum={(e) => { setNum(e) }} />
                    <WithObject list={listB} setNum={(e) => { setName(e) }} obj={questionObject} />
                </div>
            )
        }
    }
    return (
        <div>

            <div className="boardContainer" style={{ display: "flex" }}>
                <img src={object} className="board" />
                <div className="centeredLists" >
                    <div className="headingText">
                        Match <strong className="wobble">{problem.number} </strong>
                    </div>
                    <div >
                        {renderPair(combination)}
                    </div>
                </div>
            </div>
        </div>
    )
}
