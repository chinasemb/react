import React, {PureComponent} from 'react'
import { LoginWrapper, LoginBox, LoginInput, LoginBtn } from './style'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'

class Login extends PureComponent{
    render() {
        const { loginStatus } = this.props

        if(!loginStatus) {
            return (
                <div>
                    <LoginWrapper>
                        <LoginBox>
                            <LoginInput placeholder='账号' ref={(input) => {this.account = input}}></LoginInput>
                            <LoginInput placeholder='密码' type='password' ref={(input) => {this.password = input}}></LoginInput>
                            <LoginBtn onClick={() =>{ this.props.login(this.account, this.password) }}>确认登录</LoginBtn>
                        </LoginBox>
                    </LoginWrapper>
                </div>
            )
        }else {
            return <Redirect to='/'></Redirect>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})


const mapDispatch = (dispatch) => ({
    login(accountElement, passwordElement) {
        // console.log(accountElement.value, passwordElement.value);
        dispatch(actionCreators.login(accountElement.value, passwordElement.value))
    }
})

export default connect(mapState, mapDispatch)(withRouter(Login))