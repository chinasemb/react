// reducer 导出的是一个纯函数，有固定的的输入就有固定的输出（同时没有副作用）
import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    // 当前页数
    page: 1,
    // 总共页数
    totalPage: 1
})

export default (state= defaultState, action) => {

    switch (action.type) {
        case actionTypes.SEARCH_FOCUS :
            return state.set('focused', true)
        case actionTypes.SEARCH_BLUR :
            return state.set('focused', false)
        case actionTypes.CHANGE_LIST :
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
            // return state.set('list', action.data).set('totalPage', action.totalPage)
        case actionTypes.MOUSE_ENTER :
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE :
            return state.set('mouseIn', false)
        case actionTypes.CHANGE_PAGE :
            return state.set('page', action.page)
        default: return state
    }

    // if (action.type === actionTypes.SEARCH_FOCUS) {
    //     return state.set('focused', true)
    // }

    // if (action.type === actionTypes.SEARCH_BLUR) {
    //     return state.set('focused', false)
    // }

    // if (action.type === actionTypes.CHANGE_LIST) {
    //     return state.set('list', action.data)
    // }

    
}
