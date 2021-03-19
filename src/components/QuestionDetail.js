import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionCard from './QuestionCard';

import { VIEW_MODE_DETAIL } from '../util/helpers';

class QuestionDetail extends Component {
    render() {
        const { id } = this.props;

        return (
            <QuestionCard key={id} id={id} viewMode={VIEW_MODE_DETAIL}/>
        );
    }
}

function mapStateToProps({questions}, props){
    const { id } = props.match.params

    return { 
        id,
        questions
    };
}

export default connect(mapStateToProps)(QuestionDetail);
