import styled from 'styled-components'
import logoPic from '../../static/header-small-sprites3.png'

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0
`

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display:block;
    width: 140px;
    background: url(${logoPic})no-repeat 14px 14px;
    ${'' /* background-size:contain ; */}
    height: 56px;
    line-height: 33px
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 50px;
    box-sizing: border-box;
    ${'' /* display: flex; */}
    ${'' /* background: yellow */}
`

export const NavItem = styled.div`
    line-height: 56px;
    text-align: center;
    font-size: 17px;
    padding: 0 15px;
    color: #333;
    &.left{
        float: left
    };
    &.right{
        float: right
        color: #969696
    };
    &.active{
        color: #ea6f5a
    };
`



// export const BottomBar = styled.div`
//     min-width: 60px;
//     height: 5%;
//     width: 100%;
//     bottom: 0;
//     left: 0;
//     background: black;
//     display: none;
//     &.active{
//         display: block
//     }
// `
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    color: pink;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width:30px;
        line-height:30px;
        border-radius: 15px;
        text-align:center;
        &.focused {
            background: #777;
            color: orange;
        }
    }
    .change {
        display: block;
        float: left;
        color: orange;
        margin-right: 13px;
        font-size: 12px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height:38px;
    border: none;
    outline: none;
    border-radius: 56px;
    background: #eee;
    margin-top: 9px;
    padding: 0 34px 0 20px;
    margin-left: 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 240px;
        padding: 0 45px 0 20px;
    }
    &.slide-enter{
        width: 160px;
        transition:all .2s ease-out
    }
    &.slide-enter-active{
        width: 240px
    }
    &.slide-exit{
        transition:all .2s ease-out
    }
    &.slide-exit-active{
        width: 160px
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    line-height:38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background:#ec6149
    }
`

export const SearchInfo = styled.div`
    &.hover:hover {
        box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
        border-color: #eee;
        transition: all .2s ease-in-out;
    }
    position: absolute;
    left: 0;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    background: #fff;
    ${'' /* height: 100px; */}
    box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696; 
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
`

export const SearchInfoItem = styled.a`
    &.hover:hover {
        -webkit-transform: translateY(-1px);
        -ms-transform: translateY(-1px);
        transform: translateY(-1px);
        -webkit-box-shadow: 0px 0px 4px #999;
        box-shadow: 0 0 4px #999;
        -webkit-transition: all .8s ease-out;
        transition: all .8s ease-out;
    }
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: orange;
    border-radius: 3px;
    display: block;
    float: left;
`

export const SearchInfoList = styled.div`
    ${'' /* overflow: hidden  */}
`