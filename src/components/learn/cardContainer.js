import React, { useState, useEffect } from "react";
// import "./cardstyle.css";

import { MultipleChoiceCard, MultipleChoiceCardData } from "./cards/multipleChoiceCard";
import { ProgressCard, ProgressCardData } from "./cards/progressCard";

export default function CardContainer() {
    const [flashCardData, setFlashCardData] = useState([]);
    const [current, setCurrent] = useState(0);

    function updateFlashCardData(index, newFlashCard) {
        setFlashCardData((flashCardData) => {
            return [
                ...flashCardData.slice(0, index),
                newFlashCard,
                ...flashCardData.slice(index + 1)
            ];
        });
    }

    useEffect(() => {
        setFlashCardData([
            new MultipleChoiceCardData('word1', 'correct', 'incorrect', nextCard),
            new MultipleChoiceCardData('word2', 'correct 2', 'incorrect 2', nextCard),
            new MultipleChoiceCardData('word3', 'correct 23', 'incorrect 23', nextCard)
        ])
    }, [nextCard]);

    const cards = flashCardData.map((card, index) => {

        return <MultipleChoiceCard
            prompt={card.prompt}
            answer={card.answer}
            wrongAnswer={card.wrongAnswer}
            showAnswer={card.showAnswer}
            optionPicked={card.optionPicked}
            option_correct={card.option_correct}
            onFinish={(correct) => {
                let cardCopy = flashCardData[index];
                cardCopy.correct = correct;
                updateFlashCardData(index, cardCopy);
                nextCard();
            }}
            onClick={(optionPicked) => {
                if (!flashCardData[index].showAnswer) {
                    let cardCopy = flashCardData[index];
                    cardCopy.optionPicked = optionPicked;
                    cardCopy.showAnswer = true;
                    updateFlashCardData(index, cardCopy);
                }
            }}
        />;
    });

    function nextCard() {
        if (current < flashCardData.length - 1) {
            setCurrent(current + 1);
            return true;
        } else return false;
    }
    function previousCard() {
        if (current > 0) {
            setCurrent(current - 1);
            return true;
        } else return false;
    }

    const loading = <div className="loading">Loading card...
    </div>;

    return (
        <div>
            {flashCardData && flashCardData.length > 0 ? cards[current] : loading}

            <div className="nav">
                {current > 0 ? (
                    <button onClick={previousCard}>Previous card</button>
                ) : (
                    <button className="disabled" disabled>
                        Previous card
                    </button>
                )}
                {current < flashCardData.length - 1 ? (
                    <button onClick={nextCard}>Next card</button>
                ) : (
                    <button className="disabled" disabled>
                        Next card
                    </button>
                )}
            </div>
        </div>
    );
}
