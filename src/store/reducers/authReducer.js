const defaultState = {
    Auth: false,
}

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const authReducer = (state = defaultState, action)=>{
    switch(action.type){
        case LOG_IN:
            return {...state, Auth: true}
        case LOG_OUT:
            return {...state, Auth: false}
        default:
            return state
    }
}

export const logInAction = () =>({type: LOG_IN})
export const logOutAction = () =>({type: LOG_OUT})