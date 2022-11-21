import { 
     LIMITS_TEXT_CREATE,
     WEB_NAME_DELETE, 
     WEB_NAME_UPDATE, 
} from './types';
  
const initialState = {
    name: [],
}

export const limitsReducer = (state = initialState, action) => {

  switch(action.type){
      case LIMITS_TEXT_CREATE:
            return{
                ...state,
                name: [...state.name, action.data],
            }

      case WEB_NAME_UPDATE:
            const { data } = action;
            const { name } = state;
           

            const itemIndex = name.findIndex(res => res.id === data.id)
           
            const nextName = [
                ...name.slice(0, itemIndex),
                data,
                ...name.slice(itemIndex + 1)
            ];


            return{
                ...state,
                name: nextName
               
            }
      case WEB_NAME_DELETE:
        return(() => {
            const { id} = action;
            const { name } = state;
            const itemIndex = name.findIndex(res => res.id === id)
            
            const nextName = [
                ...name.slice(0, itemIndex),
                ...name.slice(itemIndex + 1)
            ];

            return{
                ...state,
                name: nextName
               
            }
        })();
         
        default:
            return state
  }  

}   