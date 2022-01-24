
import React, { useEffect } from 'react'

export default function Canvas(props) {
    const canvas = React.useRef();
    const [ctx, setCTX] = React.useState(null)
    const container = React.useRef();
    const [stageWidth, setStageWidth] = React.useState(300)
    const [stageHeight, setStageHeight] = React.useState(200)


    useEffect(() => {
        setCTX(canvas.current.getContext("2d"))
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => {
            window.removeEventListener("resize", checkSize)
        }
    }, [])
    const checkSize = () => {
        const width = container.current.offsetWidth;
        const height = container.current.offsetHeight;
        setStageWidth(width)
        setStageHeight(height)
    };

    useEffect(() => {
        if (ctx == null) return
        ctx.font = "bold 60px sans-serif"
        ctx.fillStyle = "white";
        ctx.fillText("1", stageWidth / 2, stageHeight / 2);
    }, [ctx])

    function draw(evt) {
        var pos = getMousePos(canvas.current, evt);
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = "red";

        ctx.fillRect(pos.x, pos.y, 10, 10);
        ctx.globalCompositeOperation = 'source-over';
    }
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    return (
        <div className="dropBox"
            ref={e => container.current = e} style={{ marginTop: "40vh" }}>
            <canvas onMouseMove={(e) => draw(e)} ref={e => canvas.current = e} width={stageWidth} height={stageHeight} />
        </div>
    )
}

