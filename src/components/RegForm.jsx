import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logInAction } from '../store/reducers/authReducer'
import { regUserAction } from '../store/reducers/usersReducer'

const RegForm =() =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const users = useSelector(state=>state.users.users)


    const registration = (e) =>{
        e.preventDefault();


        let emailValid = false;
        let passwordValid = false;
        let nameValid = false;
        let checkUnicEmail = true;

        for(let i =0; i<users.length; i++){
            if(users[i].email == email){
                checkUnicEmail = false;
            }
        }

        if( checkUnicEmail == false){
            alert('пользователь с таким емаилом уже существует')
        }

        if(name.length > 2){
            nameValid=true
        }

        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


        if(re.test(email)){
            emailValid = true;
        }
        if(password.length > 3){
            passwordValid = true;
        }

        if(emailValid && passwordValid && nameValid && checkUnicEmail){
            const newUser = {
                name: name,
                email: email,
                password: password,
            }
            dispatch(regUserAction(newUser))
            dispatch(logInAction());
            localStorage.setItem('auth','true')
            localStorage.setItem('userEmail', email)
            localStorage.setItem('userName', name)
        }else{
            alert('Некоректный логин или пароль или имя')
        }

       
    }

    return(
        <div>
            <form>
                <h1>Create an account</h1>
                <p>Alredy have an account? <Link to='/auth'>Log in</Link></p>
                <input value={name} onChange = {e=> setName(e.target.value)} type="text" placeholder='Full name'/><br />
                <input value={email} onChange = {e=>setEmail(e.target.value)} type="email" placeholder='Email*'/><br />
                <input value={password} onChange = {e=>setPassword(e.target.value)} type="password" placeholder='Password'/><br />
                <button onClick={registration}>Sing Up</button>
            </form>
        </div>
    )
}

export {RegForm}