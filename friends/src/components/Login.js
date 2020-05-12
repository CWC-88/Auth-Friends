import React, {useState} from 'react'
import {axiosWithAuth} from '../axiosWithAuth'

const Login = (props) =>{
    const [credentials, setCredentials] = useState({});
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
        })
    }
const handleChange = e =>{
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
    })
}
return(
    <div>
        <form onSubmit={login}>
            <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}/>
<input
    type="text"
    name="password"
    value={credentials.password}
    onChange={handleChange}/>

    <button>Log in</button>

        </form>
    </div>
)


}


export default Login