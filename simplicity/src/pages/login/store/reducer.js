// reducer 导出的是一个纯函数，有固定的的输入就有固定的输出（同时没有副作用）
import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    login: false,

})

export default (state= defaultState, action) => {

    switch (action.type) {
        case actionTypes.CHANGE_LOGIN :
            return state.set('login', action.value)
        case actionTypes.CHANGE_LOGOUT :
            return state.set('login', action.value)
        default: return state
    }
}
