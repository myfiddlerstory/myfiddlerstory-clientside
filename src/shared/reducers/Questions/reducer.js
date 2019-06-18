/**
 * Created By Nikita Mittal
 * 3rd April 2019
 */

import {INIT_QUESTIONS} from './action'

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
    }
    return state
}

export default QuestionReducer