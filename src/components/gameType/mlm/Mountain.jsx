import React from 'react'
import mount from './images/mountain01-01.png'
import mount2 from './images/mountain02-01.png'
import mount3 from './images/mountain03-01.png'

import './Mlm.css'


export default function Mountain({ handleAnswer }) {
    return (
        <div className="mountainHolder">
            <img className="mount1" id="high" src={mount} alt="" onClick={(e) => {
                handleAnswer(e.target.id)
            }} />
            <img class="mount2" id="highest" src={mount2} alt="" onClick={(e) => {
                handleAnswer(e.target.id)
            }} />
            <img class="mount3" id="higher" src={mount3} alt="" onClick={(e) => {
                handleAnswer(e.target.id)
            }} />
        </div>
    )
}
{/* <!-- <img class="mini" src="images/miniTruct-01.png" alt="" />
                        <img class="car2" src="images/taxi-01.png" alt=""> -->
                        </div> */}