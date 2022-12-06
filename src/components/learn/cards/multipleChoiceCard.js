import React from "react";
import '../cardstyle.css';
import './multipleChoiceCardStyle.css';

export class MultipleChoiceCardData {
    constructor(prompt, answer, wrongAnswer, nextCard) {
        this.prompt = prompt;
        this.answer = answer;
        this.wrongAnswer = wrongAnswer;
        this.option_correct = Math.random() > 0.5;
        this.showAnswer = false;
        this.optionPicked = 0;

        const onFinish = (correct) => {
            this.correct = correct;
            nextCard();
        }

        const onClick = (optionPicked) => {
            if (!this.showAnswer) {
                this.optionPicked = optionPicked;
                this.showAnswer = true;
            }
        }

        this.card = <MultipleChoiceCard
            prompt={this.prompt}
            answer={this.answer}
            wrongAnswer={this.wrongAnswer}
            showAnswer={this.showAnswer}
            optionPicked={this.optionPicked}
            option_correct={this.option_correct}
            onFinish={onFinish}
            onClick={onClick}
        />
    }
}

export class MultipleChoiceCard extends React.Component {

    handleClick(optionPicked) {
        this.props.onClick(optionPicked);
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter' && this.props.showAnswer) {
            this.props.onFinish(this.props.optionPicked === this.props.option_correct ? 'CORRECT' : 'WRONG');
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className={`card ${this.props.showAnswer ? "show_answer" : ""}`} onKeyDown={this.handleKeyPress}>
                <div className='prompt'>
                    {this.props.prompt}
                </div>
                <small className={'continue'}>
                    Press Enter to Continue...
                </small>
                <div className='options'>
                    <button className={'option ' +
                        (this.props.option_correct ? 'correct' : 'wrong')
                        + ' ' + (this.props.optionPicked === 1 ? 'picked' : 'not_picked')} onClick={() => {
                        this.handleClick(1);
                    }}>
                        {this.props.option_correct ? this.props.answer : this.props.wrongAnswer}
                    </button>
                    <button className={'option ' + (this.props.option_correct ? 'wrong' : 'correct')
                        + ' ' + (this.props.optionPicked === 2 ? 'picked' : 'not_picked')} onClick={() => {
                        this.handleClick(2);
                    }}>
                        {this.props.option_correct ? this.props.wrongAnswer : this.props.answer}
                    </button>
                </div>
            </div>
        );
    }
}
