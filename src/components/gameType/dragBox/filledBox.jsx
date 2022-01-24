import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import './drag.css'

// import dropSound from '../assets/sounds/drop.wav'
import { useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { useState } from 'react';
const URLImage = ({ image, handleClick, imageRef, width, height }) => {
    const [img] = useImage(image.src);
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

const FilledBox = (props) => {
    const stageRef = React.useRef();
    const [images, setImages] = React.useState([]);
    const [hover, setHover] = React.useState(false)
    const [stageWidth, setStageWidth] = React.useState(300)
    const [stageHeight, setStageHeight] = React.useState(200)
    const targetImage = React.useRef();
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
        var filledObjects = []
        for (var i = 0; i < 10; i++) {

            filledObjects.push(
                {
                    x: Math.random() * (stageWidth - 90) + 50,
                    y: Math.random() * (stageHeight - 70) + 30,
                    src: props.img,
                }
            )
        }
        console.log(filledObjects)
        setImages(filledObjects)
        window.addEventListener("resize", checkSize);
        return () => {
            window.removeEventListener("resize", checkSize)
        }
    }, [])
    useEffect(() => {
        if(images == null) return
        console.log(images)
    }, [images])
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
                {images && <div>
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
                    {<div >
                        <DragDropContainer targetKey="me"
                            onDragStart={() => {
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
                    </div>}
                </div>}
            </div >
        </div>
    );
};

export default FilledBox;

