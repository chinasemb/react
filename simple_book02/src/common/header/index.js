import React from 'react'
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
    SearchWrapper
 } from './style'

// 无状态组件，性能比较高
const Header = (props) => {
    const { focused, handleInputFocus, handleInputBlur } = props
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
                            onFocus= {handleInputFocus}
                            onBlur= {handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className= { focused ? 'focused iconfont' : 'iconfont' }>&#xe615;</i>
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

const mapState = (state) => ({
    focused: state.getIn(['header','focused'])
})

const mapDispatch = (dispatch) => ({
    handleInputFocus() {
        dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur())
    }
})

export default connect(mapState, mapDispatch)(Header)

// timeout 动画执行时长
// in 控制入场出厂动画  {this.state.focused} 布尔值
// classNames 字符串或者对象
// 这个组件会帮你做一些事情，在NavSearch 即将被挂载到页面之前，会往外层的组件上去挂载几个css 的样式
// slide-enter, slide-enter-active, slide-exit, slide-exit-active