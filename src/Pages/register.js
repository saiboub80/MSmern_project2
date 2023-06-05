import {useState} from "react";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
      name:"",
      age:"",
      username:"",
      email:"",
      password:"",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const {name, age, username, email, password} = values
    try {
      const {values} = await axios.post('/register', {
        //send palyload
          name, age, username, email, password
      })
      if(values.error){
        toast.error(values.error)
      }else{
        setValues({})
        toast.success('Login Success, Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="container">
    <div className="app-wrapper">
    <div>
      <h2 className = "title">Add Information</h2>
    </div>
    <form className="form-wrapper">
      <div className="Name">
      <label className= "label">Name</label>
    <input className= "input"
    type ="text"  
    name="name" 
    value={values.name} 
    onChange={(e) => setValues({...values, name: e.target.value})}/>
    </div>

    <div className="Your Age">
      <label className= "label">Age</label>
    <input className= "input"
    type ="number"  
    name="age" 
    value={values.age} 
    onChange={(e) => setValues({...values, age: e.target.value})}/>
    </div>

    <div className="User Name">
      <label className= "label">UserName</label>
    <input className= "input" 
    type ="username" 
    name="username" 
    value={values.username} 
    onChange={(e) => setValues({...values, username: e.target.value})}/>
    </div>

    <div className="Email">
      <label className= "label">Email</label>
    <input className= "input"
    type ="email" 
    name="email" 
    value={values.email} 
    onChange={(e) => setValues({...values, email: e.target.value})}/>
    </div>

    <div className="password">
      <label className= "label">Password</label>
    <input className= "input"
    type ="password"   
    name="password" 
    value={values.password} 
    onChange={(e) => setValues({...values, password: e.target.value})}/>
    </div>

    <div>
      <button className="submit" onClick={registerUser}>Sign Up</button>
    </div>
    
    </form>
    </div>
  </div>
  );
 };

 // const handleChange =(event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleFormSubmit = (event) => {
  //  event.preventDefault();
  //  axios.get('/')
    
  // };