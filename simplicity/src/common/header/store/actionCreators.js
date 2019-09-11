import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})


export const getList = () => {
    return (dispatch) => {
        // console.log(123);
        axios.get('/api/headerList.json').then( (res) => {
            // console.log(res.data);
            const data = res.data
            dispatch(changeList(data.data))
        } ).catch( () => {
            console.log('err');
            
        } )
    }
}