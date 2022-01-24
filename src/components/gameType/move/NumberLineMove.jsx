import React from 'react';
import { useEffect } from 'react';
// import fishSplash from './assets/sounds/fishSplash.wav'
import './NumberLineMove.css'


const NumberLineMove = (props) => {


    const [fishLeft, setFishLeft] = React.useState(0)
    const [fishTop, setFishTop] = React.useState(0)
    const [usedClicks, setUsedClicks] = React.useState(0)

    const [fishFacePosition, setFishFacePosition] = React.useState()
    const numberLineRef = React.useRef();
    const buttonBackward = React.useRef();
    const buttonForward = React.useRef();
    const [currentSoundNumber, setCurrentSoundNumber] = React.useState(0);

    var fishStyle = {
        move: {
            position: "relative",
            float: "left",
            left: fishLeft + "px",
            top: fishTop + "px",

        }
    }

    const checkResizeFish1 = () => {
        const nextForwardStep = numberLineRef.current.offsetWidth / 11
        setFishLeft(usedClicks * nextForwardStep)
    };

    useEffect(() => {
        setFishFacePosition(props.objects.movingFish_R)
        setFishLeft(numberLineRef.current.offsetLeft)
        setFishTop(0)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", checkResizeFish1);
        return () => {
            window.removeEventListener("resize", checkResizeFish1)
        }
    }, [usedClicks])

    const moveForward = () => {
        if (usedClicks < 10) {
            const nextForwardStep = numberLineRef.current.offsetWidth / 11
            setFishLeft(fishLeft + nextForwardStep)
            setFishFacePosition(props.objects.movingFish_R)
            setUsedClicks(usedClicks + 1)
            props.incCount(1)
            setCurrentSoundNumber(currentSoundNumber + 1)
            // if (sessionData.dif == "b") {
            //     sounds[currentSoundNumber].play()
            // }
        }
    }
    const moveBackward = () => {
        if (10 - usedClicks < 10) {
            const nextBackwardStep = numberLineRef.current.offsetWidth / 11
            setFishLeft(fishLeft - nextBackwardStep)
            setUsedClicks(usedClicks - 1)
            setFishFacePosition(props.objects.movingFish_L)
            setCurrentSoundNumber(currentSoundNumber - 1)
            props.decCount(1)
        }
    }


    return (
        <div   style={{ position: "relative" }}>
            <div className="nline" >
                <div className="firstBar"  >
                    <div >
                        <img src={props.objects.less} alt="less" onClick={moveBackward} style={{ maxWidth: "50px", width: "100%" }} ref={buttonBackward} />
                    </div>
                    <div >
                        <img src={props.objects.more} alt="more" onClick={moveForward} style={{ maxWidth: "50px", width: "100%" }} ref={buttonForward} />
                    </div>
                    <div className="parentImage" >
                        <img src={fishFacePosition} className="fish" alt="movingFish" style={fishStyle.move} />
                        <img src={props.objects.numberLine} className="NumberLine" alt="numberLine" name="numberLine" ref={numberLineRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberLineMove;



