import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if( action.type === constants.SEARCH_FOCUS ) {
        // immutable 对象的set 方法会结合之前immutable 对象的值和设置的值，返回一个全新的对象，并不会该原来的数据
        return state.set('focused', true)
    }
    if( action.type === constants.SEARCH_BLUR ) {
        return state.set('focused', false)
    }
    return state
}