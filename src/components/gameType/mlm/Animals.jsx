import React from 'react'
import ostrich from './images/ostrich-01.png'
import cat from './images/cat-01.png'
import Dragon from './images/DragonBAra-01.png'

import './Mlm.css'

export default function Animals({handleAnswer}) {
    return (
        <div className="animalholder">
            <img className="" id="heaviest_light_longest" src={Dragon} alt="" onClick={(e) => {
                handleAnswer(e.target.id)
            }} />
            <img className="" id="heavier_lighter_longer" src={ostrich} alt="" onClick={(e) => {
                handleAnswer(e.target.id)
            }} />
            <img className="" id="heavy_lightest_long" src={cat} alt="" onClick={(e) => {
                handleAnswer(e.target.id)
            }} />
        </div>
    )
}
