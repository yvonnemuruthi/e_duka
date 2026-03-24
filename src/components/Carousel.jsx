import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const Carousel = () => {
  return (
    <section className="row mb-3 mt-3">
            <div className="col-md-12">
                {/* <!-- The carousel is the main element that entails the carousel itself, carousel inner and carousel item --> */}
                <div className="carousel slide"data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- The carousel slide enables the carousel items to slide from one to another -->
                    <!-- Wrapper  encloses the carousel items--> */}
                     <div className="carousel-inner" >
                        {/* <!-- Carousel items this entails the pictures to be potrayed--> */}
                         <div className="carousel-item active">
                            <img src="images/slide1.jpg" alt="slide1" className=" w-100 d-block"/>
                         </div>
                         <div className="carousel-item">
                            <img src="images/slide2.jpg" alt="advert2" className="w-100 d-block"/>

                         </div>
                         <div className="carousel-item">
                            <img src="images/slide3.jpg" alt="slide3" className="w-100 d-block"/>
                         </div>
                         <div className="carousel-item">
                            <img src="images/slide4.jpg" alt="slide4" className="w-100 d-block"/>
                         </div>

                     </div>
                     {/* <!-- Controllers --> */}
                      {/* <-- The className<carouusel-control-prev> aids in ensuring the previous icon or the next icon to be in line with the carousel for easy navigation by the person using the website  -->
                        <!-- the className<carousel-control-next-icon creates an icon for easier navigatikon --> */}
                      <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev">
                        <span className="carousel-control-prev-icon bg-danger"></span>
                      </a>
                      <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next">
                        <span className="carousel-control-next-icon bg-danger"></span>
                      </a>
                </div>
            </div>
      </section>
  )
}

export default Carousel