import React, { useContext } from 'react'
import { Context } from '../../main';
import { Link } from 'react-router-dom';
import {FaLinkedinIn,FaGithub, FaWhatsapp} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import { MdEmail } from "react-icons/md";
function Footer() {
  const {isAuthorized} =useContext(Context);
  return (
    <footer className={isAuthorized?"footerShow":"footerHide"}>
      <div>&copy; All Rights Reserved By Mayank Saxena</div>
      <div>
        <a href="https://instagram.com/mayanksaxena2214"><RiInstagramFill/></a>
        <a href="https://www.linkedin.com/in/mayank-saxena-419388239/"><FaLinkedinIn/></a>
        <a href="https://github.com/MayankSaxena2214" target="_blank"><FaGithub/></a>
        <a href="mailto:mayanksaxena2214@gmail.com" target="blank"><MdEmail/></a>
        <a href="https://wa.me/9760159922" target="_blank"><FaWhatsapp/></a>

      </div>

    </footer>
  )
}

export default Footer;