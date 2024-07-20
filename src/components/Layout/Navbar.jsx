import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {GiHamburgerMenu} from "react-icons/gi"
import axios from "axios";
function Navbar() {
  const [show,setShow]=useState(false);
  const{isAuthorized,setIsAuthorized,user} =useContext(Context);
  const navigateTo=useNavigate();
  const handleLogout = async () => {
    try {
      console.log("Starting")
      const response = await axios.get(
        "https://job-portal-dcow.onrender.com/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      console.log("Ending");
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with error:", error.response.data);
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        toast.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
        toast.error("Error setting up request");
      }
      setIsAuthorized(true); // Depending on your logic, set isAuthorized appropriately
    }
    
  };
  return (
    <nav className={isAuthorized?"navbarShow":"navbarHide"}>
      <div className="container">
        <div className="logo">
          <Link to={"/"} ><img src="JobZee-logos__white.png" alt="Logo image not available" /></Link>
        </div>
        <ul className={!show? "menu":"show-menu menu"}>
          <li>
              <Link to={"/"} onClick={()=>setShow(false)}>
                  HOME
              </Link>
          </li>
          <li>
              <Link to={"/job/getall"} onClick={()=>setShow(false)}>
                 ALL JOBS
              </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={()=>setShow(false)}>
                {
                  user && user.role==="Employer"?"APPLICANT'S APPLICATIONS":"MY APPLICATIONS"
                }
            </Link>
          </li>
          {
            user&&user.role==="Employer" ?(
              <>
                  <li>
                    <Link to={'/job/post'} onClick={()=>setShow(false)}>POST NEW JOB </Link></li>
                    <li><Link to={'/job/Me'} onClick={()=>setShow(false)}>VIEW YOUR JOBS</Link>
                    
                  </li>
              </>
            ):(<></>)
          }
          <button onClick={handleLogout}>Logout</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={()=>setShow(!show)}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar