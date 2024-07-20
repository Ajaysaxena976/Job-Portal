import React from 'react'
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiOracle, SiTesla } from "react-icons/si";
import { FaGoogle, FaAmazon, FaFacebook } from 'react-icons/fa';
import { SiAdobe } from "react-icons/si";
import { SiNetflix, SiIbm, SiIntel, SiUber } from 'react-icons/si';
function PopularCompanies() {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 20,
      icon: <FaApple />,
    },
  ]
  const companies2=[
    {
      id: 4,
      title: "Google",
      location: "Silicon Valley, USA",
      openPositions: 30,
      icon: <FaGoogle />,
    },
    {
      id: 5,
      title: "Amazon",
      location: "Seattle, USA",
      openPositions: 15,
      icon: <FaAmazon />,
    },
    {
      id: 6,
      title: "Facebook",
      location: "Menlo Park, USA",
      openPositions: 25,
      icon: <FaFacebook />,
    },
  ]
  const companies3=[
    {
      id: 7,
      title: "Netflix",
      location: "Los Gatos, USA",
      openPositions: 8,
      icon: <SiNetflix />,
    },
    {
      id: 8,
      title: "IBM",
      location: "Armonk, USA",
      openPositions: 12,
      icon: <SiIbm />,
    },
    {
      id: 9,
      title: "Intel",
      location: "Santa Clara, USA",
      openPositions: 18,
      icon: <SiIntel />,
    },
  ]
  const companies4=[
    {
      id: 10,
      title: "Adobe",
      location: "San Jose, USA",
      openPositions: 7,
      icon: <SiAdobe />,
    },
    {
      id: 11,
      title: "Oracle",
      location: "Redwood City, USA",
      openPositions: 14,
      icon: <SiOracle />,
    },
    {
      id: 12,
      title: "Uber",
      location: "San Francisco, USA",
      openPositions: 6,
      icon: <SiUber />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {
            companies.map((element)=>{
              return (
                <div className="card" key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions</button>
                </div>
              )
            })
          }
          
        </div>
        <div className="banner">
          {
            companies2.map((element)=>{
              return (
                <div className="card" key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions</button>
                </div>
              )
            })
          }
          
        </div>
        <div className="banner">
          {
            companies3.map((element)=>{
              return (
                <div className="card" key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions</button>
                </div>
              )
            })
          }
          
        </div>
        <div className="banner">
          {
            companies4.map((element)=>{
              return (
                <div className="card" key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions</button>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default PopularCompanies