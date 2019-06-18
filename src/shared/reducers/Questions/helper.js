/**
 * Created By Nikita Mittal
 * 18th JUne 2019
 */



export const initializeQuestions = (questionList) => {
    let questionIdList = [], questionById = {}
    if(questionList && questionList.length){
        questionList.forEach((question, index) => {
            questionIdList.push(index)
            questionById[index] =  {
                id: index,
                title : question
            }
        });
    }

    return {
        questionIdList,
        questionById
    }
}