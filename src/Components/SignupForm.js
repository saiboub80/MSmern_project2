
// import React, {useState} from "react";
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Navigate, useNavigate } from "react-router-dom"
// import axios from "axios";

//   const SignupForm = () => {
//     const navigate = useNavigate()
//     const [values, setValues] = useState ({
//       name:"",
//       age:"",
//       username:"",
//       email:"",
//       password:"",
//   });

//   const handleChange =(event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };
//    const handleFormSubmit = (event) => {
//      event.preventDefault();
//       };
//       axios
//       .post('/signup', values)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err))
    
//   return (
//     <div className="container">
//     <div className="app-wrapper">
//     <div>
//       <h2 className = "title">Add Your Information</h2>
//     </div>
//     <form className="form-wrapper">
//       <div className="Name">
//       <label className= "label">Full Name</label>
//     <input className= "input"
//     type ="text"  
//     name="name" 
//     value={values.name} 
//     onChange={handleChange}/>
//     </div>

//     <div className="Your Age">
//       <label className= "label">Age</label>
//     <input className= "input"
//     type ="number"  
//     name="age" 
//     value={values.age} 
//     onChange={handleChange}/>
//     </div>

//     <div className="User Name">
//       <label className= "label">User Name</label>
//     <input className= "input" 
//     type ="username" 
//     name="username" 
//     value={values.username} 
//     onChange={handleChange}/>
//     </div>

//     <div className="Email">
//       <label className= "label">Email</label>
//     <input className= "input"
//     type ="email" 
//     name="email" 
//     value={values.email} 
//     onChange={handleChange}/>
//     </div>

//     <div className="password">
//       <label className= "label">Password</label>
//     <input className= "input"
//     type ="password"   
//     name="password" 
//     value={values.password} 
//     onChange={handleChange}/>

//       <button className="submit" onClick ={handleFormSubmit}> Sign Up</button>
//     </div>
    
//     </form>
//     </div>
//   </div>
//   );
//  };
//  export default SignupForm
