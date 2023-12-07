import React from 'react'
import { Netflix_Bg, Netflix_Logo, user_Logo } from '../utils/constants'
//import { auth } from '../utils/firebase';
// import { useSelector } from 'react-redux'

const Header = () => {
  const handleSignOut=()=>{

 
  }
  return (
    <div>
      <div className='w-full absolute px-8 py-6 bg-gradient-to-b from-black z-10 flex justify-between'>
       <div  >
        <img className="h-14 "
        alt='logo' src={Netflix_Logo}/>
        </div>
       <div className='flex p-2' >
          <img className='h-12 w-12' src={user_Logo} alt='logo' />
          <button className='font-bold text-white' onClick={handleSignOut} >(Sign Out)</button>
        </div>

      
      </div>
      
    <div>
      <img className='absolute h-full' 
      alt='logo' src={Netflix_Bg} />
     
    </div>
    </div>
  )
}

export default Header