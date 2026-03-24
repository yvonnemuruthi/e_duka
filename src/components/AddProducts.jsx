import React, { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {
  
  const [product_name,setProductname]=useState("")
  const [product_description,setProductdescription]=useState("")
  const [product_cost,setProductcost]=useState("")
  const[product_photo,setProductphoto]=useState("")
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  const submit=async (e)=>{
    e.preventDefault()
  
  setLoading("Kindly Wait as we append your product")
  try {
    const data=new FormData()
     data.append("product_name",product_name)
     data.append("product_description",product_description)
     data.append("product_cost",product_cost)
     data.append("product_photo",product_photo)

     //response
     const response= await axios.post("http://yvonne.alwaysdata.net/api/add_product",data)
     console.log(response)
      setLoading("")
    //console.log("response",response)
    setSuccess(response.data.message)
    // clear our hooks start after successful submission
    setProductname("")
    setProductdescription("")
    setProductcost("")
    setProductphoto("")

  } catch (error){
    setLoading("")
    setSuccess("Product uploaded successfully!")
    setError(error.message)

    
  }
}

  
  return (
          <div className='row mt-4 justify-content-center'>
            <div className='card shadow col-md-6 p-3 text-center'>
                <h2>AddProducts</h2>
                <h5 className='text-info'>{loading}</h5>
                <h5 className='text-primary'>{success}</h5>
                <h5 className='text-danger'>{error}</h5>
                
              <form onSubmit={submit}>
              {product_name}
               <input type="text" placeholder='Enter product name' className='form-control' required value={product_name} onChange={(e)=>setProductname(e.target.value)} /><br />
              {product_description}
              <input type="text" placeholder='Describe your product' className='form-control' value={product_description}required onChange={(e)=>setProductdescription(e.target.value)} /><br />
              {product_cost}
              <input type="number" placeholder='Product cost' className='form-control' value={product_cost} required onChange={(e)=>setProductcost(e.target.value)}/> <br />
              <h5 className='text-primary'>Browse/Upload Product Photo</h5>
              
             <input type="file" className='form-control'required  accept="image/*" onChange={(e)=>setProductphoto(e.target.files[0])}/> <br />
             <button type='submit' className='btn btn-primary'>Upload Product</button>

            </form>
           </div>
          </div>
  )
}


export default AddProducts