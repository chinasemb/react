import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group'
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
 } from './style'

class Header extends Component {
    getListArea() {
        const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props
        const jsList = list.toJS()
        const pageList = []
        if(jsList.length) {
            for (let index = (page-1) * 10; index < page * 10; index++) {
                pageList.push(
                    <SearchInfoItem key={jsList[index]}>{jsList[index]}</SearchInfoItem>
                )
                
            }
        }

        if (focused || mouseIn ) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick = { () => { handleChangePage(page, totalPage, this.spinIcon) } }
                        >
                            <i ref={(icon)=> {this.spinIcon = icon}} className='iconfont spin'>&#xed2a;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className= { focused ? 'focused' : '' }
                                onFocus= {()=>handleInputFocus(list)}
                                onBlur= {handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className= { focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe615;</i>
                        { this.getListArea(focused) }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <i className='iconfont'>&#xe600;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// 无状态组件，性能比较高
// const Header = (props) => {
    
// }

const mapState = (state) => ({
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
})

const mapDispatch = (dispatch) => ({
    handleInputFocus(list) {
        // 只有 list.size ===0 的时候才请求数据
        if(list.size === 0) { dispatch(actionCreators.getList()) }
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
    handleChangePage(page, totalPage, spin) {
        // 对于非0-9 的数字进行一个替换, 如果这里面的字符不是0-9的数字，那么我把它都替换成空
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
        if(originAngle) {
            // 让它以十进制的形式转换成数字
            originAngle = parseInt(originAngle, 10)
        }else {
            originAngle = 0
        }
        spin.style.transform = 'rotate('+ (originAngle+360) + 'deg)'
        
        if(page < totalPage) {
            dispatch(actionCreators.changePage(page+1))
        }else {
            dispatch(actionCreators.changePage(1))
        }
    }
})

export default connect(mapState, mapDispatch)(Header)

// timeout 动画执行时长
// in 控制入场出厂动画  {this.state.focused} 布尔值
// classNames 字符串或者对象
// 这个组件会帮你做一些事情，在NavSearch 即将被挂载到页面之前，会往外层的组件上去挂载几个css 的样式
// slide-enter, slide-enter-active, slide-exit, slide-exit-active