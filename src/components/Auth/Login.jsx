import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { FaPencilAlt, FaPhone, FaRegUser } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiLock2Fill } from 'react-icons/ri';
import toast from 'react-hot-toast';
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  
  const {isAuthorized,setIsAuthorized,user,setUser} = useContext(Context);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://job-portal-dcow.onrender.com/api/v1/user/login",
        { email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(response);
      toast.success(response.data.message);
      
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        // This is a network error
        toast.error('There was a network error. Please check your connection and try again.');
      } else if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(error.response.data.message || 'There was an error registering. Please try again.');
      } else if (error.request) {
        // The request was made but no response was received
        toast.error('No response received from the server. Please try again.');
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error('Request failed. Please try again.');
      }
    }
  };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }

  return (
    <>
        <div className="authPage">
          <div className="container">
            <div className="header">
              <img src="/JobZeelogo.png" alt="logo" />
              <h3>Login to your account</h3>
            </div>
            <form action="">
              <div className="inputTag">
                  <label>Login As</label>
                  <div>
                    <select value={role} onChange={(e)=>setRole(e.target.value)}>
                      <option value="">Select Role</option>
                      <option value="Employer">Employer</option>
                      <option value="Job Seeker">Job Seeker</option>
                    </select>
                    <FaRegUser/>
                  </div>
              </div>
             
              <div className="inputTag">
                  <label>Email</label>
                  <div>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
                    <MdOutlineMailOutline/>
                  </div>
              </div>
              
              <div className="inputTag">
                  <label>Password</label>
                  <div>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password'/>
                    <RiLock2Fill/>
                  </div>
              </div>
              <button onClick={handleLogin} type="submit">Login</button>
              <Link to={"/register"}>Don't have any Account? Register Here</Link>
            </form>
          </div>
          <div className="banner">
            <img src="/login.png" alt="Login image" />
          </div>
        </div>
    </>
  )
}

export default Login