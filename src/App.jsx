import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'
import Post from './components/Post';
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Main/>
      <Post/>
      <Register/>
      <Login/>
    </>
  )
}

export default App
