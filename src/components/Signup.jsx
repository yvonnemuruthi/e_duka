import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Signup = () =>{  
  // hooks using use state that will be updated later in the program

 const[username,setUsername]=useState("")
 const[email,setEmail]=useState("")
 const[phone,setPhone]=useState("")
 const[password,setPassword]=useState("")
 const[success,setSuccess]=useState("")
 // AT The Event The submit button is invoked the e.preventDefault ensures the data input is not lost by preventing reloading of pages
 // hook to store the error status
 const [error,setError]=useState("")
 const[loading,setLoading]=useState("")
 const submit=async (e)=>{
  e.preventDefault()
  setError("")
  setSuccess("")
  setLoading("Wait as you get Registered......")
  //console.log("Submit function invoke")
  try {
    // Prepare our data-FormData
    //create FormData object which will allow the key value pairs
    const data=new FormData()
    // append key-value pairs to our data object
    data.append("username",username)
    data.append("email",email)
    data.append("phone",phone)
    data.append("password",password)
   //Axios is a library that helps in sending/making different types of htttp requests to our api ie post /get/put/patch/delete
    const response=await axios.post("https://yvonne.alwaysdata.net/api/signup",data)
    setLoading("")
    //console.log("response",response)
    setSuccess(response.data.message)
    // clear our hooks start after successful submission
    setUsername("")
    setEmail("")
    setPhone("")
    setPassword("")


  } catch (error){
    setLoading("Wait as you get registered......")
    setSuccess("")
    setError(error.message)

  }

 }
  return (
    <div className='row mt-4 justify-content-center'>
      <div className='card shadow col-md-6 p-3 text-center'>
        <h3><i>Welcome To E_Duka</i></h3>
        <h2 className='text-dark'><i>Signup</i></h2>
        <h5 className='text-danger'>{error}</h5>
        <h5 className='text-info'>{loading}</h5>
        <h5 className='text-success'>{success}</h5>
        <form onSubmit={submit}>
          <input type="text" placeholder=' Enter Username' className='form-control'required value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
         <input type="email" placeholder='Enter Email' className='form-control'required value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
          <input type="tel" placeholder='Enter Phone ' className='form-control'required value={phone} onChange={(e)=>setPhone(e.target.value)} /><br />
          <input type="password" placeholder='Enter Password' className='form-control'required value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
          <button type='submit' className='btn btn-dark'>Signup</button><br />
         </form>
         <p>Already have an Account?  <Link to={"/Signin"} className=''>Signin</Link></p>
      </div>
    </div>
  )
}

export default Signup;
