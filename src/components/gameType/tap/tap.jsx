import React from 'react'

export default function Tap({ options, handleClick, object }) {
    return (
        <div style={{ display: "flex" }}>
            {options && options.map((option, idx) => {
                return (
                    <div className="container" onClick={() => handleClick(option)}>
                        <img src={object} className="woodBox" />
                        <div className="centered" style={{ "pointer-events": "none" }} >
                            <strong>{option}</strong>
                            {/* 
                                To bring diversity in gamification and enchance user experience in a way that multiple user playing the same game at the same time would get entirely different experience.
                            */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
