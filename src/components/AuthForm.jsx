import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logInAction } from '../store/reducers/authReducer';
import { useEffect } from 'react';
import { fetchUsers } from '../store/asyncActions/users';
import { setCurrentUserAction } from '../store/reducers/currentUserReducer';
const AuthForm = () =>{
    const dispatch = useDispatch();
    const Auth = useSelector(state=>state.Auth.Auth)
    const users = useSelector(state=>state.users.users)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[error, setError] = useState(false)

    useEffect(()=>{
        dispatch(fetchUsers())
      },[])

    const login = (e) =>{
        console.log("login Worked")
        e.preventDefault();

        for(let i =0; i<users.length; i++){
            if(users[i].email == email && users[i].password == password){
                dispatch(logInAction())
                console.log(Auth)
                localStorage.setItem('auth','true')

                localStorage.setItem('userEmail', users[i].email)
                localStorage.setItem('userName', users[i].name)
                
                dispatch(setCurrentUserAction(users[i]))
            }
        }
        setError(true)
       
    }

    return(
        <div>
             <form>
                <h1>Welcome back</h1>
                <p>Don't have an account? <Link to = '/registration'>Sign Up</Link></p>
                {error ? <h3 className='error'>password or email don't right</h3> : <></>}
                <input type="email" value={email} onChange = {e=>setEmail(e.target.value)}  placeholder='Email*'/><br />
                <input type="password" value={password} onChange = {e=>setPassword(e.target.value)} placeholder='Password'/><br />
                <button onClick = {login}>Log In</button>
            </form>
        </div>
    )
}

export {AuthForm}