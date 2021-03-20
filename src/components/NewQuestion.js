import React, { Component } from "react";
import { connect } from "react-redux";

import { handleSaveQuestion } from '../actions/shared'

class NewQuestion extends Component {
    componentDidMount () {
        this.optionOne.focus();
    }

    onSubmitQuestion = (e) => {
        e.preventDefault();
        
        const { dispatch, authedUser } = this.props;
        dispatch(handleSaveQuestion(authedUser.id, this.optionOne.value, this.optionTwo.value))
        .then(() => {
            this.props.history.push("/dashboard");
        });
    }

    render() {
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-primary text-center">Create New Question</h2>
                            </div>
                            <div className="card-body">
                                <p>Complete the question:</p>

                                <div className="py-3">
                                    <h4 className="pb-2">Whould you rather...</h4>
                                    <input ref={(input)=> {this.optionOne = input}} type="text" className="form-control d-block" placeholder="Enter option one text here" />
                                    <span className="splitter-bar">or</span>
                                    <input ref={(input)=> {this.optionTwo = input}} type="text" className="form-control d-block" placeholder="Enter option one text here"  />
                                </div>

                                <button className="btn btn-primary btn-block mt-4" onClick={(e) => {this.onSubmitQuestion(e)}}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);
