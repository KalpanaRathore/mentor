import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Courses = () => {

  return (
    <>
         {/* ----------------course section-------------- */}
        
         <div className='container-fluid' style={{ paddingTop: "60px", paddingBottom:'60px',height:'160px', backgroundColor:"#5fcf80"}}>
          <h1 className='util_class'>Courses</h1>
          <h6 className='util_class'>Provide Guidance, Motivation, Emotional Support, And Role Modeling</h6>
          </div>
      

         <section>
          <div className="container" style={{paddingTop:'3%'}}>
            <h5>COURSES......</h5>
            <h1 style={{paddingBottom:'1%'}}>POPULAR COURSES <span>----</span></h1>
          </div>
          <div className="container">
            <div className="row" data-aos="zoom-in" data-aos-duration="1000" >
              <div className="col-md-4">
              <div className="card" >
                  <img src="gallery/img/course-1.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <div style={{paddingBottom:'4%'}}><Link><button className='btn btn-success' style={{opacity:'0.8'}}>Web Development</button></Link>
                  <span style={{fontWeight:'bolder', marginLeft:'25%'}}>$169</span></div>
                  
                    <h5 className="card-title">Website Design </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>

                  <div class="card-body">
                  <div style={{display:"flex", direction:'row'}}>
                   <div><img src="gallery/img/saurabh.png" alt="" style={{height:'50px', width:'50px', borderRadius:'50px'}}/>&nbsp;
                   <span>Saurabh</span></div>
                  
                  <div style={{paddingTop:'4%', paddingLeft:'25%'}} className='disNone'>
                  <i className="fa fa-user"></i>&nbsp;50&nbsp;
                  <i className="fa fa-heart"></i>&nbsp;80
                  </div>
                  
                  </div>
                  <a href="/SignUpForm"><button className='btn btn-success' style={{marginTop:'2%', marginBottom:'2%', width:'90%'}} >Register</button></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card" >
                  <img src="gallery/img/course-2.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <div style={{paddingBottom:'4%'}}><Link><button className='btn btn-success' style={{opacity:'0.8'}}>Marketing</button></Link>
                  <span style={{fontWeight:'bolder', marginLeft:'25%'}}>$180</span></div>
                  
                    <h5 className="card-title">Search Engine Optimization</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>

                  <div class="card-body">
                  <div style={{display:"flex", direction:'row'}}>
                   <div><img src="gallery/img/anabelle.png" alt="" style={{height:'50px', width:'50px', borderRadius:'50px'}}/>&nbsp;
                   <span>Anabelle</span></div>
                  
                  <div style={{paddingTop:'4%', paddingLeft:'25%'}} className='disNone'>
                  <i className="fa fa-user"></i>70&nbsp;&nbsp;
                  <i className="fa fa-heart"></i>&nbsp;70
                  </div>
                  </div>
                  <a href="/SignUpForm"><button className='btn btn-success' style={{marginTop:'2%', marginBottom:'2%', width:'90%'}}>Register</button></a>
                  </div>

                </div>
              </div>
              <div className="col-md-4">
              <div className="card" >
                  <img src="gallery/img/course-3.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <div style={{paddingBottom:'4%'}}><Link><button className='btn btn-success' style={{opacity:'0.8'}}>Content</button></Link>
                  <span style={{fontWeight:'bolder', marginLeft:'25%'}}>$200</span></div>
                  
                    <h5 className="card-title">Copywriting</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content Some quick </p>
                  </div>

                  <div class="card-body">
                  <div style={{display:"flex", direction:'row'}}>
                   <div><img src="gallery/img/harshit.png" alt="" style={{height:'50px', width:'50px', borderRadius:'50px'}}/>&nbsp;
                   <span>Harshit</span></div>
                  <div style={{paddingTop:'4%', paddingLeft:'25%'}} className='disNone'>
                  <i className="fa fa-user"></i>100&nbsp;&nbsp;
                  <i className="fa fa-heart"></i>&nbsp;80
                  </div>
                  </div>
                  <a href="/SignUpForm"><button className='btn btn-success' style={{marginTop:'2%', marginBottom:'2%', width:'90%'}}>Register</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </section>
    </>
  )
}

export default Courses