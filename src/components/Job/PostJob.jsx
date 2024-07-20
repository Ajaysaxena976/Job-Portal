import React, { useContext, useState } from 'react'
import {Context} from "../../main"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function PostJob() {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [country,setCountry]=useState("");
  const [city,setCity]=useState("");
  const [location,setLocation]=useState("");
  const [category,setCategory]=useState("");
  const [salaryFrom,setSalaryFrom]=useState("");
  const [salaryTo,setSalaryTo]=useState("");
  const [fixedSalary,setFixedSalary]=useState("");
  const [salaryType,setSalaryType]=useState("default");
  const navigateto=useNavigate();
  const {isAuthorized,user}=useContext(Context);

  const handleJobPost=async(e)=>{
    //to prevent page refreshes
    e.preventDefault();
    if(salaryType==="Fixed Salary"){
      setSalaryTo("");
      setSalaryFrom("");
    }
    else if(salaryType==="Ranged Salary"){
      setFixedSalary("");
    }
    else{
      setSalaryTo("");
      setSalaryFrom("");
      setFixedSalary("");
    }
    await axios.post("https://job-portal-dcow.onrender.com/api/v1/job/post",fixedSalary>=4?
      {title,category,country,description,location,fixedSalary,city}:
      {title,category,country,description,location,salaryTo,salaryFrom,city},{withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then((res)=>{
        toast.success(res.data.message);
        navigateto("/job/getAll");
      })
      .catch((err)=>{
        toast.error(err.response.data.message);
        console.log(err);
      })
      
      if(!isAuthorized || (user && user.role==="Job Seeker")){
          navigateto("/");
      }
  }
  return (
    <>
        <div className="job_post page">
            <div className="container">
              <h3>POST NEW JOB</h3>
              <form onSubmit={handleJobPost}>
                <div className="wrapper">
                  <input type="text" placeholder='Job Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                  <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Mobile App Development"> Mobile App Development</option>
                <option value="Frontend Web Development">Frontend Web Development</option>
                <option value="MERN Stack Development">MERN STACK Development</option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence"> Artificial Intelligence</option>
                <option value="Video Animation">Video Animation</option>
                <option value="MEAN Stack Development">MEAN STACK Development</option>
                <option value="MEVN Stack Development">MEVN STACK Development</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Customer Support">Customer Support</option>
                <option value="E Commerce">E-Commerce</option>
                <option value="Health Care">Health Care</option>
                <option value="Finance">Finance</option>
              </select>
              </div>
              <div className="wrapper">
              <input type="text" placeholder='Enter Country' value={country} onChange={(e)=>setCountry(e.target.value)} />
              <input type="text" placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)} />
              </div>
              <input type="text" value={location} placeholder="Enter Location (At least 50 charcters)" onChange={(e)=>setLocation(e.target.value)} />
              <div className="salary_wrapper">
                <select value={salaryType} onChange={(e)=>setSalaryType(e.target.value)}>
                  <option value="default"></option>
                  <option value="Fixed Salary">Fixed Salary</option>
                  <option value="Ranged Salary">Ranged Salary</option>
                </select>
                <div>
                  {
                    salaryType==='default'?(<p>Please provide the salary Type</p>)
                    :salaryType==="Fixed Salary"?(
                      <input type="number" placeholder="Enter fixed salary" value={fixedSalary} onChange={(e)=>setFixedSalary(e.target.value)}/>
                    ):(
                      <div className='ranged_salary'>
                          <input type="number" placeholder="Salary From" value={salaryFrom} onChange={(e)=>setSalaryFrom(e.target.value)} />
                          <input type="number" placeholder="Salary To" value={salaryTo} onChange={(e)=>setSalaryTo(e.target.value)} />
                      </div>
                    )
                  }
                </div>

              </div>
              <textarea rows="10" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter description of job'/>
                <button type="submit">Create Job</button>

              </form>
            </div>
        </div>
    </>
  )
}

export default PostJob