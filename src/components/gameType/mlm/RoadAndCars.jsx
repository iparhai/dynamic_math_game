import React from 'react'
import './Mlm.css'
import truck from './images/truck-01.png'
import car from './images/car-01.png'
import yelowCar from './images/yelowCar-01.png'

export default function RoadAndCars() {
    return (
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
    )
}
