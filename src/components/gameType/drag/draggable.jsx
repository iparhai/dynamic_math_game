import React, { useCallback, useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { Card } from './Card';
import update from 'immutability-helper';
const style = {
    marginTop: "50vh",
    width: 400,
    justifyContent: "center",
    display: "flex"
};
export default function Draggable({ problemSequence, handleSwap }) {

    const [cards, setCards] = useState(problemSequence);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(update(cards, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [cards]);

    useEffect(() => {
        if (!cards == null) return
        handleSwap(cards)
    }, [cards])

    const renderCard = (card, index) => {
        return (<Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />);
    };
    return (
        <div>
            <DndProvider options={HTML5toTouch}>
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            </DndProvider>
        </div>
    )
}
