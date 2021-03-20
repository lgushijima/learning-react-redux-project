import React, { Component } from "react";
import { connect } from "react-redux";
import { mapQuestionBySection } from "../util/helpers";
import DashboardOption from './DashboardOption';
import QuestionCard from "./QuestionCard";

import { VIEW_MODE_LIST } from '../util/helpers'
class Dashboard extends Component {
    state = {
        answeredSection: false,
    };

    changeSection = (e, answered) => {
        this.setState(() => ({
            answeredSection: answered,
        }));
    };

    render() {
        const { answeredSection } = this.state;
        const { questions, authedUser } = this.props;
        let mappedSections = mapQuestionBySection(authedUser, questions, answeredSection);
        const questionList = answeredSection===true ? mappedSections.answeredQuestions : mappedSections.unansweredQuestions;
        
        return (
            <div className="container my-4">
                <div className="card">
                    <div className="card-header">
                        <nav className="nav">
                            <DashboardOption isActive={answeredSection===false} value={false} onClick={this.changeSection} text={"Unanswered Questions"} count={mappedSections.unansweredQuestions.length} />
                            <DashboardOption isActive={answeredSection===true} value={true} onClick={this.changeSection} text={"Answered Questions"} count={mappedSections.answeredQuestions.length} />
                        </nav>
                    </div>

                    <div className="card-body questions-counter">
                        {questionList.sort((a,b) => b.timestamp - a.timestamp).map((question) => (
                            <QuestionCard key={question.id} id={question.id} viewMode={VIEW_MODE_LIST}/>
                        ))}

                        {questionList.length === 0 && (
                            <p className="text-center">No {answeredSection === false ? "new unanswered" : "answered" } questions at the moment.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        authedUser,
        questions,
    };
}

export default connect(mapStateToProps)(Dashboard);
