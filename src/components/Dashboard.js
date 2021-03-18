import React, { Component } from "react";
import { connect } from "react-redux";
import { mapQuestionBySection } from "../util/helpers";
import DashboardOption from './DashboardOption';
import QuestionCard from "./QuestionCard";

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
        let questionList = mapQuestionBySection(authedUser, questions, answeredSection);

        return (
            <div className="container my-4">
                <div className="card">
                    <div className="card-header">
                        <nav className="nav">
                            <DashboardOption isActive={answeredSection===false} value={false} onClick={this.changeSection} text={"Unanswered Questions"} />
                            <DashboardOption isActive={answeredSection===true} value={true} onClick={this.changeSection} text={"Answered Questions"} />
                        </nav>
                    </div>
                    <div className="card-body questions-counter">
                        {questionList.map((id) => (
                            <QuestionCard key={id} id={id} />
                        ))}
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
