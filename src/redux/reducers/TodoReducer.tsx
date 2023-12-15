import { TodoList,Todo } from "../../types/gloableTypes";
interface Action {
    type: string,
    payload: Todo
}

const initialState : TodoList =[]

const TodoReducer = (state=initialState, action: Action):TodoList => {
    console.log("state",state)
    switch (action.type) {
        case "ADD_TO":
            if(action.payload){
                return [...state,action.payload]
            };
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id)
        default:
            return state;
    }
}

export default TodoReducer