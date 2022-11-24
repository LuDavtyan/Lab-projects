import {
    MINUTE_TEXT_CREATE,
 
} from './types'


const initialState = {
    minute: []
}
export const minuteReducer = (state = initialState, action) => {

    switch(action.type){
        case  MINUTE_TEXT_CREATE:
              return{
                  ...state,
                  minute: [...state.minute, action.data]
              }
  
           
          default:
              return state
    }  
  
  }   