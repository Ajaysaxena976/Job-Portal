import React from 'react'
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { IoMegaphoneSharp } from 'react-icons/io5';
import { RiBarChart2Fill, RiHealthBookFill, RiTeamFill } from 'react-icons/ri';
import { MdHeadsetMic, MdShoppingCart, MdPalette,MdOutlineWeb } from 'react-icons/md';

import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
function PopularCategories() {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
    },
    ,
    {
        id: 9,
        title: "Backend Web Development",
        subTitle: "400 Open Positions",
        icon: <MdOutlineWeb />,
    },
    {
        id: 10,
        title: "Marketing & Advertising",
        subTitle: "600 Open Positions",
        icon: <IoMegaphoneSharp />,
    },
    {
        id: 11,
        title: "Data Science",
        subTitle: "350 Open Positions",
        icon: <RiBarChart2Fill />,
    },
    {
        id: 12,
        title: "Customer Support",
        subTitle: "250 Open Positions",
        icon: <MdHeadsetMic />,
    },
    {
        id: 13,
        title: "Human Resources",
        subTitle: "180 Open Positions",
        icon: <RiTeamFill />,
    },
    {
        id: 14,
        title: "E-commerce",
        subTitle: "320 Open Positions",
        icon: <MdShoppingCart />,
    },
    {
        id: 15,
        title: "UI/UX Design",
        subTitle: "400 Open Positions",
        icon: <MdPalette />,
    },
    {
      id: 16,
      title: "Healthcare",
      subTitle: "300 Open Positions",
      icon: <RiHealthBookFill />,
  },
  ];
  return (
    <div className="categories">
        <h3 style={{textAlign:"center"}}>POPULAR CATEGORIES</h3>
        <div className="banner">
          {
            categories.map((element)=>{
              return (
                <div className="card" key={element.id}>
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                      <p>{element.title}</p>
                      <p>{element.subTitle}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default PopularCategories