import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm  , setisSignInForm] = useState(true)
    const toggleSignInForm = ()=>{
            setisSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header />

        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt ="bg" />
        </div>


        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-75 text-white'>
            <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Username' className='p-4 my-2 w-full bg-gray-800'/>}
            <input type='text' placeholder='email' className='p-4 my-2 w-full bg-gray-800'/>

            <input  className='p-4 my-2 w-full bg-gray-800' type='password' placeholder='Password'/>

            <button className='p-4 my-4 bg-red-700 w-full font-bold'> {isSignInForm ? "Sign In" : "Sign Up" }</button>

            <p onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix ? Sign Up now" : "Already a User ? Sign In now"}</p>
        </form>

    </div>
  )
}

export default Login