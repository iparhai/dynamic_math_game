import React, { useEffect } from 'react'

export default function WithNumber({ list, setNum }) {
    const [selected, setSelected] = React.useState(null)
    useEffect(() => {
        setNum(selected)
    }, [selected])
    return (
        <div style={{ marginRight: "3vw" }}>
            {list.map((itm) => {
                return (
                    <div className={selected && (selected == itm ? "selected" : "")} style={{ opacity: selected ? selected == itm ? 1 : 0.5 : 1 }} onClick={(e) => {
                        if (selected && selected == itm)
                            setSelected(null)
                        else if (selected == null)
                            setSelected(itm)
                    }}>  <div className="questionText">{itm} </div>
                    </div>
                )
            })}
        </div>
    )
}
