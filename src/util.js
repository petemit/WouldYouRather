export function questionAnsweredByCurrentUser(question, currentUser) {
    return (
        question.optionOne.votes.filter(vote => vote === currentUser).length > 0
            ||
        question.optionTwo.votes.filter(vote => vote === currentUser).length > 0
    );
}
export function questionNotAnsweredByCurrentUser(question, currentUser) {
    return (
        question.optionOne.votes.filter(vote => vote === currentUser).length === 0
            &&
        question.optionTwo.votes.filter(vote => vote === currentUser).length === 0
    );
}
export function getResultsFromQuestion(question) {
    var optionOneUserCount = question.optionOne.votes.length
    var optionTwoUserCount = question.optionTwo.votes.length
    var votesSum = optionOneUserCount + optionTwoUserCount

    if (votesSum > 0) {
    var optionOnePercentage = ((optionOneUserCount / votesSum)*100).toFixed(2)+'%'
    var optionTwoPercentage = ((optionTwoUserCount / votesSum)*100).toFixed(2)+'%'
    } else {
        optionOnePercentage = "0%"
        optionTwoPercentage = "0%"
    }

    return {optionOneUserCount, optionOnePercentage, optionTwoUserCount, optionTwoPercentage}   
}

export function getOption(question, currentUser) {
    if (question.optionOne.votes.filter(vote => vote === currentUser).length > 0) {
        return "optionOne"
    } else if(question.optionTwo.votes.filter(vote => vote === currentUser).length > 0) {
        return "optionTwo"
    }
    return null
}
