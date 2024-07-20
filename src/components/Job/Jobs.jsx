import React, { useContext, useEffect, useState } from 'react'
import {Context} from "../../main"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
function Jobs() {
  const [jobs,setJobs]=useState([]);
  const {isAuthorized}=useContext(Context);
  const navigateTo=useNavigate();
  useEffect(()=>{
    try{
      axios.get("https://job-portal-dcow.onrender.com/api/v1/job/getAll",{withCredentials:true})
      .then((res)=>{
        setJobs(res.data);
      })
    }
    catch(error){
      toast.error("Kindly Login First");
      console.log(error);
    }
  },[]);
  if(!isAuthorized){
    navigateTo("/login");
  }
  return (
    
    <>
        <div className="jobs page">
          <div className="container">
            <h1>ALL AVAILABLE JOBS</h1>
            <div className="banner">
              {
                jobs.jobs && jobs.jobs.map((element)=>{
                  return (
                    <div className="card" key={element._id}>
                        <p>{element.title}</p>
                        <p>{element.category}</p>
                        <p>{element.country}</p>
                        <Link to={`/job/${element._id}`}>Job Details</Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default Jobs