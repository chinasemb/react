import React, { Component } from "react"
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import  { actionCreators } from './store'
import  { actionCreators as loginActionCreators } from '../../pages/login/store'
import  { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style.js'



// const getListArea = (show) => {
//     if(show){
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>换一批</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     }else{
//         return null
//     }
// }

// 无状态组件提高性能
// JSX 语法必须使用 React进行编译
// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo />
//             <Nav>
//                 <NavItem className="left active">
//                     首页
//                 </NavItem>
//                 <NavItem className="left">
//                     下载App
//                 </NavItem>
//                 <NavItem className="right">
//                     登录
//                 </NavItem>
//                 <NavItem className="right">
//                     <i className="iconfont">&#xe60f;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={200}
//                         classNames="slide"
//                     >
//                         <NavSearch
//                             className={props.focused ? "focused" : ""}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         >
//                         </NavSearch>
//                     </CSSTransition>
//                     <i 
//                         className={props.focused ? "focused iconfont" : "iconfont"}
//                     >
//                         &#xe615;
//                     </i>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className="writing"><i className="iconfont">&#xe600;</i>写文章</Button>
//                 <Button className="reg">注册</Button> 
//             </Addition>
//         </HeaderWrapper>
//     )
// }

class Header extends Component {


    getListArea() {

        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const jsList = list.toJS()
        const pageList = []

        if (jsList.length) {
            
            for (let index = (page-1) * 10 ; index < page * 10; index++) {
                pageList.push(
                    <SearchInfoItem className="hover" key={jsList[index]}>{jsList[index]}</SearchInfoItem>
                )
                
            }
        }
        if(focused || mouseIn){
        return (
            <SearchInfo
                className="hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                        onClick={() => handleChangePage(page,totalPage,this.spinIcon)}
                    >
                        <i 
                            ref={(icon)=> {this.spinIcon = icon}}
                            className="iconfont change"
                        >
                            &#xed2a;
                        </i>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
        )
        }else{
            return null
        }
    }


    render() {

        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">
                        首页
                    </NavItem>
                    <NavItem className="left">
                        下载App
                    </NavItem>
                    {
                        login ? 
                            <NavItem onClick={ logout } className="right hover">退出</NavItem> : 
                            <Link to='/login'>
                                <NavItem className="right hover">登录</NavItem>
                            </Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe60f;</i>
                    </NavItem>
                    <SearchWrapper
                    >
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i 
                            className={focused ? "focused iconfont zoom" : "iconfont zoom"}
                        >
                            &#xe615;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className="writing"><i className="iconfont">&#xe600;</i>写文章</Button>
                    </Link>
                    <Button className="reg">注册</Button> 
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // console.log(1);
            // if (list.size === 0) {
            //     dispatch(actionCreators.getList())
            // }
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },

        handleChangePage(page, totalPage,spin) {
            // console.log(spin);
            // spin.style.transform = 'rotate(360deg)'
            // 非0-9 的数字 都替换成空
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle+ 360)+'deg)'

            if (page< totalPage) {
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
            
        },

        logout () {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)