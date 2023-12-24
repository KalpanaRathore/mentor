import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  const goToAbout=()=>{
        navigate("/Trainers")
  }
  return (
    <>
        <div className="my_head" >
          <div className='hero'  data-aos="zoom-in" data-aos-duration="1000">
              <h1 >LEARNING TODAY, <br/>LEARNING TOMORROW</h1>
              <h2 >We are team of talented designers making websites with Bootstrap</h2>
              <Link to="About"><button className='btn_start'>Get Started</button></Link>
          </div>
        </div>
         <section>
            <div className='container' >
            <div className="row" style={{paddingTop:'5%'}}>
              <div className="col-md-6 my_crd" data-aos='zoom-in' data-aos-duration="1000">
              <p >
                    The role of Mentor in e-Learning:
                    The traditional meaning of Mentor is one who offers support and direction. In the 
                    corporate scenario, mentoring is an established way of transferring knowledge, 
                    developing skills and fostering confidence.
                       
                     <ul>
                      <li style={{listStyle:'none'}}><i className="fa-solid fa-square-check" ></i> Mentees have an opportunity to gain practical knowledge and insight from a seasoned employee who has achieved a level of expertise they aspire to attain.</li><br></br>
                      <li style={{listStyle:'none'}}><i className="fa-solid fa-square-check" ></i> Mentees have an opportunity to gain practical knowledge and insight from a seasoned employee who has achieved a level of expertise they aspire to attain.</li>
                      </ul>          
                </p>
              </div>
              <div className="col-md-6 my_crd" data-aos='zoom-in' data-aos-duration="1000">
                <div ><img src="gallery/teachStu.jpg" alt="" className='imgSet'/></div>
              </div>
            </div>
            </div>
          </section>


          {/* ------------------about section---------- */}
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


{/* -------------------------courses--------------- */}
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



{/* ---------------------------trainers---------------- */}

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

export default Home