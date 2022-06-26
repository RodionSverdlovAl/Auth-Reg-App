import './App.scss';
import { AuthForm } from './components/AuthForm';
import { RegForm } from './components/RegForm';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import {useDispatch, useSelector} from 'react-redux'
import { logInAction, logOutAction } from './store/reducers/authReducer';
 
function App() {

  let Auth =useSelector(state=>state.Auth.Auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      dispatch(logInAction())
    }else{
      dispatch(logOutAction())
    }
  },[Auth])

  useEffect(() => {
    console.log(Auth)
    if(!Auth)
     return navigate("/auth");
    else{
      return navigate("/dashboard")
    }
  },[Auth]);

  

  return (
    <div className="App">
        <Routes>
          {Auth?
            <Route path='/dashboard' element = {<Dashboard/>}/>
            :
            <>
              <Route path='/auth' element = {<AuthForm/>}/>
              <Route path='/registration' element = {<RegForm/>}/>
            </>
          }
        </Routes>
    </div>
  );
}

export default App;
