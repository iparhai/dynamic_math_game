import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import './drag.css'
// import removeEffect from '../assets/sounds/removeItem.mp3'
import useSound from 'use-sound';
// import dropSound from '../assets/sounds/drop.wav'
import { useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


const URLImage = ({ image, handleClick, width, height }) => {
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

const MultiDrag = (props) => {
    const dragUrl = React.useRef();
    const stageRef = React.useRef();
    const draggableImage = React.useRef();
    const [images, setImages] = React.useState([]);
    // const [playRemoveEffect] = useSound(removeEffect)
    const [hover, setHover] = React.useState(false)
    const [stageWidth, setStageWidth] = React.useState(300)
    const [stageHeight, setStageHeight] = React.useState(200)
    const [currentImage, setCurrentImage] = React.useState(null)
    const [toIncrement, setToIncrement] = React.useState(1)
    const targetImage = React.useRef();
    const container = React.useRef();

    const toggleHover = (value) => {
        setHover(value)
    }
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
        checkSize();
        window.addEventListener("resize", checkSize);
        // dragThis.current.addEventListener('touchmove', checkDrag);
        return () => {
            window.removeEventListener("resize", checkSize)
            // dragThis.current.removeEventListener("touchmove", checkDrag)
        }
    }, [])

    return (
        <div className="noselect parentDiv" style={{ display: "flex" }} >
            <div >
                <button className="btn fourth answerButton">
                    {props.answer}
                </button>
                <br />
                <button className="App-link" style={{
                    background: "rgb(49 205 97)",
                    padding: "10px",
                    border: "1px solid #057897",
                    borderRadius: "0.6em",
                }} onClick={props.handleAnswer}>Check</button>
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
                                    src: currentImage,
                                },
                            ])
                        );
                        // playSoundEffect(props.count)
                        props.incCount(toIncrement)
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
                                    if (image.src.includes("10")) {
                                        props.decCount(10)
                                    }
                                    else {
                                        props.decCount(1)
                                    }
                                }} width={targetImage.current.containerElem.offsetWidth} height={targetImage.current.containerElem.offsetHeight} />;
                            })}
                        </Layer>
                    </Stage>
                </DropTarget>
            </div>
            <div>
                <DragDropContainer targetKey="me"
                    onDragStart={() => {
                        setCurrentImage(props.obj_10)
                        setToIncrement(10)
                    }}
                    ref={e => targetImage.current = e}
                >

                    <img
                        alt="lion"
                        src={props.obj_10}
                        className={"noselect  draggableImage "}

                    />
                </DragDropContainer>
                <br />
                <DragDropContainer targetKey="me"
                    onDragStart={() => {
                        setCurrentImage(props.obj_1)
                        setToIncrement(1)
                    }}
                    ref={e => targetImage.current = e}
                >

                    <img
                        alt="lion"
                        src={props.obj_1}
                        className={"noselect  draggableImage "}
                        ref={draggableImage}
                    />
                </DragDropContainer>
            </div>


        </div>
    );
};

export default MultiDrag;