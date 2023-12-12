import React from 'react'
import { Netflix_Bg, Netflix_Logo, user_Logo } from '../utils/constants'
//import { auth } from '../utils/firebase';
// import { useSelector } from 'react-redux'

const Header = () => {
  const handleSignOut=()=>{

 
  }
  return (
    <div>
     
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="h-14 z-10 "
        alt='logo' src={Netflix_Logo}/>
         <div className='flex p-2 justify-between' >
          <img className='h-12 w-12' src={user_Logo} alt='logo' />
          <button className='font-bold text-white' onClick={handleSignOut} >(Sign Out)</button>
        </div>
        </div>
        
      
      
  
    </div>
  )
}

export default Header