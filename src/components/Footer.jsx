import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Footer = () => {
  return (
        <section className="row footer text-dark p-4 mt-4 container-fluid">
          
          <div className="col-md-4 ">
              <h4 className="text-center">About us</h4>
              <p>In todays tech-savvy world, electronic devices play a crucial role in enhancing the efficiency, comfort, and entertainment of a modern household. The rapid advancement in technology has provided a wide array of devices that cater to everyday needs, offering convenience, security, connectivity, and enjoyment. Whether its for home automation, entertainment, or personal use, these must-have electronic devices are becoming indispensable in modern homes.</p>
              
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
                      </div><br />
               <section class="row bg-dark text-light text-center pt-2 mt-3">
                <h4 class="fs-5">Developed by Yvonne. &copy; 2026. All Rights Reserved</h4>
               </section>

        </section>
                    

  )
}

export default Footer