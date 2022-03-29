import { ADD_USER } from "./actionType";
import axios from 'axios';
// import { ROOT_URL } from '../config';


export const User=(Input,value)=>{
    return{
        type:ADD_USER,
        id: new Date().getTime().toString(),
        payload:{
            Input:Input,
            value:value
        }
    }
}
export const users = (data) => {
    return {
      type: USERS,
      payload: {
        data:data
      },
    };
  };
export function signUp(fields, success) {
    return function(dispatch) {
        axios.post(`/signUp`, fields)
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
               dispatch({
                   type: AUTHENTICATE_USER,
                   payload: response.data
                })
                success();
             })
             .catch(err => {
                 if(err) { console.log(err) }
             })
     }
 }