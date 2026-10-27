import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import StudentCArd from './Components/StudentCArd'
import Bread from './Components/Bread'
import Footer from './Components/footer'
import Pagination from './Components/Pagination'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import CourseCard from './Components/CourseCard'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/reg" element={<StudentCArd/>}/>
      <Route path="/courses" element={<CourseCard  name="ABC" code="Hi" instructor="iam"/>}/>


    </Routes>
    
    </BrowserRouter>
  
   


    </>

  )
}

export default App