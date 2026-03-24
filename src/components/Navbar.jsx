import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link to={'/'} className='navbar-brand'><b>E-Duka</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*collapsible content*/}
                    <div className="collapse navbar-collapse" id='navbarcollapse'>
                        <div className="navbar-nav">
                            <Link to={"/"} className='nav-link active'>Home</Link>
                            <Link to={"/addproduct"} className='nav-link'>Add Product</Link>
                            <Link to={"/signin"} className='nav-link'> Signin</Link>
                            <Link to={"/signup"} className='nav-link'>Signup</Link>
                             


                        </div>
                    </div>
                </nav>

            </div>

        </div>
  )
}

export default Navbar