import React from 'react'
import logo from '../assets/img/BridgenoteLogo.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../formLogin.css';
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const FormLogin = () => {
    return (
      <Form>

        <img src={logo} className="formLogo" alt="Bridgenote logo" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between label-formLogin" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me signed in" />
          <a href="#" 
          rel="noopener noreferrer">Forgot Password</a>
        </Form.Group>
        <Button variant="primary" type="submit" className='my-5 mx-auto d-block px-5 button-signIn'>
          LOG IN
        </Button>
      </Form>
    )
}

export default FormLogin