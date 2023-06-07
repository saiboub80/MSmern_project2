
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


    export default function Login(){
        const navigate = useNavigate()
        const [values, setValues] = useState ({
            username:"",
            password:"",
        });
        const loginUser = async (e) => {
            e.preventDefault()
            const {username, password} = values
            try{
                const{data:values} = await axios.post('/login',{
                    username,
                    password
                })
                if(values.error){
                    toast.error(values.error)
                }else{
                    setValues({})
                    toast.success(`Login Successful, Welcome ${values.name}`)
                    navigate('/')
                }
            }catch(error){
    
            }
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
