import React, { useEffect, useState } from 'react'

import { Link,useParams } from 'react-router-dom'

import './style.css';


import "bootstrap/dist/css/bootstrap.min.css";

import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = (props) => {
  const {id} =useParams();

 
  const[avatar,setAvatar]=useState('')
  
  useEffect(()=>{
    if(id){
    const getProfile=async()=>{
    const docRef = doc(db, "users", id);
const docSnap = await getDoc(docRef);
setAvatar(docSnap.data().uploadProfile);
    }
    getProfile();}
  },[id]);
  console.log(avatar)
  return (
    <header className="p-3" style={{ background: 'linear-gradient(to right, red, orange)' }}>
      <div>
      
      <h4 className="mx-3" style={{ color: 'white', fontSize: '24px',fontFamily:' cursive' ,cursor:'pointer'}}>Food Recipe</h4>
     
      </div>
          
       
                    
                    
                    <div className="Navbtn ">
                    
                   
                    
                    <Link className="nav-link" to={`/profile/${id}`}><button type="button" className="btn btn-outline-light me-2"> {avatar ?<img src={avatar} alt="avatar" height={'25px'} width='25px' className='me-2' style={{borderRadius:'50%'}}/>:null}Profile</button></Link>
                      
                      <Link className="nav-link" to="/"><button type="button" className="btn btn-outline-light me-2">Logout</button></Link>
                      
                    </div>
                  
                   
              
              
            
          
     
    </header>
  )
}

export default Navbar