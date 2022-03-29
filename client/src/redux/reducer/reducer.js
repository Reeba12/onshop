import { ADD_USER } from "../action/actiontype";

const initialState={
    user:[]
}

export const reducer=(state=initialState,action)=>{
    switch(action?.type){
        case ADD_USER:
            const { data, id} = action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            data:data,
            id: id,
          },
        ],
      };
  
    default:
      return state;
            
    }
}