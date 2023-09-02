import React, { useState } from 'react';
import { Container, Form, Button, Toast } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';
import './style.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password).then((userData)=>{
      toast('Login Successfull')
      Navigate(`/Home/${userData.user.uid}`)
    }).catch(err => toast(err.message))
    
    
  };
 

  return (

    
    <Container className="mt-5  ">
      
      <Form className='w-50 mx-auto'>
        <Form.Group controlId="formBasicEmail ">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleLogin}>
          Login
        </Button>
        <p className="text-center mt-2 increase-font-size">
    Not a member? <Link className='nav-link text-primary' to="/signup">Sign Up</Link>
</p>
<div className="credential1"><h3>Test Credential</h3>
  <h5>Email : demouser@gmail.com</h5> <h5>Password : Demo123</h5></div>
      </Form>
      
       
    </Container>
     
    
  );
  
}


 


export default Login;
