import React from 'react'

const Material = () => {
  return (
    <>
         <div className="container" style={{paddingTop:'5%'}}>
              <h1 >Study Material.......</h1>
              <h3 style={{paddingBottom:'1%'}}>Demo page</h3>
            </div>

              <section id="trainers" className="trainers">
                <div className="container" data-aos="fade-up">
                    
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                      <div className="member">
                        {/* <a target="_blank" href="./public/notes/html_tutorial notes.pdf"><img src="public/notes/html.jpg" alt="" style={{ height:'50%', width:'50%'}} /></a> */}
                        <div className="member-content">
                          <h4>HTML</h4>
                          <span>Web Development</span>
                          <p>
                            HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements.
                          </p>
                          
                        </div>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                      <div className="member">
                        {/* <a target="_blank" href="public\notes\css_tutorial notes.pdf"><img src="public\notes\css.jpg" alt=""height="50% "/></a> */}
                        <div className="member-content">
                          <h4>CSS</h4>
                          <span>Web Development</span>
                          <p>
                            Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
                          </p>
                          
                        </div>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                      <div className="member">
                        {/* <a target="_blank" href="public\notes\javascript_notes.pdf"><img src="public\notes\javascript.jpg" alt=""height="50% "/></a> */}
                        <div className="member-content">
                          <h4>JavaScript</h4>
                          <span>Web Development</span>
                          <p>
                            JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.
                          </p>
                          
                        </div>
                      </div>
                    </div>
          
                  </div>
          
                </div>
                     
      </section>
    </>
  )
}

export default Material