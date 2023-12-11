import React from 'react'
import { useState,useEffect } from 'react'
import "./App.css"

function App() {
  const initValues = {firstname: "",lastname: "", email: "", contacts: ""}
  const [formValues, setFormValues] = useState(initValues);
  const [submit, setsubmit] = useState(false);
  const [Err, setErr] = useState({});
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validation(formValues)
    setErr(validation(formValues));
    setsubmit(true);
  }
useEffect(() => {
  if(Object.keys(Err).length === 0 && submit){
  }
},[Err])

  const validation = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
    const errorValues = {}
    if(!values.firstname){
      errorValues.firstname = "Please enter your first name!"
    }
    if(!values.lastname){
      errorValues.lastname = "Please enter your last name!"
    }
    if(!values.email){
      errorValues.email = "Please enter your email!"
    } 
    else if (!regex.test(values.email)){
      errorValues.email = "Invalid email format!"
    }
    if(!values.contacts){
      errorValues.contacts = "Please enter your phone number"
    }
    else if (values.contacts.length !== 10){
      errorValues.contacts = "Invalid number!"
    }
    return errorValues;
  }
  return (
    <div className='box'>
      {Object.keys(Err).length === 0 && submit ? (<div className='success'>Registration successful!</div>) : null }
     
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className='info'>
          <label className='label'>First Name</label>
          <input className='inp' type="text" name='firstname' placeholder='First Name' value={formValues.firstname} onChange={handleChange} />
        </div>
        <p className='errors'>{Err.firstname}</p>
        <div className='info'>
          <label className='label'>Last Name</label>
          <input  className='inp' type="text" name='lastname' placeholder='Last Name' value={formValues.lastname} onChange={handleChange} />
        </div>
        <p className='errors'>{Err.lastname}</p>
        <div className='info'>
          <label className='label'>Email</label>
          <input  className='inp' type="email" name='email' placeholder='Email'  value={formValues.email} onChange={handleChange}/>
        </div>
        <p className='errors'>{Err.email}</p>
        <div className='info'>
          <label className='label'>Contact No.</label>
          <input  className='inp' type="number" name='contacts' placeholder='Phone Number'  value={formValues.contacts} onChange={handleChange}/>
        </div>
        <p className='errors'>{Err.contacts}</p>
        <button className='register'>Register</button>
        </form>      
    </div>
  )
}

export default App