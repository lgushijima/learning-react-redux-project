import React, { Component } from "react";

class QuestionCardResult extends Component {
    state = {
        percentageOne: 0,
        percentageTwo: 0
    }

    componentDidMount () {
        const { optionOne, optionTwo } = this.props.question;
        this.timeoutId = setTimeout(function () {
            this.setState(() => ({
                percentageOne: `${parseFloat(optionOne.percentage)}%`,
                percentageTwo: `${parseFloat(optionTwo.percentage)}%`
            }));
        }.bind(this), 100);
    } 
    
    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const { optionOne, optionTwo, totalVotes } = this.props.question;
        
        return (
            <div>
                <div className={`question-box ${optionOne.hasVoted ? 'active' : ''}`}>
                    <p>Would you rather {optionOne.text}</p>
                    <div className="progress-bar">
                        <div style={{width: this.state.percentageOne}}><span>{optionOne.percentage}%</span></div>
                    </div>
                    <label>{optionOne.answersCount} out of {totalVotes} votes</label>
                </div>
                <div className={`question-box ${optionTwo.hasVoted ? 'active' : ''}`}>
                    <p>Would you rather {optionTwo.text}</p>
                    <div className="progress-bar">
                        <div style={{width: this.state.percentageTwo }}><span>{optionTwo.percentage}%</span></div>
                    </div>
                    <label>{optionTwo.answersCount} out of {totalVotes} votes</label>
                </div>
            </div>
        );
    }
}

export default QuestionCardResult;
