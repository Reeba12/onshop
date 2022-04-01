import { ADD_USER } from "./actiontype";
import { DELETE_USER } from "./actiontype";
// import axios from 'axios';
// import { ROOT_URL } from '../config';


export const User=(data)=>{
    return{
        type:ADD_USER,
        id: new Date().getTime().toString(),
        payload:{
            data:data
        }
    }
}
export const deleteUser = (data) => {
    return {
      type: DELETE_USER,
      payload: {
        data:data
      },
    };
}
// export const users = (data) => {
//     return {
//       type: USERS,
//       payload: {
//         data:data
//       },
//     };
//   };
// export function signUp(fields, success) {
//     return function(dispatch) {
//         axios.post(`/signUp`, fields)
//             .then(response => {
//                 const { token } = response.data;
//                 localStorage.setItem('token', token);
//                dispatch({
//                    type: AUTHENTICATE_USER,
//                    payload: response.data
//                 })
//                 success();
//              })
//              .catch(err => {
//                  if(err) { console.log(err) }
//              })
//      }
//  }