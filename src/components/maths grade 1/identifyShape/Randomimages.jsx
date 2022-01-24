//IMPORTING IMAGES
import React from 'react'
import circle from './Shapes/circle-01.png';
import square from './Shapes/square-01.png';
import triangle from './Shapes/triangle-01.png';
import polygon from './Shapes/polygon-01.png';
import oval from './Shapes/oval-01.png';
import rectangle from './Shapes/rectangle-01.png';



// const styleImg = {
//     width: '15%',
//     position: 'fixed',
//     border: '1px solid red',
//     top: '10%',
//     left: '5%',
//     transform: 'rotate(-20deg)',
//     filter: 'opacity(25%)'
// }
// const styleImg2 = {
//     width: '15%',
//     position: 'fixed',
//     top: '10%',
//     right: '5%',
//     transform: 'rotate(20deg)',
//     filter: 'opacity(25%)',
//     border: '1px solid red'
// }
// const styleImg3 = {
//     width: '15%',
//     position: 'fixed',
//     bottom: '5%',
//     left: '5%',
//     transform: 'rotate(-10deg)',
//     filter: 'opacity(25%)',
//     border: '1px solid red'
// }
// const styleImg4 = {
//     width: '15%',
//     position: 'fixed',
//     bottom: '5%',
//     right: '10%',
//     transform: 'rotate(10deg)',
//     filter: 'opacity(25%)',
//     border: '1px solid red'
// }
// const styleImg5 = {
//     width: '15%',
//     position: 'fixed',
//     top: '35%',
//     transform: 'rotate(-15deg)',
//     filter: 'opacity(25%)',
//     border: '1px solid red'
// }
// const styleImg6 = {
//     width: '15%',
//     position: 'fixed',
//     top: '55%',
//     left: '30%',
//     transform: 'rotate(15deg)',
//     filter: 'opacity(25%)',
//     border: '1px solid red'
// }



// var posi = [

// ]

// posi.sort(() => Math.random() - 0.5);




var posxy = [{
    top: '10%',
    left: '5%',
}, {
    top: '10%',
    right: '5%',
}, {
    bottom: '5%',
    left: '5%',
}, {
    bottom: '5%',
    right: '10%',
}, {
    top: '35%',
}, {
    top: '55%',
    left: '30%',
}]
posxy = posxy.sort(() => 0.5 - Math.random(0))


export default function Randomimages({ handleAnswer }) {
    const parentStyle = {
        width: '15%',
        position: 'fixed',
    }
    const imgDiv = {
        textAlign: 'center',
        width: '100%',
        height: '95vh'
    }
    const [posi, setPosi] = React.useState([
        {
            name: "circle",
            src: circle,
            style: {
                transform: 'rotate(-20deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "square",
            src: square,
            style: {
                transform: 'rotate(20deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "triangle", // star hai yai
            src: triangle,
            style: {
                transform: 'rotate(-10deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "polygon",
            src: polygon,
            style: {
                transform: 'rotate(10deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "oval",
            src: oval,
            style: {
                transform: 'rotate(-15deg)',
                filter: 'opacity(50%)'
            }
        },
        {
            name: "rectangle",
            src: rectangle,
            style: {
                transform: 'rotate(15deg)',
                filter: 'opacity(50%)'
            }
        }
    ])
    const check = (i) => {
        let temp = [...posi]
        temp[i].style.filter = "opacity(100%)"
        setPosi(temp)
        window.setTimeout(() => {
            handleAnswer(posi[i].name)
        }, 1000)
        // handleAnswer(posi[i].name)
    }
    return (
        <div style={imgDiv}>
            {posi.map((obj, idx) => {
                return (
                    <img src={obj.src} style={{ ...parentStyle, ...obj.style, ...posxy[idx] }} alt="" onClick={() => check(idx)} />
                )
            })}

        </div>
    );
}
