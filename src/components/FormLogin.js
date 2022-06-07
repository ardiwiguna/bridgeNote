import React, {useState} from 'react'

import logo from '../assets/img/BridgenoteLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../formLogin.css';
import { Form, Button } from 'react-bootstrap'

const FormLogin = () => {
  const [form, setForm] = useState ({})
  const [errors, setErrors] = useState ({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })

    if(!!errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
  }

  const validateForm = () => {
    const {username, password} = form
    const newErrors = {}

    if(!username || username ==='') newErrors.username = 'Please enter your username'
    else if(!password || password ==='') newErrors.password = 'Please enter your password'

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formErrors = validateForm()
    if(Object.keys(formErrors).length > 0){
      setErrors(formErrors)
    }else{
      console.log('form submitted')
      console.log(form)

    }

  }

    return (
      <Form>

        <img src={logo} className="formLogo" alt="Bridgenote logo" />
        <Form.Group className="mb-3" controlId="username">
          <Form.Control 
            type="text" 
            placeholder="username" 
            autoComplete='off'
            isInvalid={!!errors.username}
            required
            value = {form.username}
            onChange={(e) => setField('username', e.target.value)}
            className={!!errors.username && 'red-border'}
          />
          <div className='red'>{errors.username}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control 
          type="password" 
          placeholder="Password" 
          autoComplete='off'
          isInvalid={!!errors.password}
          required
          value = {form.password}
          onChange={(e) => setField('password', e.target.value)}
          className={!!errors.password && 'red-border'}
          />
          <div className='red'>{errors.password}</div>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between label-formLogin" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me signed in" />
          <a href="#">Forgot Password</a>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} type="submit" className='my-5 mx-auto d-block px-5 button-signIn'>
          LOG IN
        </Button>
      </Form>
    )
}

export default FormLogin