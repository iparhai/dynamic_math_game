import React from 'react'
import './Mlm.css'
import buildingTall from './images/buildingTall-01.png'
import buildingshort from './images/buildingshort-01.png'
import buildingshort2 from './images/buildingshort2-01.png'
// import buildingtooshort from './images/buildingtooshort-01.png'
import buildingTall2 from './images/buildingTall2-01.png'
export default function Building({ handleAnswer }) {
    const b1 = React.useRef()
    const b2 = React.useRef()
    const b3 = React.useRef()
    const b4 = React.useRef()
    return (
        <div class="imgHolder">
            <img ref={b1} src={buildingshort} id="shorter_taller" alt="" onClick={(e) => handleAnswer(e.target.id)} />
            <img ref={b2} src={buildingshort2} id="shortest_tall" alt="" onClick={(e) => handleAnswer(e.target.id)} />
            <img ref={b3} src={buildingTall} id="short_tallest" alt="" onClick={(e) => handleAnswer(e.target.id)} />
            <img ref={b4} src={buildingTall2} id="shorter_taller" alt="" onClick={(e) => handleAnswer(e.target.id)} />
        </div>
    )
}
