import React, { useContext, useEffect, useState } from 'react'
import {Context} from "../../main"
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ResumeModal from './ResumeModal';

function MyApplications() {
  const {isAuthorized,user} = useContext(Context);
  const [application,setApplication]=useState([]);
  const [modalOpen,setModalOpen]=useState(false);
  const [resumeImageUrl,setResumeImageUrl]=useState("");
  const navigateTo=useNavigate();
  
  useEffect(()=>{
    try{
      if(user && user.role==="Employer")
      {
        axios.get("https://job-portal-dcow.onrender.com/api/v1/application/employer/getall",{withCredentials:true})
        .then((res)=>{
          setApplication(res.data.applications);
        })
      }
      else{
        axios.get("https://job-portal-dcow.onrender.com/api/v1/application/jobSeeker/getall",{withCredentials:true})
        .then((res)=>{
          setApplication(res.data.applications);
      })
    }
  }
    catch(error){
      toast.error(error.response.data.message)
    }
  },[isAuthorized,application])
  if(!isAuthorized){
    navigateTo("/login");
  }
  const deleteApplication=async(id)=>{
    try{
       await axios.delete(`https://job-portal-dcow.onrender.com/api/v1/application/delete/${id}`,{withCredentials:true})
        .then((res)=>{
          toast.success(res.data.message);
          setApplication((prevApplication)=>{
            prevApplication.filter((application)=>application._id!==id)
          })
        })
    }
    catch(error){
        toast.error(error.response.data.message);
    }
  }
  const openModal=(imageUrl)=>{
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  }
  const closeModal=()=>{
    setModalOpen(false);
  }
  return (
    <>
        <section className="my_application page">
          {
            user && user.role=="Job Seeker"? <>
              <div className="container">
                
                {
                  application && application.length <=0 ?(
                    <>
                      {""}
                      <h4 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Application Not found</h4>{" "}
                    </>
                    
                  ):(application && application.map((element)=>{
                      return <>
                      <h1 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Here are Your Applied Jobs</h1>
                      <hr />
                      <JobSeekerCard element={element} key={element._id} deleteApplication={deleteApplication} openModal={openModal}/>
                      <hr />
                      </>
                    })
                  )
                }
                
                  
                
              </div>

            </>
            :<>
                <div className="container">
                <h1>APPLICATIONS FROM JOB SEEKER</h1>
                {
                  application.map((element)=>{
                    return <EmployerCard element={element} key={element._id} openModal={openModal}/>
                  })
                }
              </div>
            </>
          }
          {
            modalOpen && (
              <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal}/>
            )
          }
        </section>
    </>
  )
}

export default MyApplications

const JobSeekerCard=({element,deleteApplication,openModal})=>{
  return (
    <>
      <div className="job_seeker_card">
        <div className="detail">
          <p style={{marginLeft:"30px"}}>
            <span style={{marginRight:"13px"}}>Name:</span>
              {element.name}
          </p>
          <p style={{marginLeft:"30px"}}>
            <span style={{marginRight:"15px"}}>Email:</span>
              {element.email}
          </p>
          <p style={{marginLeft:"30px"}}>
            <span style={{marginRight:"13px"}}>Phone:</span>
              {element.phone}
          </p>
          <p style={{marginLeft:"30px"}}>
            <span style={{marginRight:"13px"}}>Address:</span>
              {element.address}
          </p>
          <p style={{marginLeft:"30px"}}>
            <span style={{marginRight:"13px"}}>Cover Letter:</span>
              {element.coverLetter}
          </p>
        </div>
        <div className="resume">
          <img src={element.resume.url} alt="Resume Image Loading" 
          onClick={()=>openModal(element.resume.url)}/>
        </div>
        <div className="btn_area">
          <button onClick={()=>deleteApplication(element._id)}>Delete Application</button>
        </div>
      </div>
    </>
  )
}
const EmployerCard=({element,openModal})=>{
  return (
    <>
        <div className="job_seeker_card">
        <div className="detail">
          <p>
            <span>Name:</span>
              {element.name}
          </p>
          <p>
            <span>Email:</span>
              {element.email}
          </p>
          <p>
            <span>Phone:</span>
              {element.phone}
          </p>
          <p>
            <span>Address:</span>
              {element.address}
          </p>
          <p>
            <span>Cover Letter:</span>
              {element.coverLetter}
          </p>
        </div>
        <div className="resume">
          <img src={element.resume.url} alt="Resume Image Loading" 
          onClick={()=>openModal(element.resume.url)}/>
        </div>
       
      </div>
    </>
  )
}