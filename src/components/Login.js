import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, updateProfile 
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { Netflix_Bg, USER_ICON } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const addedUser=useSelector(store=>store.user);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handlebuttonclick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMsg(message);
    console.log(email.current.value);
    console.log(password.current.value);

    if (message) return;

    if (!isSignInForm) {
      //sign-Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL:USER_ICON
          }).then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            console.log(addedUser)
            // navigate("/browse");


          }).catch((error) => {
            // An error occurred
            setErrorMsg(error);
            // ...
          });

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      // Sign-In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          console.log(addedUser);
            // navigate("/browse");
         
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "- " + errorMessage);
        });
    }

    console.log(errorMsg);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className="h-screen object-cover" src={Netflix_Bg} alt="logo" />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90"
        >
          <h1 className="font-bold text-3xl py-4 text-center">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}{" "}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
        
              placeholder="Full Name"
              ref={name}
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />

          <p className="text-red-500 font-bold py-2 text-xl text-center">
            {errorMsg}
          </p>

          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg "
            onClick={handlebuttonclick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-4 cursor-pointer text-center"
            onClick={toggleSignInform}
          >
            {" "}
            {isSignInForm
              ? "New to Netflix ? Sign Up Now"
              : " Already Registed? Sign In Now"}{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
