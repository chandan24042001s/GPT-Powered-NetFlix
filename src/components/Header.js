import React, { useEffect } from 'react'
import {  Netflix_Logo, USER_ICON,  } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  Link, useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { addGpMovieResult, toggleGPTSearchView } from '../utils/gptSlice';
import { changeLangauge } from '../utils/configSlice';
import { SUPPORTED_LANGAUGE } from '../utils/constants';
// import { useSelector } from 'react-redux'

const Header = () => {
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  // console.log(user);

  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);
  const handleClick = () => {
    handleGPTSearch();
    handleredux();
  };
  const handleredux=()=>{
    dispatch(addGpMovieResult({gptMovieNames:null,tmdbResults :null}));
  }

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
  
  const navlinks=[
    {name:"Home",link:'/'},
    {name:"Tv Shows",link:'/'},
    {name:"My List",link:'mylist'},
    {name:"Movies",link:'movies'}
  ]

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
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
       <div className='leftside'>
        <img className="h-16 my-2 z-10 mx-auto md:mx-0 "
        alt='logo' src={Netflix_Logo}/>
       </div> 
       {/* <ul className='text-white flex gap-5 text-center pt-5 links'>
         {
           navlinks.map(({name, link}) => {
             return (
               <li key={name}>
                 <Link to={link}>{name}</Link>
               </li>
             )
           })
         }
       </ul> */}
       
        {user && <div className='flex p-2 justify-between rightside' >
       {showGPTSearch && (<select className='m-2 bg-gray-900 text-white rounded-lg pr-2 my-5' onChange={handleLangaugeChange} >
          {
            SUPPORTED_LANGAUGE.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))
          }
        </select>)}
          <button className='py-2 px-4 py-3 mx-4 my-5 bg-purple-800 text-white rounded-lg'
          onClick={handleClick} 
          > {showGPTSearch? "HomePage": "🔍 GPT-Search"} </button>
          <img className='hidden md:block h-12 w-12 my-5 rounded-lg' src={USER_ICON} alt='logo' />
          <button className='font-bold text-white col-span-3 w-full md:w-auto m-4 py-3 my-5 md:px-4 bg-LightRed text-white rounded-lg' onClick={handleSignOut} >Sign Out</button> 
        </div>
}
        </div>
        
      
      
  
    </div>
  )
}

export default Header