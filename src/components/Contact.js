import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const[state, setState]=useState({
        f_name:"",
        l_name:"",
        email:"",
        mobile:"",
        subject:"",
        message:""
})

const handler=(event)=>{
    // console.log(event)
    const{name,value}=event.target
    setState({...state,[name]:value})
}

const savedata=(event)=>{
    event.preventDefault()
    // console.log(state)
    axios.post("http://localhost:3004/contact", state)
    .then((res)=>{

        // 
        if(res.status===201){
            toast.success('message send successfully')
            console.log(res)
        }else{
            toast.error('message  not send successfully')
        }
    })
}

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12" style={{paddingTop:'6%'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56043.98535814683!2d76.93901845026296!3d28.607303278236575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fdcb4d53a21%3A0x8800d482f7f39fc0!2z4KSo4KSc4KSr4KSX4KSi4KS8LCDgpKbgpL_gpLLgpY3gpLLgpYA!5e0!3m2!1shi!2sin!4v1699597541749!5m2!1shi!2sin" style={{width:'100%', height:'350px'}} allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"  ></iframe>
                </div>
            </div>
            <div className="row" style={{marginTop:'2%'}}>
                <div className="col-md-4">
                <Toaster/>
                <iframe src="http://www.youtube.com/embed/JW5meKfy3fY?autoplay=1" allow="autoplay" style={{width:'100%', height:'300px'}}></iframe>
                </div>
                <div className="col-md-8">
                <div  style={{textAlign:'center', color:'blue', fontWeight:'bolder'}}>
                        GET IN TOUCH  
                </div>
                <form action="" method='post' onSubmit={savedata}>
                <div className="row" style={{marginTop:'2%'}}>
                        <div className="col">
                            <input type="text" className="form-control" name='f_name'  placeholder="First Name" onChange={handler}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control"  name='l_name'  placeholder="Last Name" onChange={handler}/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'2%'}}>
                        <div className="col">
                            <input type="email" className="form-control"  name='email'  placeholder="Email" onChange={handler}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control"   name='mobile' placeholder="mobile" onChange={handler}/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'2%'}}>
                      <div className="col">
                        <input type="text" placeholder='subject'  name='subject'  onChange={handler} style={{width:'100%'}}/>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:'2%'}}>
                      <div className="col">
                        <textarea name="message" style={{width:'100%', height:'60px'}} placeholder='message' onChange={handler}></textarea>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:'2%'}}>
                      <div className="col">
                      <div style={{textAlign:'center'}}>
                        <input type="submit" value="Send Message" className='btn btn-primary'  />
                        </div>
                      </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home