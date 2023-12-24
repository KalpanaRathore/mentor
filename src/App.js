// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Courses from './components/Courses.js';
import Contact from './components/Contact.js';
import Trainers from './components/Trainers.js';
import PageNotFound from './components/PageNotFound.js';
import Home from './components/Home.js';
import About from './components/About.js';
import SignUpForm from './components/SignUpForm.js';
import LoginSignUp from './components/loginsignup/LoginSignUp.js';






function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Courses' element={<Courses/>}/>
            <Route path='/Trainers' element={<Trainers/>}/>
            <Route path='/LoginSignUp' element={<LoginSignUp/>}/>
            <Route path='/SignUpForm' element={<SignUpForm/>}/>
            <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
   
    </>
  );
}

export default App;
