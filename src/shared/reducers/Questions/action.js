/**
 * Created By Nikita Mittal
 * 3rd April 2019
 */

export const INIT_QUESTIONS = "init_questions"
import {QUESTION} from '../model'
const model = QUESTION


export const initQuestions = (questionList) => {
    return (dispatch, getState) => {
        dispatch({
            type : INIT_QUESTIONS,
            model,
            payload: {
                questions: questionList
            }
        })
    }
}


export const findQuestionById = (questionId) => {
    return (dispatch, getState) => {
        let state = getState()
        let fiddlerData = state.FiddlerReducer
        let question = fiddlerData.question
        if(question && question.byId){
            let questionData = question.byId[questionId]
            return questionData
        }
    }
}


