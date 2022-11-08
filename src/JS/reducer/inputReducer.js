import { ADD_TODO,CHECK_TODO, FILTER_NOTDONE,FILTER_DONE} from "../actionsTypes/actionsTypes";

const initialState = {
  todos:[],
 
}
const inputReducer = (state=initialState.todos,actions) => {
  switch (actions.type) {
    case ADD_TODO:
        return [...state,actions.payload]   
  
    case CHECK_TODO:
      return state.map((el) => {
        if (el.id === actions.payload) {
          return {
            ...el,
            isDone: true,
          };
        }
        return el;
      });

      case FILTER_NOTDONE:
        console.log(state)
        return state.filter((item) => !item.isDone);

      case FILTER_DONE:
        console.log(state)
        return state.filter((item) => item.isDone);


    default:
        return state;
  }
}

export default inputReducer