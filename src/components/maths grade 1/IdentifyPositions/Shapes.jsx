
import React, { useEffect } from 'react'
import circle from '../identifyShape/Shapes/circle-01.png';
import square from '../identifyShape/Shapes/square-01.png';
import triangle from '../identifyShape/Shapes/triangle-01.png';
import polygon from '../identifyShape/Shapes/polygon-01.png';
import oval from '../identifyShape/Shapes/oval-01.png';
import rectangle from '../identifyShape/Shapes/rectangle-01.png';
import getAsset from '../../../utils/getAsset';

var posxy = [
    {
        id: 'before_far',
        top: '10%',
        left: '5%'
    },
    {
        id: 'after_far',
        top: '10%',
        right: '5%'
    },
    {
        id: 'before_far',
        bottom: '5%',
        left: '5%'
    },
    {
        id: 'after_far',
        bottom: '5%',
        right: '10%'
    },
    {
        id: 'above_over',
        top: '33%'
    },
    {
        id: 'before_near',
        top: '50%',
        left: '25%'
    },
    {
        id: 'under_below',
        bottom: '20%',
        left: '45%'
    },
    {
        id: 'after_far',
        bottom: '20%',
        right: '5%'
    },
    {
        id: 'before_far',
        top: '40%',
        left: '5%'
    },
    {
        id: 'after_far',
        top: '30%',
        right: '10%'
    },
    {
        id: 'after_near',
        top: '50%',
        right: '20%'
    },
    {
        id: 'above_over_near',
        top: '35%',
        left: '40%'
    },
    {
        id: 'after_near',
        top: '15%',
        right: '25%'
    },
    {
        id: 'before_near',
        bottom: '15%',
        left: '20%'
    },
    {
        id: 'before_near',
        top: '30%',
        left: '25%'
    }
];
posxy = posxy.sort(() => 0.5 - Math.random(0))


export default function Shapes({ handleAnswer }) {

    const table = getAsset.getObjectByProperty("table")
    const shapeStyle = {
        width: '5%',
        position: 'fixed',
        filter: 'opacity(50%)'
    }
    const tableStyle = {
        width: '35%',
        position: 'fixed',
        filter: 'opacity(100%)',
        top: "45%",
        left: "33%"
    }
    const imgDiv = {
        textAlign: 'center',
        width: '100%',
        height: '95vh'
    }
    const shapes = [circle, square, triangle, polygon, oval, rectangle]
    const transformOptions = ['rotate(-20deg)', 'rotate(20deg)', 'rotate(-10deg)', 'rotate(10deg)', 'rotate(-15deg)', 'rotate(15deg)']
    const [clicked, setClicked] = React.useState(null)
    const [render, setRender] = React.useState([])
    useEffect(() => {
        var temp = []
        for (var i = 0; i < 15; i++) {
            temp.push({
                shape: shapes[parseInt(Math.random() * shapes.length)],
                transformation: transformOptions[parseInt(Math.random() * transformOptions.length)]
            })
        }
        setRender(temp)
        console.log(render)
    }, [])

    const check = (i, key) => {
        setClicked(i)
        window.setTimeout(() => {
            handleAnswer(key)
        }, 1000)
    }
    return (
        <div style={imgDiv}>
            <img src={table} style={{ ...tableStyle }} />
            {render.length > 0 && render.map((obj, idx) => {
                return (
                    <img src={obj.shape} id={idx}
                        style={{
                            ...shapeStyle,
                            ...posxy[idx],
                            transform: obj.transformation,
                            filter: idx == clicked ? "opacity(100%)" : "opacity(50%)"
                        }}
                        alt="" onClick={() => check(idx, posxy[idx].id)} />
                )
            })}
        </div>
    );
}
