import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import './drag.css'

import useSound from 'use-sound';
// import dropSound from '../assets/sounds/drop.wav'
import { useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { useState } from 'react';
import problemGenerator from './problemGenerator';
const URLImage = ({ image, handleClick, imageRef, width, height }) => {
    const [img] = useImage(image.src);
    console.log(imageRef)
    return (
        <Image
            image={img}
            x={image.x}
            y={image.y}
            width={width}
            height={height}
            // I will use offset to set origin to the center of the image
            offsetX={img ? width / 2 : 0}
            offsetY={img ? height / 2 : 0}
            onClick={handleClick}
            onTouchStart={handleClick}
        />
    );
};

const Drop = (props) => {
    const dragUrl = React.useRef();
    const stageRef = React.useRef();
    const [images, setImages] = React.useState([]);
    const [hover, setHover] = React.useState(false)
    const [stageWidth, setStageWidth] = React.useState(300)
    const [stageHeight, setStageHeight] = React.useState(200)
    const targetImage = React.useRef();
    const [problem, setproblem] = useState()
    const container = React.useRef();
    
    var animate;
    if (hover) {
        animate = "animate__animated animate__heartBeat"
    }
    else {
        animate = ""
    }
    const checkSize = () => {
        const width = container.current.offsetWidth;
        const height = container.current.offsetHeight;

        setStageWidth(width)
        setStageHeight(height)
    };

    useEffect(() => {
        setproblem(problemGenerator.generateSubtractionProblem("", 1))
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => {
            window.removeEventListener("resize", checkSize)
        }
    }, [])

    return (
        <div>
            <div className="noselect parentDiv" style={{ display: "flex" }}>
                <div >
                    <button className="btn fourth answerButton">
                        {props.answer}
                    </button>
                    <br />
                    <button className="App-link fa fa-paper-plane" style={{
                        background: "rgb(49 205 97)",

                        border: "1px solid #057897",
                        borderRadius: "0.6em",
                    }} onClick={props.handleAnswer}></button>
                </div>
                <div className="dropBox"
                    ref={container}
                >
                    <DropTarget targetKey="me"
                        onHit={() => {
                            setImages(
                                images.concat([
                                    {
                                        x: Math.random() * (stageWidth - 90) + 50,
                                        y: Math.random() * (stageHeight - 70) + 30,
                                        src: props.img,
                                    },
                                ])
                            );
                            // playSoundEffect(props.count)
                            props.incCount(1)
                        }}
                    >
                        <Stage
                            width={stageWidth}
                            height={stageHeight}
                            ref={stageRef}
                        >
                            <Layer>
                                {images.map((image) => {
                                    return <URLImage image={image} handleClick={() => {
                                        console.log("adf")
                                        setImages(
                                            images.filter(item => item !== image)
                                        )
                                        // playRemoveEffect()
                                        props.decCount(1)
                                    }} width={targetImage.current.containerElem.offsetWidth} height={targetImage.current.containerElem.offsetHeight} />;
                                })}
                            </Layer>
                        </Stage>
                    </DropTarget>
                </div>
                <div >
                    <DragDropContainer targetKey="me"
                        onDragStart={() => {
                            console.log(targetImage.current.containerElem.offsetHeight)
                        }}
                        onDrop={(e) => {
                            // console.log(e.dropData.name)
                        }}
                        style={{
                            border: "1px dashed white",
                            borderRadius: "0.6em",
                            padding: "15px"
                        }}
                        ref={e => targetImage.current = e}
                    >
                        <img
                            alt="lion"
                            src={props.img}
                            className={"noselect  questionImage"}
                            style={{ display: "block" }}

                        />
                    </DragDropContainer>
                    <br />
                    <br />
                </div>
            </div >
        </div>
    );
};

export default Drop;



// <br />
// <div
//     onDrop={(e) => {
//         e.preventDefault();
//         // register event position
//         stageRef.current.setPointersPositions(e);
//         // add image
//         dropS.play()
//         setImages(
//             images.concat([
//                 {
//                     ...stageRef.current.getPointerPosition(),
//                     src: dragUrl.current,
//                 },
//             ])
//         );
//         props.incCount(1)
//         playSoundEffect(props.count)
//         //setCount(count + 1)
//     }}
//     ref={container}
//     onDragOver={(e) => e.preventDefault()}
//     className="dropBox"
// >
//     <Stage
//         width={stageWidth}
//         height={stageHeight}
//         ref={stageRef}
//     >
//         <Layer>
//             {images.map((image) => {
//                 return <URLImage image={image} handleClick={() => {
//                     setImages(
//                         images.filter(item => item !== image)
//                     )
//                     playRemoveEffect()
//                     props.decCount(1)
//                 }} dropImage={draggableImage} />;
//             })}
//         </Layer>
//     </Stage>

// </div>
// <div >
//     <img
//         alt="lion"

//         src={props.img}
//         draggable={props.count < 10 ? "true" : "false"}
//         onDragStart={(e) => {
//             dragUrl.current = e.target.src;
//         }}

//         className={"noselect draggableImage " + animate}
//         onMouseEnter={() => { toggleHover(true) }}
//         onMouseLeave={() => { toggleHover(false) }}
//         ref={draggableImage}
//     // ref={dragThis}
//     />
// </div>
// <br />
// <br />
// {/* <div>
//     <h1>{props.count}</h1>
// </div> */}