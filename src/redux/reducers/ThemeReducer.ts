type ThemeState = {
    theme: string;
    mode?: string; // Define optional properties as needed
    color?: string;
};

type Action = {
    type: string;
    payload: string; // Assuming payload is a string in this example
};
  
  // Export the type
  export type { ThemeState };

const ThemeReducer = (state = {}, action: Action) => {
    switch(action.type) {
        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload
            }
        default:
            return state
    }
}

export default ThemeReducer