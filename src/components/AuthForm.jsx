import {Link} from 'react-router-dom'
import { publicRoutes } from '../router/routes'
const AuthForm = () =>{
    return(
        <div>
             <form>
                <h1>Welcome back</h1>
                <p>Don't have an account? <Link to = '/registration'>Sign Up</Link></p>
                <input type="email" placeholder='Email*'/><br />
                <input type="password" placeholder='Password'/><br />
                <button>Log In</button>
            </form>
        </div>
    )
}

export {AuthForm}