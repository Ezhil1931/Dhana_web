import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Landing from './Components/Landing'
import Jops from './Components/Jops'
import Filter from './Components/Filter'
import SignIn from './Components/SignIn'
import Reviews from './Components/Reviews'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Postjob from './Components/Postjob'
import JobDetail from './Components/JobDetail'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='flex justify-center items-center flex-col bg-violet-800 px-3 gap-3 w-full ' >

<Header/>

<Routes >
<Route path='/' element={<Landing/>}/>   
 
    <Route path='/login' element={<Login/>}/>   
<Route path='/post_jobs'element={<Postjob/>}/>

  <Route path='/signup'element={<SignIn/>}/>


</Routes>

{/* <JobDetail/> */}

<Jops/>
<Reviews/>
<Faq/>
<Footer/>

  </div>
  )
}

export default App
