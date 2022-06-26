import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { logOutAction } from "../store/reducers/authReducer";
import { useState } from "react";
import {NavLink} from 'react-router-dom'

const Dashboard = () =>{


    const dispatch = useDispatch();
    const logout = () =>{
        dispatch(logOutAction())
        localStorage.removeItem('auth')
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userName')
    }


     const [currentUserEmail, setCurrentUserEmail] = useState(useSelector(state=>state.currentUser.email))
     const [currentUserName , setCurrentUserName] = useState(useSelector(state=>state.currentUser.name))
    

    useEffect(()=>{
        setCurrentUserEmail(localStorage.getItem('userEmail'))
        setCurrentUserName(localStorage.getItem('userName'))
    },[])

    return(
        <div className="Dashboard">
            <div className="user_info">
                <h3>Hi, {currentUserName}</h3>
                <p>{currentUserEmail}</p>
            </div>
            <div className="sidebar">
                <h2>Account</h2>
                <div className="link"><NavLink to='#'>Account Information</NavLink> <br /></div>
                <div className="link"> <NavLink to= '#'>Address Book</NavLink> <br /></div>
                
               
                <button onClick={logout}>Log out</button>
            </div>
            
        </div>
    )
}
export {Dashboard}