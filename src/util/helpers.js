export const VIEW_MODE_LIST = "List";
export const VIEW_MODE_DETAIL = "Detail";

export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function consolidateUserPoints(users, question){
    const results = Object.keys(users).map((id)=>{
        return {
            id,
            answers : Object.keys(users[id].answers).length,
            questions : Object.keys(question).filter((qid)=> question[qid].author === id).length
        }
    })

    return results.sort((a,b) => (b.answers + b.questions) - (a.answers + a.questions));
}

export function mapQuestionBySection(authedUser, questions) {
    let answeredQuestions = [];
    let unansweredQuestions = [];

    Object.keys(questions).forEach((q) => {
        const question = questions[q];
        const answered =
            question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id);
        
            if(answered){
                answeredQuestions.push(question);
            }
            else{
                unansweredQuestions.push(question);
            }
    });

    return {
        answeredQuestions,
        unansweredQuestions
    }
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
            answersCount: optionOne.votes.length,
            percentage: (
                Math.round((optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 1000) / 10
            ).toFixed(1),
            hasVoted: optionOne.votes.includes(authedUser.id),
        },
        optionTwo: {
            text: optionTwo.text,
            answersCount: optionTwo.votes.length,
            percentage: (
                Math.round((optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 1000) / 10
            ).toFixed(1),
            hasVoted: optionTwo.votes.includes(authedUser.id),
        },
    };
}
