import { 
    SETTINGS_CREATE,
    DOMAIN_IGNORED_UPDATE,
    DOMAIN_IGNORED_DELETE,

} from './types';

const initialState = {
    name: []
}

export const settingsReducer = (state = initialState, action) => {

   switch(action.type){
      case SETTINGS_CREATE:
        return{
            ...state,
            name:[...state.name, action.data]
        }

      case DOMAIN_IGNORED_UPDATE:
         const { data } = action;
         const { name } = state;
         const itemIndex = name.findIndex(res => res.id === data.id)

         const nextName = [
              ...name.slice(0, itemIndex),
              data,
              ...name.slice(itemIndex + 1 )
         ];

         return{
            ...state,
            name: nextName
         }

      case DOMAIN_IGNORED_DELETE:
          return(() => {
            const { id } = action;
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