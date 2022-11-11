import { ADD_TODO,CHECK_TODO,EDIT_TODO} from "../actionsTypes/actionsTypes";

const initialState = []
  
const inputReducer = (state=initialState,actions) => {
  switch (actions.type) {
    case ADD_TODO:
        return [...state,actions.payload]   
  
    case CHECK_TODO:
      return state.map((el) => {
        if (el.id === actions.payload) {
          return {
            ...el,
            isDone: !el.isDone,
          };
        }
        return el;
      });

      case EDIT_TODO:
      return state.map((el) => {
        if (el.id === actions.payload.id) {
          return {
            ...el,
            description: actions.payload.description,
          };
        }
        return el;
      });

    default:
        return state;
  }
}

export default inputReducer