import { useDispatch } from "react-redux"
import { logOutAction } from "../store/reducers/authReducer";

const Dashboard = () =>{


    const dispatch = useDispatch();
    const logout = () =>{
        dispatch(logOutAction())
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>Log out</button>
        </div>
    )
}
export {Dashboard}