import * as actionTypes from './constants'
// import { fromJS } from 'immutable'
import axios from 'axios'


const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    value: false
})


export const login = (account, password) => {
    return (dispatch) => {
        // console.log(123);
        axios.get('/api/login.json?account=' + account + '&password=' + password).then( (res) => {
            // console.log(res.data);
            const result = res.data.data
            if(result){
                dispatch(changeLogin())
            }else{
                console.log('login error');
            }
        } ).catch( () => {
            console.log('err')
        } )
    }
}