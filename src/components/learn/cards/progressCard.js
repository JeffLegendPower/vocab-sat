import React from "react";
import '../cardstyle.css';

export class ProgressCardData {
    constructor(num_terms, num_correct) {
        this.num_terms = num_terms;
        this.num_correct = num_correct;
    }
}

export class ProgressCard extends React.Component {

    progressBarStyle = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50
    }

    fillerStyle = {
        height: '100%',
        width: `${this.props.num_correct / this.props.num_terms * 100}%`,
        backgroundColor: '#6a1b9a',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    render() {
        return (
            <div className='card'>
                <div style={this.progressBarStyle}>
                    <div style={this.fillerStyle}>
                        <span style={this.labelStyles}>{this.props.num_correct}/{this.props.num_terms}</span>
                    </div>
                </div>
            </div>
        )
    }
}