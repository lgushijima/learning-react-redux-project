export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function mapQuestionBySection(authedUser, questions, answeredSection) {
    const result = Object.keys(questions).filter((q) => {
        const question = questions[q];
        const answered =
            question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id);
        
            return answeredSection === answered;
    });
    return result;
}

export function formatQuestion(authedUser, question, user) {
    const { id, timestamp, optionOne, optionTwo } = question;
    const { name, avatarURL } = user;

    return {
        name,
        avatar: avatarURL,
        id,
        timestamp,
        totalVotes: optionOne.votes.length + optionTwo.votes.length,
        optionOne: {
            text: optionOne.text,
            answers: optionOne.votes.length,
            percentage: (
                Math.round((optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 1000) / 10
            ).toFixed(1),
            hasVoted: optionOne.votes.includes(authedUser.id),
        },
        optionTwo: {
            text: optionTwo.text,
            answers: optionTwo.votes.length,
            percentage: (
                Math.round((optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 1000) / 10
            ).toFixed(1),
            hasVoted: optionTwo.votes.includes(authedUser.id),
        },
    };
}
