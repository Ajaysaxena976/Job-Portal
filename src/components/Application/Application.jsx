import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Application() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [coverLetter,setCoverLetter]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [resume,setResume]=useState(null);
  const {isAuthorized,user} =useContext(Context);
  const navigateTo=useNavigate();

  //function to handle file input
  const handleFileChange=(e)=>{
    const resume=e.target.files[0];
    setResume(resume);
  }

  const {id}=useParams();
  const handleApplication=async(e)=>{
    e.preventDefault();
    //note whenever we have a file and want to send the post request
    //then we need to append the data to the form and then send the 
    //data with the post request

    const formData=new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("address",address);
    formData.append("coverLetter",coverLetter);
    formData.append("resume",resume);
    formData.append("jobId",id);

    try{
      const {data}=await axios.post("https://job-portal-dcow.onrender.com/api/v1/application/post",formData,
        {
          withCredentials:true,
          headers:{
            "Content-Type":"multipart/form-data"
          }
        });
        setName("");
        setEmail("");
        setAddress("");
        setCoverLetter("");
        setPhone("");
        setResume(null);
        toast.success(data.message);
        navigateTo("/job/getall");
    }
    catch(error){
        toast.error(error.response.data.message);
    }
  } 
  if(!isAuthorized || user.role==="Employer"){
    toast.error("You are not job seeker");
    navigateTo("");
  }
  return (
    <section className='application'>
      <div className="container">
        <h3>APPLICATION FORM</h3>
        <form onSubmit={handleApplication}>
          <input type="text" value={name} placeholder='your name' onChange={(e)=>setName(e.target.value)}  />
          <input type="text" value={email} placeholder='Your email' onChange={(e)=>setEmail(e.target.value)}  />
          <input type="Number" value={phone} placeholder='Your phone Number' onChange={(e)=>setPhone(e.target.value)}  />
          <input type="text" value={address} placeholder='Your address' onChange={(e)=>setAddress(e.target.value)}  />
          <textarea value={coverLetter} onChange={(e)=>setCoverLetter(e.target.value)} placeholder='Write your cover letter'></textarea>
          <div>
            <label style={{textAlign:"start",display:"block",fontSize:"20px"}}>Select Resume</label>
            <input type="file" accept='.jpg,.png,.webp' onChange={handleFileChange} style={{width:"100%"}}/>

          </div>
          <button type='submit'>Send Application</button>

        </form>
      </div>
    </section>
  )
}

export default Application
