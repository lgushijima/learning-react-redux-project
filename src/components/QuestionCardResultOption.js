import React from "react";

export default function QuestionCardResultOption (props) {
    const { option, percentage, total } = props;
    
    return (
        <div className={`question-box ${option.hasVoted ? 'active' : ''}`}>
            <p>Would you rather {option.text}</p>
            <div className="progress-bar">
                <div style={{width: percentage}}><span>{percentage}</span></div>
            </div>
            <label>{option.answersCount} out of {total} votes</label>
        </div>
    );
}
