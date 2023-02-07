import React from 'react'
import Login from './components/Login';
import { useState } from 'react';
import Signup from './components/Signup';


const App = () => {
  const[currentForm,setcurrentForm]=useState('Login');

  const toggleform=(formName)=>{
    setcurrentForm(formName);
  }
 

  return(
    <>
   {currentForm==='Login'?<Login onformswitch={toggleform}/> : <Signup onformswitch={toggleform}/>} 
    </>
  )



}

export default App;