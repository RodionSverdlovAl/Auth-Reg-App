import './App.scss';
import { AuthForm } from './components/AuthForm';
import { RegForm } from './components/RegForm';
import {Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  
  let navigate = useNavigate();

  useEffect(() => {
    return navigate("/auth");
  },[]);

  

  return (
    <div className="App">
      <Routes>
        <Route path='/auth' element = {<AuthForm/>}/>
        <Route path='/registration' element = {<RegForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
