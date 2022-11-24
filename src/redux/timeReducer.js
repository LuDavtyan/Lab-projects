import {
    TIME_TEXT_CREATE,
    TIME_TEXT_UPDATE,
    TIME_TEXT_DELETE
} from './types'


const initialState = {
    time: [],
    minute: []
}
export const timeReducer = (state = initialState, action) => {

    switch(action.type){
        case  TIME_TEXT_CREATE:
              return{
                  ...state,
                  time: [...state.time, action.data],
                  minute: [...state.minute, action.data]
              }
  
        case TIME_TEXT_UPDATE:
              const { data } = action;
              const { time} = state;
             
  
              const itemIndex = time.findIndex(res => res.timeId === data.timeId)
             
              const nextName = [
                  ...time.slice(0, itemIndex),
                  data,
                  ...time.slice(itemIndex + 1)
              ];
  
  
              return{
                  ...state,
                  name: nextName
                 
              }
        case  TIME_TEXT_DELETE:
          return(() => {
              const { timeId} = action;
              const { time } = state;
              const itemIndex = time.findIndex(res => res.timeId === timeId)
              
              const nextName = [
                  ...time.slice(0, itemIndex),
                  ...time.slice(itemIndex + 1)
              ];
  
              return{
                  ...state,
                  time: nextName
                 
              }
          })();
           
          default:
              return state
    }  
  
  }   