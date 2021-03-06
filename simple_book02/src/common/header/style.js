import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div `
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
}) `
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div `
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div `
    line-height: 56px;
    padding: 0 15px;
    fontsize: 17px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a
    }
`
// 有了padding width 就会从160px 撑开为 200px,不像撑开
// 就要设置 box-sizing: border-box;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
}) `
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #808080;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 250px;
    }
    &.slide-exit {
        width: 250px;
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`

export const SearchInfoList = styled.div `
    overflow: hidden;
`

export const SearchInfo = styled.div `
    position: absolute;
    left: 0;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`

export const SearchInfoTitle = styled.div `
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span `
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 14px;
        margin-right: 8px;
        transition: all .2s ease-in;
        ${'' /* transform: rotate(0deg);  一开始transform 也不让它有0 deg了 本身什么都没有，就是不旋转的意思 */}
        ${'' /* 以自己的中心为旋转中心 */}
        transform-origin: center center;
    }
`
export const SearchInfoItem = styled.a `
    float: left;
    display: block;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const Addition = styled.div `
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;

`

export const Button = styled.div `
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`

export const SearchWrapper = styled.div `
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 0px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`