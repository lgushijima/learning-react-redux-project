import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { handleSaveAnswer } from '../actions/questions';

import QuestionCardInput from './QuestionCardInput';
import QuestionCardResult from './QuestionCardResult';

import {
    VIEW_MODE_LIST,
    VIEW_MODE_DETAIL
} from '../util/helpers'
import { connect } from "react-redux";

class QuestionCardInfo extends Component {
    state = {
        value:0
    }

    onSelected = (option) => {
        this.setState(()=>({
            value: option
        }))
    }

    onSubmitAnswer = (e, id, option) => {
        e.preventDefault();
        if(option===0){
            alert("Please, select one of the available options for this question.");
            return;
        }

        const { dispatch, authedUser } = this.props;
        dispatch(handleSaveAnswer(authedUser.id, id, option));
    }

    handleViewPoll = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/question/${id}`);
    }

    render() {
        const { question, viewMode } = this.props;
        const { id, optionOne, optionTwo } = question;
        const isAnswered = optionOne.hasVoted || optionTwo.hasVoted;

        return (
            <Fragment>
                {viewMode === VIEW_MODE_DETAIL && !isAnswered && (
                    <Fragment>
                        <QuestionCardInput id={id} value={'optionOne'} text={optionOne.text} onSelected={this.onSelected} />
                        <QuestionCardInput id={id} value={'optionTwo'} text={optionTwo.text} onSelected={this.onSelected} />
                        <div className="pt-3">
                            <button className="btn btn-primary px-5" onClick={(e) => { this.onSubmitAnswer(e, id, this.state.value) }}>Submit</button>
                        </div>
                    </Fragment>
                )} 

                {viewMode === VIEW_MODE_DETAIL && isAnswered && (
                    <QuestionCardResult question={question} />
                )} 

                {viewMode === VIEW_MODE_LIST && (
                    <Fragment>
                        <label>{isAnswered === true ? (optionOne.hasVoted ? optionOne.text : optionTwo.text) : optionOne.text } ...</label>
                        <div className="pt-3">
                            <button className="btn btn-primary px-5" onClick={(e) => {this.handleViewPoll(e, id)}}>View Poll</button>
                        </div>
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionCardInfo));
