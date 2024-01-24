import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
const Login = () => {

  const navigate= useNavigate();

const [name, setName]= useState('');
const url = 'http://localhost:3003/user/login';

const [password, setPassword]= useState('');

const [log , setLog] = useState(true);

const handlesubmit = async (event) =>{
event.preventDefault();
    try{
const obj = {
    username:name,
    userpassword:password,
};

try {
    const response = await axios.get(url, { params: obj }); // Use axios.get with params option
   if(response.status ==200){
setLog(prevLog => !prevLog);
navigate('/Curd');
   }
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

const navigation =(event)=>{
  event.preventDefault();
 navigate('/Signup')

}

  return (<div className="signup">
    <header className="signup-header">
    <div>Login</div>
    <div> 
      { log && (<div>
      <form onSubmit={handlesubmit}>
        <label>Name: </label>
        <input type="text" name="usename" value={name} onChange={handleInputChange} ></input> <br />
        <label>Password:  </label>
        <input type="password" name ="password" value={password} onChange={handleInputPassword}></input><br />
        <button type ="Sumit" className ="btn">Login</button>
        </form>
        Back to <button type="submit" className="btn" onClick={navigation}>Signup</button>
        </div>) 
        }
       
        {!log &&(
          <div>
            <h1>Welcome to page of coders</h1>
          </div>
        )}

    </div>
    </header>
    </div>
  )
}

export default Login