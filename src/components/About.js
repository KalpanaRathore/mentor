import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
const navigate=useNavigate();
  const goToAbout=()=>{
        navigate("/Trainers")
  }
  return (
    <>
        <div className='container-fluid' style={{ paddingTop: "60px", paddingBottom:'60px',height:'160px', backgroundColor:"#5fcf80"}}>
          <h1 className='util_class'>About</h1>
          <h6 className='util_class'>Provide Guidance, Motivation, Emotional Support, And Role Modeling</h6>
          </div>

       <section>
              <div className="container con1" >
                  <div className="row " style={{paddingTop:'5%'}}>
                    <div className="col-md-4 my_crd" data-aos='fade-up' data-aos-duration="1000">
                      <div className='col_4' >
                          <h2>WHY CHOOSE MENTOR?</h2>
                          <p>A mentor is a person with specialized knowledge whom you may enlist to educate and motivate you, either in your personal life, your career or both. Similar to coaches and teachers, mentors guide less-experienced people through the learning process by establishing trust and modeling positive behaviors.</p>
                          <button className='btn_start2' onClick={goToAbout}>Learn More &#11166;</button>
                        </div>
                      </div>
                        <div className="col-md-8 my_crd">
                         <div className="row" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                          <div className="col-md-4 my_crd">
                          <div className="card ">
                              <div className="card-body">
                              <div className="round_box" ><i className="fa fa-car fa-2x" style={{paddingTop:'28%', paddingLeft:'28%'}}></i></div>
                                    <h4 className='utility_class'>Increased knowledge</h4>
                                <p className="card-text card-p-txt" style={{ paddingLeft:"10%", paddingTop:"5%",paddingBottom:"23%"}}  >Whether you're starting a business, going back to college or changing careers, mentors have experienced similar milestones.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 my_crd">
                          <div className="card ">
                              <div className="card-body">
                              <div className="round_box" ><i className="fa fa-car fa-2x" style={{paddingTop:'28%', paddingLeft:'28%'}}></i></div>
                                    <h4 className='utility_class'>Constructive criticism</h4>
                                <p className="card-text card-p-txt" style={{ paddingLeft:"12%", paddingTop:"10%",paddingBottom:"18%", wordSpacing:'5px'}} >Mentors offer constructive criticism designed to strengthen areas of your life that need improvement.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 my_crd">
                          <div className="card ">
                              <div className="card-body">
                              <div className="round_box" ><i className="fa fa-car fa-2x" style={{paddingTop:'28%', paddingLeft:'28%', wordSpacing:'5px'}}></i></div>
                                    <h4 className='utility_class'>Personal  growth</h4>
                                <p className="card-text card-p-txt" style={{ paddingLeft:"10%", paddingTop:"3rem",paddingBottom:"5rem"}} >they may put you to work on a specific task to see how well you perform.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
         </section>

        {/* <section >
          <div className="container" style={{paddingTop:'5%'}}>
            <h5>TESTIMONIALS</h5>
            <h1 style={{paddingBottom:'3%', fontWeight:'bolder'}}>WHAT THEY ARE SAYING...</h1>
          </div>
          <div style={{paddingBottom:'3%'}}>
              <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
           
              <div className="d-block w-100" style={{display:'flex' }}>
                <div style={{paddingTop:'9%', position:'relative', zIndex:'1', marginRight:'-2%'}}>
                <img src="gallery/img/trainers/trainer-1.jpg" alt="" style={{height:'60px'}}/>
              </div>
                <div style={{width:'30%', border:"1px solid black", paddingTop:'1%', paddingBottom:'1%', paddingLeft:'4%', paddingRight:'4%'}}>
                    <h3>shyam</h3>
                    <h6>Enterpreneur</h6>
                    <i className="fa-solid fa-quote-left"></i><p style={{paddingLeft:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto quia sapiente quis consequatur ipsam perferendis quisquam deserunt error non?</p><i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          
              <div style={{display:'flex'}}>
                <div style={{paddingTop:'9%', position:'relative', zIndex:'1', marginRight:'-2%'}}>
                <img src="gallery/img/trainers/trainer-1.jpg" alt="" style={{height:'60px'}}/>
              </div>
                <div style={{width:'30%', border:"1px solid black", paddingTop:'1%', paddingBottom:'1%', paddingLeft:'4%', paddingRight:'4%'}}>
                    <h3>jay</h3>
                    <h6>Enterpreneur</h6>
                    <i className="fa-solid fa-quote-left"></i><p style={{paddingLeft:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto quia sapiente quis consequatur ipsam perferendis quisquam deserunt error non?</p><i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          
              <div style={{display:'flex'}}>
                <div style={{paddingTop:'9%', position:'relative', zIndex:'1', marginRight:'-2%'}}>
                <img src="gallery/img/trainers/trainer-1.jpg" alt="" style={{height:'60px'}}/>
              </div>
                <div style={{width:'30%', border:"1px solid black", paddingTop:'1%', paddingBottom:'1%', paddingLeft:'4%', paddingRight:'4%'}}>
                    <h3>veer</h3>
                    <h6>Enterpreneur</h6>
                    <i className="fa-solid fa-quote-left"></i><p style={{paddingLeft:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto quia sapiente quis consequatur ipsam perferendis quisquam deserunt error non?</p><i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      
    
        </section> */}

    </>
  )
}

export default About