import React, { useEffect } from 'react'
import getAsset from '../../../utils/getAsset'
export default function WithObject({ list, setNum, obj }) {
    const [selected, setSelected] = React.useState(null)
    const [object_5, setObject_5] = React.useState(getAsset.getObjectByProperty("apple_writeable"))



    useEffect(() => {
        setNum(selected)
    }, [selected])

    const renderObject = (number) => {
        return (
            [...Array(parseInt(number))].map((e, i) => {
                return (
                    <img className="questionObject" src={obj} />
                )
            })
        )

    }
    return (
        <div  >
            {list.map((itm) => {
                return (
                    <div className={selected && (selected == itm ? "selected" : "")} style={{ opacity: selected ? selected == itm ? 1 : 0.5 : 1, marginBottom: "2%" }} onClick={(e) => {
                        if (selected && selected == itm)
                            setSelected(null)
                        else if (selected == null)
                            setSelected(itm)
                    }}>  <div style={{ display: "flex" }}>
                            {itm > 5 ? <img className="questionObject" src={object_5} /> : null}
                            {renderObject(itm > 5 ? itm - 5 : itm)}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
