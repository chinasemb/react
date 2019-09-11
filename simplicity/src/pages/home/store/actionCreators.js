import axios from 'axios'
import * as constants from './constants'
import { fromJS }  from 'immutable'

const changeHomeData = (result) => ({
    // 需要把所有的（index.js, reducer.js 里的小写的字符串变成大写的字符串常量）
    type: constants.CHANGE_HOME_DATA,
    topicList: result.TopicList,
    writerList: result.WriterList,
    articleList: result.articleList,
    recommendList: result.recommendList,
})
const addHomeList = (result, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(result),
    nextPage
})

// 这里是 action 里面 dispatch 了 一个action
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) => {
            const result = res.data.data
            // 请求到数据之后，有一次创建action
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreList = (currentPage) => {
    return (dispatch) => {
        // console.log('click');
        const nextPage = currentPage + 1
        axios.get('/api/homeList.json?currentPage='+ nextPage).then((res)=> {
            // console.log(res.data.data);
            const result = res.data.data
            dispatch(addHomeList(result, nextPage))
        })
    }
}

export const toggleScrollTopBtn = (show) => ({
    type: constants.TOGGLE_SCROLL_TO_TOP,
    show
})