import React, { Component } from "react";
import QuestionCardResultOption from './QuestionCardResultOption';
class QuestionCardResult extends Component {
    state = {
        percentageOne: '0%',
        percentageTwo: '0%'
    }

    componentDidMount () {
        const { optionOne, optionTwo } = this.props.question;

        //-- animate with css
        this.timeoutId = setTimeout(function () {
            this.setState(() => ({
                percentageOne: `${optionOne.percentage}%`,
                percentageTwo: `${optionTwo.percentage}%`
            }));
        }.bind(this), 100);
    } 
    
    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const { optionOne, optionTwo, totalVotes } = this.props.question;
        
        return (
            <div>
                <QuestionCardResultOption option={optionOne} percentage={this.state.percentageOne} total={totalVotes} />
                <QuestionCardResultOption option={optionTwo} percentage={this.state.percentageTwo} total={totalVotes} />
            </div>
        );
    }
}

export default QuestionCardResult;
