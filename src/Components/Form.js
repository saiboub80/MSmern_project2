
import React from 'react';
import SignupForm from './SignupForm';
import Navbar from './Navbar';
import Footer from './Footer';


const Form = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
        <SignupForm />
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default Form