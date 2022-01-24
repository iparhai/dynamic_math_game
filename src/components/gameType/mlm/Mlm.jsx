import React, { useEffect } from 'react'
import Animals from './Animals'
import Building from './Building'
import Mountain from './Mountain'
import truck from './images/truck-01.png'
import car from './images/car-01.png'
import yelowCar from './images/yelowCar-01.png'
import greyCar from './images/greyCar-01.png'
import orangeTruck from './images/orangeTruck-01.png'
import firecar from './images/firecar-01.png'
import policeCar from './images/policeCar-01.png'

import './Mlm.css'

export default function Mlm({handleAnswer}) {
    // const style = {
    //     mountains: {
    //         zIndex: 1
    //     },
    //     buildings: {
    //         zIndex: 2

    //     },
    //     roadAndCars: {
    //         zIndex: 3

    //     }
    // }
    const [style, setStyle] = React.useState({
        opacity: 1
    })
    const handleClick = () => {

        if (style.opacity == 0.3) {
            setStyle({
                opacity: 1
            })
        } else {
            setStyle({
                opacity: 0.3
            })
        }
    }
    return (
        <div className="main" >

            <div class="holder1" style={style}>
                <Building  handleAnswer={handleAnswer} />
                <div class="carHolder">
                    <img className="car1" src={truck} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                    <img className="car2" src={car} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                    <img class="car3" src={yelowCar} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                </div>
            </div>
            <div className="holder2" style={style}>
                <Mountain handleAnswer={handleAnswer} />
                <div class="SecondcarHolder">
                    <img class="car4" src={greyCar} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                    <img class="car5" src={orangeTruck} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                    <img class="car6" src={firecar} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                </div>
            </div>
            <div className="holder3" style={style}>
                <Animals  handleAnswer={handleAnswer} />
                <div class="thirdCarHolder">
                    <img class="car7" src={policeCar} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                    <img class="car8" src={firecar} alt="" onClick={(e) => {
                        handleAnswer(e.target.id)
                    }} />
                </div>
            </div>

        </div>
    )
}
