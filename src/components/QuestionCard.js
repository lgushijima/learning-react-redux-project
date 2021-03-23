import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../util/helpers";
import QuestionCardInfo from './QuestionCardInfo';

import {
    VIEW_MODE_DETAIL
} from '../util/helpers'
import { Redirect, withRouter } from "react-router";

class QuestionCard extends Component {
    render() {
        const { questions, users, authedUser, id, viewMode } = this.props;
        
        if(questions[id] !== undefined){
            const question = formatQuestion(authedUser, questions[id], users[questions[id].author]);
            const isAnswered = question.optionOne.hasVoted || question.optionTwo.hasVoted;

            return (
                <div className="container my-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>{viewMode === VIEW_MODE_DETAIL && isAnswered ? `Asked by ${question.name}` : `${question.name} asks:`}</h3>
                            <small>Posted at: {formatDate(question.timestamp)}</small>
                        </div>
                        <div className="card-body">
                            <div className="question-wrapper">
                                <img src={question.avatar} alt={question.name} />
                                <div>
                                    {viewMode === VIEW_MODE_DETAIL && isAnswered ? '' : (
                                        <h4>Would You Rather ...</h4>
                                    )}
                                    <QuestionCardInfo question={question} viewMode={viewMode} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <Redirect to="/PageNotFound"/>
            )
        }
    }
}

function mapStateToProps({questions, users, authedUser}){
    return {
        questions, 
        users,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionCard));
