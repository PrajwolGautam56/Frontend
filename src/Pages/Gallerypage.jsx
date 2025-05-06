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
     {/* <section className="dotted text-black h-[30vh] flex items-center justify-center relative overflow-hidden">
        <div className="text-center relative z-10">
          <h1 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s Roboto-Slab text-[#eda257]">  Gallery</h1>
          <p className="text-xl animate__animated animate__fadeIn animate__delay-2s Roboto-Slab text-[#5DB85E]"></p>
        <p className='text-[#5DB85E]'> Find us on</p>

        <ul className="flex justify-center p-2 text-[#5DB85E]">
                                          <Link><li className=' pl-1'> <BsFacebook /> </li> </Link>  
                                            
                                    </ul>
        </div>
        
         
      </section> */}
      <Gallery />
      <FooterWithSocialMediaIcons />
     </div>
   )
 }
 
 export default Gallerypage
 