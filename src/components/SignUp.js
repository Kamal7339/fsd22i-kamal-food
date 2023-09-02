import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {auth,db} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import FileBase64 from 'react-filebase64';



const SignUp = () => {

    const [user, setUser] = useState(
        {
            userName:"",
            email:"",
            Password:"",
            city:"",
            dateOfBirth:"",
            uploadProfile:'',
           
        }
    )

    
const navigate = useNavigate()



    const handleChange = (e) =>{
        e.preventDefault()
        const {
            name,value
        }= e.target
setUser((Prev) => {
    return{...Prev,[name]:value}
})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
     await createUserWithEmailAndPassword(auth,
            user.email,
            user.Password
          ).then((userVal)=>{
            const userId =userVal.user.uid;
            
             setDoc(doc(db,'users',userId),{
                ...user
             })
            toast ("Account Created Sucessfuly")
            navigate('/Login')
          }).catch((err)=>toast(err.message))
        } catch (error) {
          console.error("Error signing up:", error);
        }
      }
    return (

        <div className="container    " >
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-5 shadow w-100">
                    <div className="wrap">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100  text-center ">
                                    <h3 className="mb-4">Sign Up</h3>
                                </div>
                            </div>
                            <form className="signin-form ">
                                <div className="form-group mt-3 mb-3">
                                    <label className="form-control-placeholder" htmlFor="username">Username</label>
                                    <input type="text" className="form-control" required name='userName' value={user.userName} onChange={handleChange} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-control-placeholder" htmlFor="email">Email</label>
                                    <input id="email-field" type="email" className="form-control" required
                                    name='email' value={user.email} onChange={handleChange}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-control-placeholder" htmlFor="password">Password</label>
                                    <input id="password-field" type="password" className="form-control" required 
                                    name='Password' value={user.Password}onChange={handleChange}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-control-placeholder" htmlFor="city">City</label>
                                    <input id="city-field" type="text" className="form-control" required
                                    name='city' value={user.city} onChange={handleChange}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-control-placeholder" htmlFor="dateOfBirth">Date of Birth</label>
                                    <input id="dateOfBirth-field" type="date" className="form-control" required
                                    name='dateOfBirth' value={user.dateOfBirth} onChange={handleChange}/>
                                </div>
                                <div className="form-group mb-3">
                                <label className="form-control-placeholder" htmlFor="profileUpload">Profile Photo</label>
                                <FileBase64
                                type='file'
                                
                                    value={user.uploadProfile}
                                      onDone={({base64})=>{
                                        setUser((prevVal)=>{
                                            return {...prevVal,uploadProfile:base64}
                                        })
                                      } }
                                      required />
                                      </div>
                                <div className="form-group">
                                   <button className="form-control btn btn-warning rounded submit px-3" onClick={handleSubmit}>Sign Up</button>                             </div>

                            </form>
                            <p className="text-center mt-2 increase-font-size">Already a user ? <Link className='nav-link text-primary' to="/login" >Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;