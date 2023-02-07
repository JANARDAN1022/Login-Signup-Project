import React from 'react';
import { useState,useRef } from 'react';
import '../index.css';

const Signup = (props) => {
    const[Email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const[Name,setName]=useState('');
    const EmailRef = useRef(null);
    const PasswordRef = useRef(null);
    const NameRef = useRef(null);
    const SignupRef = useRef(null);

    const handleEmailkeydown = (e) => {

      if (e.key === 'Enter') {
        e.preventDefault();
        PasswordRef.current.focus();
      }
    };
    
    const handlePasswordkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        NameRef.current.focus();
      }
    }
    const handleNamekeydown = (e) => {
      if (e.key === 'Enter') {
        SignupRef.current.focus();
      }
    }

    const handleSumbit=(e)=>{
        e.preventDefault();
        console.log("Email : " + Email);
        console.log("Password :"+ Password);
        console.log("UserName :"+ Name);
        setEmail("");
        setPassword("");
        setName("");
    }

  return (
    <>
    <div className="MAIN">
    <div className='Main'>
      <h1 className='Head'>Sign up</h1>
      <form onSubmit={handleSumbit} className='Form'>
        <label className='Lab'   htmlFor='Email'>Email :</label><br />
        <input value={Email} onChange={(e)=> setEmail(e.target.value)} onKeyDown={handleEmailkeydown}ref={EmailRef} placeholder='User@Gmail.com' type="email" id='Email' name="UserEmail" autoComplete='Off' required/>
        <br />
        <label htmlFor='Pass'>Password :</label><br />
        <input  value={Password} onChange={(e)=> setPassword(e.target.value)} onKeyDown={handlePasswordkeydown}ref={PasswordRef} placeholder='******' type="password" id='Pass' name='password'autoComplete='Off' required />
        <br />
        <label htmlFor='Name'> Name :</label><br />
        <input value={Name} onKeyDown={handleNamekeydown} ref={NameRef} placeholder='username' onChange={(e)=> setName(e.target.value)} type='Name' id='Name' name='Name' autoComplete='Off' required />
        <br />
        <br />
        <button tabIndex="0" ref={SignupRef} type='sumbit'>Sign up</button>
        <br />
        <br />
        <button className='LINK1' onClick={()=>props.onformswitch('Login')}>Already Have an account? Log in</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default Signup;