import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../main';
import axios from 'axios';

function JobDetails() {
  //we have defined the route in the app.jsx 
  // one of the route is /job/:id so we are able to get
  //using the useParams hook by react router dom
  const {id}=useParams();
  const [job,setJob]=useState({});
  const navigateTo=useNavigate();
  const {isAuthorized,user}=useContext(Context);
  useEffect(()=>{
    axios.get(`https://job-portal-dcow.onrender.com/api/v1/job/${id}`,{withCredentials:true})
    .then((res)=>{
      setJob(res.data.job);
    })
    .catch((err)=>{
      console.log(err.respnse.data.message);
    })
  },[])
  if(!isAuthorized){
    navigateTo("/login");
  }
  return (
    <>
       <div className="mycontainer">
       <div className="mycard">
        <h2>JOB DETAILS</h2>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>Title:</span> <span style={{marginLeft:"2rem",fontSize:"1.2rem" ,fontWeight:"light" }}>{job.title}</span></p>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>Category:</span><span style={{marginLeft:"2rem",fontSize:"1.2rem",fontWeight:"light" }}>{job.category}</span> </p>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>Country:</span><span style={{marginLeft:"2rem",fontSize:"1.2rem",fontWeight:"light" }}>{job.country}</span> </p>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>City:</span><span style={{marginLeft:"2rem" ,fontSize:"1.2rem",fontWeight:"light"}}> {job.city}</span></p>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>Location:</span><span style={{marginLeft:"2rem",fontSize:"1.2rem",fontWeight:"light" }}>{job.location}</span> </p>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>Description:</span><span style={{marginLeft:"2rem",fontSize:"1.2rem" ,fontWeight:"light"}}>{job.description}</span> </p>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>Posted On:</span><span style={{marginLeft:"2rem",fontSize:"1.2rem",fontWeight:"light" }}>{job.jobPostedOn}</span> </p>
        <p><span style={{fontWeight:"bold" ,fontSize:"2rem"}}>Salary:</span> {job.fixedSalary ? (<span>{job.fixedSalary}</span>) : (<span>{job.salaryFrom} - {job.salaryTo}</span>)}</p>
        <p>{user && user.role === "Employer" ? <></> : <a href={`/application/${job._id}`}>Apply Now</a>}</p>
    </div>
       </div>
    </>
  )
}

export default JobDetails