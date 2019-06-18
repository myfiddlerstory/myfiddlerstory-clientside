/**
 * Created By Nikita Mittal
 * 24th March 2019
 */

import initialState from './initialState'
import {
    QUESTION,

} from './model'

import QuestionReducer from './Questions/reducer'


const FiddlerReducer  = (state = initialState, action) => {
    switch(action.model){
        case QUESTION:{
            state = QuestionReducer(state, action)
            break
        }
    }
    return state
}

export default FiddlerReducer