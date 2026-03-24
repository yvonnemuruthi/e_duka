import React from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signin = () => {
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")
   const[loading,setLoading]=useState("")
   const[error,setError]=useState("")

   // hook for navigation
   const navigate=useNavigate("")
   //Function to handle sign in
   const submit=async(e)=>{
    e.preventDefault()
   // console.log("Sign in Function")
   setLoading("Please wait as we Sign you in.....")
   try {
    //create form data object to hold our key value pairs
    //where data is an object
    const data=new FormData()
    // use append to attach/put the key-value pairs in the data object
    data.append("email",email)
    data.append("password",password)
    // send the data object to the flask api via the endpoint.
    //axios- library that allows us to send http requests post/get etc
    //await- used in an asychronous function to enable to wait for response to reach before proceeding with execution of other lines of code
    // response- any request must have a response so response from api is stored in the response variable
    const response=await axios.post("https://yvonne.alwaysdata.net/api/signin",data)
     setLoading("")
    console.log(response)
    //making decision based on the response from flask api
    //setSuccess(response.data.message)
    // clear our hooks start after successful submission
    //making decision based on the response from flask api
    if (response.data.user){
     // storing the logged in user in the localStorage
      localStorage.setItem("user",JSON.stringify(response.data.user))
      //redirect to get products components
      navigate("/")

    } else{
      setError(response.data.message)
    }  
   } catch (error) {
    setLoading("")
    setError(error.message)
    
   }
   }
  return (
      <div className='row mt-4 justify-content-center'>
        <div className='card shadow col-md-6 p-3 text-center'>
        <h2>Signin</h2>
        <h5 className='text-info'>{loading}</h5>
        <h5 className='Text-Danger'>{error}</h5>
        <form onSubmit={submit} >
          {email}
          <input type="email" placeholder='Enter Email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
          {password}
          <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
          <button type='submit' className='btn btn-dark text-light'>Sign In</button>

        </form>
        <p>Do You have an Account <Link to={'/Signup'}>Signup</Link></p>
        </div>
      </div> 
  )
}

export default Signin