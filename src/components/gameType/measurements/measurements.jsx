import React from 'react'
import getAsset from '../../../utils/getAsset'
import './measurements.css'
export default function Measurements({ objects, handleClick, problem }) {
    // type = 0 == long, type = 1 == short, type = 2 == high
    const [card, setCard] = React.useState(getAsset.getObjectByProperty("card"))

    return (
        <div >
            <div className="headingText">
                <strong className="wobble"> Choose {problem} !! </strong>
            </div>
            <div style={{ display: "flex" }}>
                {objects.map((obj) => {
                    return (
                        <div>
                            <div className="boardContainer" onClick={() => {
                                setTimeout(() => {
                                    handleClick(obj)
                                }, 1000)
                            }} >
                                <img src={card} className="board" />
                                <div className="centeredLists" >
                                    <img src={obj} className="boardImg" />
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div >
    )
}
 /* <div>
                  <img src={card} className="board" />
                  <div className="centeredLists" onClick={() => handleClick(obj)}>
                      <img src={obj} />
                  </div>
              </div> */