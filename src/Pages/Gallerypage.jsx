import React from 'react'
import Gallery from '../components/Gallery'
import Nav from '../components/Nav'
import {  BsFacebook} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import FooterWithSocialMediaIcons from '../components/FooterWithSocialMediaIcons';
import { Link } from 'react-router-dom';
 
function Gallerypage() {
  return (
    <div>
    <Nav />
    <div className="pt-16">
     <Gallery />
     <FooterWithSocialMediaIcons />
    </div>
    </div>
  )
}

export default Gallerypage
 