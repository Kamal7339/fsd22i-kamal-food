import React from 'react';
import { Navbar, Container,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './style.css';

import Login from './Login';


function Welcome() {

  
  return (
    <div>
      <Navbar style={{ background: 'linear-gradient(to right, red, orange)' }}>
        <Container className='justify-content-between d-flex '>
            <div>
         
          
          <Link to="" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h4 className=" mx-3 ">Food-Recipe</h4>
          </Link>
          <li>
         
        </li>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " >
          
           
           
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="landing-page-content text-align-center">
        <Container>
          
          <Login />
          
        </Container>
      </div>
      
      
    </div>
  );
}

export default Welcome;
