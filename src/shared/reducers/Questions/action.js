/**
 * Created By Nikita Mittal
 * 3rd April 2019
 */

export const INIT_QUESTIONS = "init_questions"
export const STORE_VIDEOS = "store_videos"
export const STORE_ANSWER = "store_answer"
export const INIT_USER    = "init_user"
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


export const storeVideoAction = (videoSource) => {
    console.log("Video Source", videoSource)
    return (dispatch, getState) => {
        dispatch({
            type : STORE_VIDEOS,
            model,
            payload: videoSource
        })
    }
}

export const populateAnswer = (questionId, answer) => {

    return (dispatch, getState) => {
        dispatch({
            type : STORE_ANSWER,
            model,
            payload:{
                questionId : questionId,
                answer : answer
            }
        })
    }
}


export const initUser = (userIdList) => {
    return (dispatch, getState) => {
    dispatch({
        type: INIT_USER,
        model,
        payload: {
            userIdList : userIdList
        }
    })
}
}



