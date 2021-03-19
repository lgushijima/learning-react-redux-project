import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";

import QuestionCardInput from './QuestionCardInput';
import QuestionCardResult from './QuestionCardResult';

import {
    VIEW_MODE_LIST,
    VIEW_MODE_DETAIL
} from '../util/helpers'

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
        
        console.log(id, option)
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
                        <QuestionCardInput id={id} value={1} text={optionOne.text} onSelected={this.onSelected} />
                        <QuestionCardInput id={id} value={2} text={optionTwo.text} onSelected={this.onSelected} />
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

export default withRouter(QuestionCardInfo);
