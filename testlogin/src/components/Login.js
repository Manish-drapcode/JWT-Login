import React, { useEffect } from 'react'
import {useState} from 'react';
import axios from 'axios';
const Login = () => {
const baseURL = "http://localhost:/3003/";
const [name, setName]= useState('');
const url = 'http://localhost:3003/user/login';

const [password, setPassword]= useState('');
const [submit,setSubmit]= useState(false);
// useEffect( async ()=>{
// if(submit){
// try{
//     const response = await axios.post('Localhost:3003/user',{});
// }
// catch(err){
//     console.log(err);
// }
// }
// })
const handlesubmit = async (event) =>{
    console.log("name and password ",name)
    console.log(password);
    event.preventDefault();
    setSubmit(prevSubmit=>!submit);
    try{
const obj = {
    username:name,
    userpassword:password,
};
console.log(obj);
try {
    const response = await axios.get(url, { params: obj }); // Use axios.get with params option
    console.log(response.data); // handle the response
  } catch (error) {
    console.log('Error:', error.message); // Log the error message
    console.log('Error Details:', error); // Log the full error object for more details
  }
    }
    catch(err){
        console.log(err);
    }

}

const handleInputChange =(event)=>{
setName(event.target.value)
}
const handleInputPassword=(event)=>{
    setPassword(event.target.value);
}


  return (<div>
    <div>Login</div>
    <div> 
        <form onSubmit={handlesubmit}>
        <label>Name: </label>
        <input type="text" name="usename" value={name} onChange={handleInputChange} ></input> <br />
        <label>Password:  </label>
        <input type="password" name ="password" value={password} onChange={handleInputPassword}></input><br />
        <button type ="Sumit" className ="btn">Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login