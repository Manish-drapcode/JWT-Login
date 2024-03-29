import React from 'react'
import './Signup.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  
  const url = 'http://localhost:3003/user/signup';
    const [name, setName]= useState('');
const [password, setPassword]=useState('');
const [email,setEmail]=useState('');
const [submit,setSubmit]=useState(false);
const navigate = useNavigate();    

//submitting the form and pushing the data 
const handlesubmit=async (event)=>{
event.preventDefault();

setSubmit(prevSubmit => !prevSubmit);

try{
  const data={
    username:name,
    useremail:email,
    userpassword:password
  }
const response = await axios.post(url,data);

}
catch(error){
  console.log(error);
}

    }
    const handleInputChange=(event)=>{
      setName(event.target.value);
    }
    const handleInputPassword=(event)=>{
setPassword(event.target.value);
    }
    const handleEmailChange=(event)=>{
      setEmail(event.target.value);
          }
  return (
    <div className="signup">
      <header className="signup-header">
      <form onSubmit={handlesubmit}>
        <label>Name: </label>
        <input type="text" name="usename" value={name} onChange={handleInputChange} ></input> <br />
        <label>Email: </label>
        <input type="text" name="useremail" value={email} onChange={handleEmailChange}></input><br />
        <label>Password:  </label>
        <input type="password" name ="password" value={password} onChange={handleInputPassword}></input><br />
        <button type ="Sumit" className ="btn" >Submit</button>
        </form>
        {submit &&(  <div className="">
        <p>Name:{name} <br/>
        email :{email} </p>
        <button type="Submit" className="btn btn-outline-secondary" onClick={()=>{navigate('/Login')}}>Login</button>
        </div>           
        )}
      </header>
      
    </div>
  )
}

export default Signup