import React, { PureComponent } from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'   
// import { Redirect } from 'react-router-dom'
import 
    {   HomeWrapper,
        HomeLeft,
        HomeRight,
        BackTop
    }
 from './style'

    class Home extends PureComponent {
        // 内置了一个 shouldComponentUpdate
        handleScrollTop() {
            window.scrollTo(0,0)
        }

        render () {
            // const { login } = this.props
            // if (login) {
            //     {/* }else {
            //     return <Redirect to='/login'/>
            // } */}
                return (
                    <HomeWrapper>
                        <HomeLeft>
                            <img
                                className="banner-img" 
                                src="https://b2-q.mafengwo.net/s14/M00/2F/8E/wKgE2l1pBUOAMbWMAAmpSLKpdng583.jpg?imageMogr2%2Finterlace%2F1" alt=""/
                            >
                            <Topic /> 
                            <List /> 
                        </HomeLeft>
                        <HomeRight>
                            <Recommend /> 
                            <Writer /> 
                        </HomeRight>
                        {
                            this.props.showScroll ? <BackTop ref={(div) => {this.btn = div}} onClick={()=> {this.handleScrollTop()}}>回到顶部</BackTop> : null
                        }
                    </HomeWrapper>
                )
            
        }

        componentDidMount() {
            this.props.changeHomeData()
            this.bindEvents()
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.props.toggleScrollTopBtn)
        }

        bindEvents() {
            window.addEventListener('scroll', () => {this.props.toggleScrollTopBtn(this.btn)})
        }

    }

    const mapState = (state) => ({
        showScroll: state.getIn(['home', 'showScroll']),
        login: state.getIn(['login', 'login'])
    })

    const mapDispatch = (dispatch) => ({
        changeHomeData() {
            // 第一次创建 action ， 
            // 这次 dispatch的是一个 actionCreators下的一个函数名,实际上是一个函数 
            // 如果那是一个函数后面的（）的意思就是运行这个函数的意思
            // 而这个函数的返回值又是一个异步的ajax 请求，最后创建一个action,并dispatch它
            // reudcer 里面可以接受它（action），改变state 里的数据，从而更新页面
            dispatch(actionCreators.getHomeInfo())
            // 此时的action 是一个函数
        },

        toggleScrollTopBtn(btn) {
            if (document.documentElement.scrollTop> 50) {
                dispatch(actionCreators.toggleScrollTopBtn(true))
                
            }else {
                dispatch(actionCreators.toggleScrollTopBtn(false))
            }
        }
    })

export default connect(mapState, mapDispatch)(Home)