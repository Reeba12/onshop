import { ADD_USER } from "../action/actiontype";

const initialState={
    user:[]
}

export const reducer=(state=initialState,action)=>{
    switch(action?.type){
        case ADD_USER:
            // const { data} = action.payload;

      // return {...state,user:[...state?.user]} 
      const  data  = action.payload.data;
      return {
        ...state,
        data: {
          // id: id,
          user: data,
        },
        // authenticated: true,
      };
      // {
      //   ...state,
      //   user: [
      //     ...state.data,
      //     {
      //       data:data,
      //       id: id,
      //     },
      //   ],
      // };
  
    default:
      return {state};
            
    }
}