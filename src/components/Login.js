import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidateData from '../utils/validate';



const Login = () => {

  const [errorMsg,setErrorMsg]=useState();
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInform=()=>{
    setIsSignInForm(!isSignInForm);
  }


  const handlebuttonclick=()=>{
    const message=checkValidateData(email.current.value,password.current.value);
    
    setErrorMsg(message);
    console.log(email.current.value);
    console.log(password.current.value);

    // if(message)return;

    console.log(errorMsg);

  }
  return (
    <div>
      <Header/>
      <div>
        <form 
        onSubmit={(e)=>{e.preventDefault()}}
        className='absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90'
        >
          <h1 className='font-bold text-3xl py-4 text-center' > {isSignInForm?"Sign In" : "Sign Up"} </h1>
          {isSignInForm &&   <input 
            type='text'
            placeholder='Full Name'
            ref={name}
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
          />}
         
          <input 
            type='text'
            ref={email}
            placeholder='Email Address'
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
          />
         
          <input
            type='password'
            ref={password}
            placeholder='Password'
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
          /> 

          <p className='text-red-500 font-bold py-2 text-xl text-center' >{errorMsg}</p>

          <button 
            className='p-4 my-6 bg-red-700 w-full rounded-lg '
            onClick={handlebuttonclick}
          >{isSignInForm?"Sign In" : "Sign Up"}</button>

          <p className='py-4 cursor-pointer text-center'
            onClick={toggleSignInform}
          > {isSignInForm? " Already Registed? Sign In Now": "New to Netflix ? Sign Up Now"} </p>
        </form>
      </div>
    </div>
  )
}

export default Login