import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logInAction } from '../store/reducers/authReducer';
const AuthForm = () =>{
    const dispatch = useDispatch();
    const Auth = useSelector(state=>state.Auth.Auth)
    const login = (e) =>{
        console.log("login Worked")
        e.preventDefault();
        dispatch(logInAction())
        console.log(Auth)
    }

    return(
        <div>
             <form>
                <h1>Welcome back</h1>
                <p>Don't have an account? <Link to = '/registration'>Sign Up</Link></p>
                <input type="email" placeholder='Email*'/><br />
                <input type="password" placeholder='Password'/><br />
                <button onClick = {login}>Log In</button>
            </form>
        </div>
    )
}

export {AuthForm}