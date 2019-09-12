import React, { Component } from 'react'
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

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    render () {
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
                            in={this.state.focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className= { this.state.focused ? 'focused' : '' }
                                onFocus= {this.handleInputFocus}
                                onBlur= {this.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className= { this.state.focused ? 'focused iconfont' : 'iconfont' }>&#xe615;</i>
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

    handleInputFocus () {
        this.setState({
            focused: true
        })
    }

    handleInputBlur () {
        this.setState({
            focused: false
        })
    }

}

export default Header

// timeout 动画执行时长
// in 控制入场出厂动画  {this.state.focused} 布尔值
// classNames 字符串或者对象
// 这个组件会帮你做一些事情，在NavSearch 即将被挂载到页面之前，会往外层的组件上去挂载几个css 的样式
// slide-enter, slide-enter-active, slide-exit, slide-exit-active