import React, { Component } from "react";
import { connect } from "react-redux";
import { consolidateUserPoints } from "../util/helpers";

class LeaderBoard extends Component {
    render() {
        const { users, questions } = this.props;
        const leaderBoard = consolidateUserPoints(users, questions);
        console.log(leaderBoard);

        return (
            <div className="container my-4 leaderborad">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8 mx-auto">
                        {leaderBoard.map((user) => (
                            <div key={user.id} className="card leaderboard-card">
                                <div className="card-body">
                                    <div className="leaderboard-wrapper">
                                        <img src={users[user.id].avatarURL} alt={users[user.id].name} />
                                        
                                        <div className="leaderboard-body">
                                            <h4>{users[user.id].name}</h4>
                                            <div className="leaderboard-info">
                                                <p>Answered questions</p>
                                                <p>{user.answers}</p>
                                            </div>
                                            <div className="leaderboard-info">
                                                <p>Created questions</p>
                                                <p>{user.questions}</p>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <span>Total Score</span>
                                            </div>
                                            <div className="card-body">
                                                <div className="total-score">
                                                    {user.answers + user.questions}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                   </div>
                </div> 
            </div>
        );
    }
}
function mapStateToProps({users, questions}){
    return {
        users,
        questions
    }
}
export default connect(mapStateToProps)(LeaderBoard);
