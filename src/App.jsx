// import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Body from './components/Body'
import Effects from './components/Effects'
import Home from './components/Home/Home.jsx'
import Button from './components/Button/Button.jsx'
import IconExample from './components/IconExample'
import Icons from "./assets/Icons/Icons.js";
import './index.css'

// перенастроить иконки на отображение как свг, а не как имг

function App () {
  return (
    <div>
      <Header />
      <IconExample />
      {/* <IconExample /> */}
       <Home />
{/*
      <Body />
      <Effects /> 
      */}
      <Footer />   
    </div>
  )
}

export default App