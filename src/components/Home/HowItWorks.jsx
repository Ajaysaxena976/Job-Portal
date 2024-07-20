import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import { MdFindInPage } from 'react-icons/md'

function HowItWorks() {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>HOW IT WORKS</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>Create Account</p>
            <p>Begin your journey by creating a personalized account. Fill in your details and start exploring opportunities tailored to your skills and preferences.</p>
          </div>
          <div className="card">
            <MdFindInPage/>
            <p>Find a Job/Post a Job</p>
            <p>Browse through a diverse range of job listings or post your own job openings. Find the perfect match that aligns with your career goals or organizational needs.</p>
          </div>
          <div className="card">
            <IoSend/>
            <p>Check Status/Take Interview</p>
            <p> Once you've applied or received applications, track your progress. Get shortlisted for interviews and showcase your talents to potential employers, paving the way for your next career move.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks