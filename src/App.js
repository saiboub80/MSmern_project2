import React from "react"
//import SignupForm from "./Components/SignupForm"; 
//import Form from "./Components/Form";
import "../src/css/App.css";
import {Routes, Route} from 'react-router-dom'
import Register from "./Pages/register";
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
import Login from "./Pages/login";
import Home from "./Pages/home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true


const App = () => {
  return (
<>
     <Navbar />
    <Toaster position="bottom-left" toastOptions={{duration: 4000}} />
   <Routes>
    <Route path ='/' element={<Home />} />
    <Route path ='/register' element={<Register />} />
    <Route path ='/login' element={<Login/>} />
   </Routes>
   <Footer />
</>
  )

}

export default App;
