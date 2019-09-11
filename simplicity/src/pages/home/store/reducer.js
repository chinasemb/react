// reducer 导出的是一个纯函数，有固定的的输入就有固定的输出（同时没有副作用）
// PureComponent 是结合了 immutable 才能使用的，否则有潜在的坑。
// 因为各个组件都用了 connect 方法，每当一个state 更新的话，所有的组件都会更新为了避免这样，可以用shouldComponentUpdate 方法
// 做判断，如果是和这个组件相关的state更新了组件才更新

import { fromJS } from "immutable"
import * as constants  from "./constants"

const defaultState = fromJS({
    TopicList: [],
    articleList: [],
    recommendList: [],
    WriterList: [],
    articleCurrentPage: 1,
    showScroll: false
})

const changeHomeData = (state, action) => {
    return state.merge({
        TopicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        WriterList: fromJS(action.writerList),
    })
}

const addHomeList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articleCurrentPage': action.nextPage
    })
}

export default (state= defaultState, action) => {

    switch (action.type) {
       case constants.CHANGE_HOME_DATA:
    //    console.log(action)
        return changeHomeData(state, action)
       case constants.ADD_HOME_LIST:
    //    console.log(action)
        return addHomeList(state, action)
       case constants.TOGGLE_SCROLL_TO_TOP:
        return state.set('showScroll', action.show)
        
        default: return state
    }

    
}
