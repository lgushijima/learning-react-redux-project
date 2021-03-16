import { 
    _getUsers, 
    _getUserById,
    _getQuestions, 
    _saveQuestion, 
    _saveQuestionAnswer, 
    _authenticateUsers
} from "./_DATA.js";

export function getInitialData() {
    return Promise.all([
        _getUsers(), 
        _getQuestions()
    ]).then(([users, tweets]) => ({
        users,
        tweets,
    }));
}
export function loginUser(id, password) {
    return _authenticateUsers(id, password);
}

export function getUsers() {
    return _getUsers();
}

export function getUserById(id) {
    return _getUserById(id);
}

export function getQuestions() {
    return _getQuestions();
}

export function saveQuestion(info) {
    return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
}
