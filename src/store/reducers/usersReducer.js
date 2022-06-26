const defaultState = {
    users: [],
}

const LOAD_USERS = "LOAD_USERS";
const REG_USER = "REG_USER";


export const usersReducer = (state = defaultState, action) =>{
    switch(action.type){
        case LOAD_USERS:
            return {...state, users: [...state.users,...action.payload]}
        case REG_USER:
            return {...state, users:[...state.users, action.payload]}
        default:
            return state
    }
}

export const loadUsersAction = (payload) =>({type: LOAD_USERS, payload})
export const regUserAction = (payload) =>({type: REG_USER, payload})