import React, { Component } from "react";

class Dashboard extends Component {
    render() {
        return (
            <div className="container my-4">
                <div className="card">
                    <div className="card-header">
                        <nav className="nav">
                            <a className="nav-link active" href="#">Unanswered Questions</a>
                            <a className="nav-link" href="#">Answered Questions</a>
                        </nav>
                    </div>
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
