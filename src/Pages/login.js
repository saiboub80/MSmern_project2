
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
export default function Login(){
    const [values, setValues] = useState ({
        
        username:"",
        password:"",
    });
    const loginUser = (e) => {
        e.preventDefault()
        axios.get('/')
    }
    return(
        <div className='container'>
        <div className='app-wrapper'>
        <div>
            <form onSubmit={loginUser}>
                <label>Username</label>
                <input type='username' placeholder='enter username' value={values.username}  onChange={(e) => setValues({...values, username: e.target.value})}/> 
                <label>Password</label>
                <input type='password' placeholder='enter password'  value={values.password} onChange={(e) => setValues({...values, password: e.target.value})}/> 
                <button className='submit'>Login</button>
            </form>
         </div>   
        </div>
        </div>
    )
}
