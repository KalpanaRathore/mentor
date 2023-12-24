import React from 'react'
import { Link } from 'react-router-dom'

const Trainers = () => {
  return (
    <>
       {/* ------------trainers----------- */}

       
       <div className='container-fluid' style={{ paddingTop: "60px", paddingBottom:'60px',height:'160px', backgroundColor:"#5fcf80"}}>
          <h1 className='util_class'>Trainers</h1>
          <h6 className='util_class'>Provide Guidance, Motivation, Emotional Support, And Role Modeling</h6>
          </div>
       
          <section>
          <div className="container" style={{paddingTop:'3%'}}>
            <h5>TRAINERS...</h5>
            
          </div>
       <div className="container">
            <div className="row" data-aos="zoom-in" data-aos-duration="1000">
              <div className="col-md-4">
                  <div class="card" style={{ borderRadius:'0px'}}>
                    <img src="gallery/img/saurabh.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title myCard_title">Saurabh Shukla</h5>
                      <p style={{textAlign:'center'}}>Web Development</p>
                      <p class="card-text myCard_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className="container my_anchor" style={{marginLeft:"25%", marginBottom:'2%'}}>
                       <Link to="https://www.facebook.com/" target='blank'><i class="fa-brands fa-facebook fa-lg"></i>&nbsp;</Link> 
                        <Link to="https://www.instagram.com/"><i class="fa-brands fa-instagram fa-lg"></i>&nbsp;</Link>
                        <Link to="https://www.twitter.com/"><i class="fa-brands fa-twitter fa-lg"></i>&nbsp;</Link>
                        <Link to="https://www.youtube.com/"><i class="fa-brands fa-youtube fa-lg"></i></Link>
                    </div>
                    </div>
                    
                  </div>
              </div>
              <div className="col-md-4">
                  <div class="card" style={{ borderRadius:'0px'}}>
                    <img src="gallery/img/anabelle.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title myCard_title">Anabelle loren</h5>
                      <p style={{textAlign:'center'}}>Marketing</p>
                      <p class="card-text myCard_text">Some quick example text to build on the card title and make up the bulk  of the card's content.</p>
                      <div className="container my_anchor" style={{marginLeft:"25%", marginBottom:'2%'}}>
                       <Link to="https://www.facebook.com/" target='blank'><i class="fa-brands fa-facebook fa-lg"></i>&nbsp;</Link> 
                        <Link to="https://www.instagram.com/"><i class="fa-brands fa-instagram fa-lg"></i>&nbsp;</Link>
                        <Link to="https://www.twitter.com/"><i class="fa-brands fa-twitter fa-lg"></i>&nbsp;</Link>
                        <Link to="https://www.youtube.com/"><i class="fa-brands fa-youtube fa-lg"></i></Link>
                    </div>
                    </div>
                   
                  </div>
              </div>
              <div className="col-md-4">
                  <div class="card" style={{ borderRadius:'0px'}}>
                    <img src="gallery/img/harshit.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title myCard_title">Harshit Vashisht</h5>
                      <p style={{textAlign:'center'}}>Content</p>
                      <p class="card-text myCard_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className="container my_anchor" style={{marginLeft:"25%", marginBottom:'2%'}}>
                       <Link to="https://www.facebook.com/" target='blank'><i class="fa-brands fa-facebook fa-lg"></i>&nbsp;</Link> 
                        <Link to="https://www.instagram.com/"><i class="fa-brands fa-instagram fa-lg"></i>&nbsp;</Link>
                        <Link to="https://www.twitter.com/"><i class="fa-brands fa-twitter fa-lg"></i>&nbsp;</Link>
                        <Link to="https://www.youtube.com/"><i class="fa-brands fa-youtube fa-lg"></i></Link>
                    </div>
                    </div>
                   
                  </div>
              </div>
            </div>
          </div>
          </section>
    </>
  )
}

export default Trainers