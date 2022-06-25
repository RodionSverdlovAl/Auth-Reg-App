import {Link} from 'react-router-dom'

const RegForm =() =>{
    return(
        <div>
            <form>
                <h1>Create an account</h1>
                <p>Alredy have an account? <Link to='/auth'>Log in</Link></p>
                <input type="text" placeholder='Full name'/><br />
                <input type="email" placeholder='Email*'/><br />
                <input type="password" placeholder='Password'/><br />
                <button>Sing Up</button>
            </form>
        </div>
    )
}

export {RegForm}