import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'


const GetProducts = () => {
  const[products,setProducts]=useState([])//empty array
  const[loading,setLoading]=useState("")
  const [error,setError]=useState("")
  const navigate=useNavigate()

   const img_url="http://yvonne.alwaysdata.net/static/images/"

  const getProducts=async ()=>{
    setError("")
    setLoading("Wait as we load products...")
    try {
      const response =await axios.get("http://yvonne.alwaysdata.net/api/get_product_details")
      console.log(response)
      setLoading("")
      setProducts(response.data)
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
  
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    
    <div className='row mt-4 container-fluid'>
      <Carousel/>
      <h2 className='mt-3 text-primary'>Available Products</h2>
      <h5 className='text-info'>{loading}</h5>
      <h5 className='text-danger'>{error}</h5>
        {/*map over products and display them */}
        {products.map((product)=>(
        <div className='justify-content-center col-md-3'>
          <div className='card shadow p-4 text-center mb-4 card-margin'>
            <img src={img_url+product.product_photo} alt=""className='product_img mt-2'/>
            <div className='card-body'>
              <h5 className='mt-2'>{product.product_name}</h5>
              <p className='text-muted'>{product.product_description}</p>
              <b className='mt-3 text-danger'>Ksh :{product.product_cost}</b><br />
              <button className='btn btn-dark ' onClick={()=>navigate("/makepayment",{state:{product}})}> Buy Now</button>
            </div>
          </div>
          
        </div>
        

        ))
        }
        <Footer/>
    </div>
    
  )
}

export default GetProducts
