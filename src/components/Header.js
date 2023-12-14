import React, { useEffect } from 'react'
import {  Netflix_Logo, USER_ICON,  } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLangauge } from '../utils/configSlice';
import { SUPPORTED_LANGAUGE } from '../utils/constants';
// import { useSelector } from 'react-redux'

const Header = () => {
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(user);

  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);


  const handleGPTSearch=()=>{
    dispatch(toggleGPTSearchView());
  }

  const handleLangaugeChange=(e)=>{
    dispatch(changeLangauge(e.target.value));
  }

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {
      //  navigate("/");
    })
    .catch((error) => {
      navigate("/error");
    });
 
  }
  
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const {uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
        // ...
      } 
    
      else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
;      }
    });
    return ()=>{unSubscribe();
    }
  },[])
  return (
    <div>
     
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between">
        <img className="h-14 z-10 "
        alt='logo' src={Netflix_Logo}/>
       
        {user && <div className='flex p-2  justify-between' >
       {showGPTSearch && (<select className='m-2 bg-gray-900 text-white' onChange={handleLangaugeChange} >
          {
            SUPPORTED_LANGAUGE.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>
            ))
          }
        </select>)}
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGPTSearch}
          > {showGPTSearch? "HomePage": "GPT-Search"} </button>
          <img className='h-12 w-12' src={USER_ICON} alt='logo' />
          <button className='font-bold text-white' onClick={handleSignOut} >(Sign Out)</button> 
        </div>
}
        </div>
        
      
      
  
    </div>
  )
}

export default Header