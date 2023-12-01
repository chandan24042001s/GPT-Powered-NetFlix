import React from 'react'
import { Netflix_Bg, Netflix_Logo } from '../utils/constants'

const Header = () => {
  return (
    <div>
      <div className='w-full absolute px-8 py-6 bg-gradient-to-b from-black z-10'>
        <img className="h-14 "
        alt='logo' src={Netflix_Logo}/>
      </div>
    <div>
      <img className='absolute h-full' 
      alt='logo' src={Netflix_Bg} />
     
    </div>
    </div>
  )
}

export default Header