import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../util/helpers";
import QuestionCardInfo from './QuestionCardInfo';

import {
    VIEW_MODE_LIST,
    VIEW_MODE_DETAIL
} from '../util/helpers'

class QuestionCard extends Component {
    render() {
        const { questions, users, authedUser, id, viewMode } = this.props;
        const questionInfo = formatQuestion(authedUser, questions[id], users[questions[id].author]);
        const isAnswered = questionInfo.optionOne.hasVoted || questionInfo.optionTwo.hasVoted;

        return (
            <div className="container my-4">
                <div className="card">
                    <div className="card-header">
                        <h3>{viewMode === VIEW_MODE_DETAIL && isAnswered ? `Asked by ${questionInfo.name}` : `${questionInfo.name} asks:`}</h3>
                    </div>
                    <div className="card-body">
                        <div className="question-wrapper">
                            <img src={questionInfo.avatar} alt={questionInfo.name} />
                            <div>
                                {viewMode === VIEW_MODE_DETAIL && isAnswered ? '' : (
                                    <h4>Would You Rather ...</h4>
                                )}
                                <QuestionCardInfo question={questionInfo} viewMode={viewMode} />
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
