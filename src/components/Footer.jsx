import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Footer = () => {
  return (
        <section className="row footer text-dark p-4 mt-4 container-fluid">
          
          <div className="col-md-4 ">
              <h4 className="text-center">About us</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima est exercitationem ut voluptates eius minus, blanditiis maiores placeat debitis fugiat facere excepturi nostrum reiciendis enim sapiente sunt deserunt earum autem quaerat, nobis iusto, dolores ab ipsam! Voluptatum earum quam fugiat?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae labore aliquam, perspiciatis sint ipsam quaerat, aut totam fugiat hic explicabo ducimus tempore ratione facilis fugit animi molestias autem itaque eveniet laboriosam debitis laborum, eius nostrum! Accusamus et beatae distinction.</p>
          </div>

            <div className="col-md-4">
              <h4 className="text-center">Contact Us</h4>
              <form action="">
                  <input type="email" placeholder="Enter your Email..." className="form-control" required/><br/>
                      <textarea name="" id="" cols="30" rows="10" placeholder="Leave a comment..." className="form-control"></textarea><br/>
                          <input type="submit" value="Send a Message" className="btn btn-danger"/>
                          </form>
            </div>

                      <div className="col-md-4 text-center">
                          <h4>Stay Connected and Reach out to us</h4>
                          <a href="https://www.facebook.com"><img src="images/fb.png" alt="" /></a> 
                          <a href="https://www.instagram.com"><img src="images/in.png" alt="" /></a>
                          <a href="https://www.x.com"><img src="images/x.png" alt="" /></a>
                          <p className="mt-3">For any compliments, feedback and compliments kindly reach us on our social media or reach us via our hotlines +254119355142 </p>
                      </div>
               <section class="row bg-dark text-light text-center pt-2">
                <h4 class="fs-5">Developed by Yvonne. &copy; 2026. All Rights Reserved</h4>
               </section>

        </section>
                    

  )
}

export default Footer