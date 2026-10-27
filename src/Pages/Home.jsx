import React from 'react'
import Bread from '../Components/Bread'
import StudentCArd from '../Components/StudentCArd'
import Footer from '../Components/footer'
import Pagination from '../Components/Pagination'

const Home = () => {
  return (
    <>
    <Bread/>
    <div className="d-flex">
         <StudentCArd img="https://th.bing.com/th/id/OIP.v43gYwg1bQ6pUfTijFWWsAAAAA?w=188&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Aoun" sem={2} mail="Aoun@gmail.com" phone="0222222222"/>
     <StudentCArd img="https://th.bing.com/th/id/OIP.v43gYwg1bQ6pUfTijFWWsAAAAA?w=188&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Aoun" sem={2} mail="Aoun@gmail.com" phone="0222222222"/>
 
    </div>
    <Pagination/>
    <Footer/>
    
    
    
    </>
  )
}

export default Home