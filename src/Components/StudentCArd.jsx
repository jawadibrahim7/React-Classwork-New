import React, { useState } from 'react'

const StudentCArd = (props) => {
     const [views, setViews]= useState(0)
     const [showDetails, setShowDetails]=useState(false)
     
     function handleView(){
    setViews(views+1)
}
  return (
   

    <div><div className="card m-4" style={{ width: '250px' }}>
  <img className="card-img-top" src={props.img}/>
  <div className="card-body">
    <h4 className="card-title">{props.name}</h4>
    <p className="card-text">Semester : {props.sem}</p>
     <p className="card-text">Views : {views}</p>
   <div className='d-flex gap-2'> 
    <button type="button" className="btn btn-primary " onClick={handleView}>View Profile</button>
    <button type="button" className="btn btn-primary"  onClick={()=>setShowDetails(!showDetails)}>
       
        {showDetails ? 'Hide Details' : 'ShowDetails'}</button>
</div>
 {showDetails &&(
            <div><p>Email : {props.mail}</p>
            <p>Phone :{props.phone} </p>
                 </div>
        )}
       
  </div>
  
    
</div>

</div>

  )
}

export default StudentCArd