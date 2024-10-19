import { useState } from 'react';
import React from 'react'
import axios  from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
    const [data,setData]=useState({
            email:'',
            password:''
         })
         const [authenticated,setAuthenticated]=useState(false);
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8080/api/login',data)
        .then(res=>{
            console.log(res)
            setAuthenticated(true);
        })
        .catch(res => {
            console.log("error");
        }); 
    }
    function handleChange(event, name) {
        setData(prev => ({
            ...prev,
            [name]: event.target.value 
        }));
    }
    if(authenticated){
        return <App />
    }
  return (
    <div className='adjust-box'>
    <div>
        <form onSubmit={handleSubmit} className='login'>
        <div>
        <h4>Email</h4>
        <input type='email' className='form-control' onChange={(e)=>handleChange(e,'email')} required/>
        </div>
        <div>
        <h4>Password</h4>
        <input type='password' className='form-control' onChange={(e)=>handleChange(e,'password')} required/>
        </div>
        <input type='submit' className='btn btn-primary' value="Log in"/>
        <div>
          If no account exist please : <a href="#"> register</a>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Login
