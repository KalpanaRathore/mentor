import React from 'react'

const Footer = () => {
  return (
    <>
       
      
        <div className="container-fluid" style={{backgroundColor: "rgb(19, 45, 85)", marginTop:'6%'}}>
            <div className="row" style={{marginLeft: "2%", paddingTop:'3%'}}>
                <div className="col-md-4 my_col" style={{color: "white"}}>
                    <div className="heading">About Us</div>
                    <div >
                        "Knowledge without experience is merely photosophy: experience without knowlwdge is ignorance."
                        We at MappingSkills understand that and will give you a erfect combination of knowlwdge.
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="heading" style={{marginLeft: "8%"}}>Quick </div>
                    <div className="container-fluid" >
                        <div className="row" >
                            <div className="col-md-6" style={{color: "white"}} >
                                <ul style={{paddingRight: "4%", paddingLeft: "2%"}} className="list">
                                    <li>Android</li>
                                    <li>.Net</li>
                                    <li>SEO</li>
                                    <li>Web Designing</li>
                                    <li>AutoCAD</li>
                                    <li>CCC</li>
                                </ul>
                            </div>
                            <div className="col-md-6" style={{color: "white"}}>
                                <ul style={{paddingRight: "4%", paddingLeft: "2%"}} className="list">
                                    <li>Java Frameworks</li>
                                    <li>PHP</li>
                                    <li>Tally ERP.9</li>
                                    <li>Graphic Designing</li>
                                    <li>WordPress</li>
                                    <li>Real Timetool</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
               
                <div className="col-md-4">
                    <div className="heading">Contact Us</div>
                    <div style={{color: "white", marginBottom: "3%"}}>
                        {/* <!-- <img src="" alt="" className="img1"> --> */}
                        <i className="fa-solid fa-headphones" style={{paddingRight: "2%", color: "rgb(255, 187, 0)"}}></i>
                        +91 2789056478
                    </div>
                    <div style={{color: "white", marginBottom: "3%"}}>
                        {/* <!-- <img src="" alt="" className="img1"> --> */}
                        <i className="fa-solid fa-envelope" style={{paddingRight: "2%", color: "rgb(255, 187, 0)"}}></i>
                        info@mappinggskills.com
                    </div>
                    <div style={{color: "white", marginBottom: "3%"}}>
                        {/* <!-- <img src="" alt="" className="img1"> --> */}
                        <i className="fa-solid fa-location-dot" style={{paddingRight: "2%", color: "rgb(255, 187, 0)"}}></i>
                        Sector-61. Noida, india
                    </div>
                    <div style={{fontSize: "20px", color: "white", marginTop: "10%", fontWeight: "bolder"}}>Opening Hour</div>
                    <div style={{fontSize: "17px", color: "white", marginTop: "5%", fontWeight: "bold"}} className="time">Sun-sat: 10:00 am-05:00 pm</div>
                </div>
            </div>
            </div>
      
        <div className="container-fluid" style={{backgroundColor: "rgb(19, 45, 85)"}}>
            <div className="row">
                <div className="col-md-6">
                    <div className="footer">Follow Us</div>
                    <div style={{marginBottom: "4%", marginLeft: "10%", letterSpacing: "10px"}}>
                        <a href=""><i className="fa-brands fa-facebook" style={{color: "#ffbb1f"}}></i></a>
                        <a href=""><i className="fa-brands fa-twitter" style={{color: "#ffbb1f"}}></i></a>
                        <a href=""><i className="fa-brands fa-google" style={{color: "#ffbb1f"}}></i></a>
                        <a href=""><i className="fa-brands fa-instagram" style={{color: "#ffbb1f"}}></i></a>
                        <a href=""><i className="fas fa-thin fa-globe" style={{color: "#ffbb1f"}}></i></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <input type="submit" value="&#8593;"  className="arrow" />
                    </div>
                </div>
            </div>

        </div>
        
    </>
  )
}

export default Footer