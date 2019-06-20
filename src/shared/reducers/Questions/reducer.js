/**
 * Created By Nikita Mittal
 * 3rd April 2019
 */

import {INIT_QUESTIONS, STORE_VIDEOS, STORE_ANSWER, INIT_USER} from './action'

import {initializeQuestions} from './helper'


const QuestionReducer = (state, action) => {
    switch(action.type){
        case INIT_QUESTIONS:{
            const {questions} = action.payload
            const {questionIdList, questionById} = initializeQuestions(questions)
            state = {
                ...state,
               question: {
                   allIds: questionIdList,
                   byId: {
                       ...questionById
                   }
               }
            }
            break
        }
        case STORE_VIDEOS:{
            state = {
                ...state,
                video: action.payload
            }
            break
        }

        case STORE_ANSWER:{
            const {questionId, answer} = action.payload
            state = {
                ...state,
                question :{
                    ...state.question,
                    byId:{
                        ...state.question.byId,
                        [questionId]:{
                            ...state.question.byId[questionId],

                            answer : {
                                ...state.question.byId[questionId].answer, 
                                ...answer}
                        }
                    }
                }
            }
            break;
        }

        case INIT_USER:{
            const {userIdList} = action.payload
            state = {
                ...state,
                userIds : [...userIdList]
            }
            break
        }
    }
    return state
}

export default QuestionReducer