import React from 'react';
import '../index.css';
import { useState,useRef } from 'react';

const Login = (props) => {
    const[Email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const loginRef = useRef(null);


    const handleSumbit = (e) => {
      e.preventDefault();
      console.log(Email);
      console.log(Password);
      setEmail('');
      setPassword('');
    }
    

 const handleEmailKeydown = (e) => {

  if (e.key === 'Enter') {
    e.preventDefault();
    passwordRef.current.focus();
  }
};

const handlePasswordKeydown = (e) => {
  if (e.key === 'Enter') {
    loginRef.current.focus();
  }
};

  return (
    <>
    <div className="MAIN">
    <div className='Main'>
      <h1 className='Head'>Login</h1>
      <form onSubmit={handleSumbit} className='Form'>
        <label className='Lab'   htmlFor='Email'>Email :</label><br />
        <input value={Email} onChange={(e)=> setEmail(e.target.value)} onKeyDown={handleEmailKeydown} ref={emailRef}  placeholder='User@Gmail.com' type="email" id='Email' name="UserEmail" autoComplete='Off' required/>
        <br />
        <label htmlFor='Pass'>Password :</label><br />
        <input  value={Password} onChange={(e)=> setPassword(e.target.value)}  onKeyDown={handlePasswordKeydown} ref={passwordRef} placeholder='******' type="password" id='Pass' name='password'autoComplete='Off' required />
        <br />
        <br />
        <br />
        <button  tabIndex="0" ref={loginRef}  type='sumbit'>Log in</button>
        </form>
        <br />
        <br />
        <button className='LINK' onClick={()=> props.onformswitch('Sign up')} >no account ? click here to sign up</button>
       
    </div>
    </div>
    </>
  )
}

export default Login;