import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../util/helpers";

class QuestionCard extends Component {
    render() {
        const { questions, users, authedUser, id } = this.props;
        const questionInfo = formatQuestion(authedUser, questions[id], users[questions[id].author]);

        return (
            <div className="container my-4">
                <div className="card">
                    <div className="card-header">
                        <h3>{questionInfo.name} asks:</h3>
                    </div>
                    <div className="card-body">
                        <div className="question-wrapper">
                            <img src={questionInfo.avatar} alt={questionInfo.name} />
                            <div>
                                <h4>Would You Rather ...</h4>
                                <div>
                                    <input type="radio" value="1" name={`rad-${questionInfo.id}`} id={`rad-one-${questionInfo.id}`}/>
                                    <label htmlFor={`rad-one-${questionInfo.id}`}>{questionInfo.optionOne.text}</label>
                                </div>
                                <div>
                                    <input type="radio" value="2" name={`rad-${questionInfo.id}`} id={`rad-two-${questionInfo.id}`}/>
                                    <label htmlFor={`rad-two-${questionInfo.id}`}>{questionInfo.optionTwo.text}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({questions, users, authedUser}){
    return {
        questions, 
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionCard);
