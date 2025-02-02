export const toDoReducer = (state, action) => {
    switch (action.type) { 
        case "ADD_TASK":
            return [...state, { id: new Date().getTime(), title: action.payload, done: false }];
           
        case "REMOVE_TASK":
            return state.filter((item) => item.id !== action.payload);
            
        case "CHANGE_DONE":
            return state.map((item) => item.id === action.payload ? { ...item, done: !item.done } : item);
            
        case "CHANGE_TITLE":
            return state.map((item) => item.id === action.payload.id ? { ...item, title: action.payload.title } : item);
            
        case "SET_TASKS":
            return action.payload;
        
        default:
            return state;
    }
    
}