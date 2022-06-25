import axios from "axios"
import { loadUsersAction } from "../reducers/usersReducer";
export const fetchUsers =()=>{
    return async function(dispatch){
        try{
            const response = await axios.get('http://localhost:3001/users');
            dispatch(loadUsersAction(response.data))
            console.log(response.data)
        }catch(e){
            alert(e)
        }
        
    }
}