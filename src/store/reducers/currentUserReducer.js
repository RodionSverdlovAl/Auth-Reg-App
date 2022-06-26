const defaultState = {
    email: '',
    name: '',
}

const SET_CURRENT_USER = "SET_CURRENT_USER";

export const currentUserReducer = (state= defaultState, action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return {...state, email: action.payload.email, name: action.payload.name}
        default:
            return state;
    }
}

export const setCurrentUserAction = (payload) =>({type: SET_CURRENT_USER, payload})