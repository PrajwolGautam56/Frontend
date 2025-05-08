// Inside AboutUs.js
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Nav from "../components/Nav";
import Abouts from "../components/Abouts";
// import About from '../components/About';
import services from "../API/services.json";
import FooterWithSocialMediaIcons from "../components/FooterWithSocialMediaIcons";
import Mission from "../components/Mission";
import ServicesInner from "../components/ServicesInner";
import Ourteam from "../components/Ourteam";
import Testimonial from "../components/Testimonial";
import data from "../data.json";
import Equitable from "../components/Equitable";
import Teamtable from "../components/Teamtable";

const About = () => {
  return (
    <>
      <Nav />
      <div className="pt-24">
        <Abouts />
        <Mission />
        <div>
          
          <br /> <br /> <br /> <br />
          <ServicesInner />
           
          {/* <div className="bg-gray-100">
           

            <section className="bg-white py-16">
              <div className="container mx-auto text-center">
                <h2 className=" text-2xl font-bold text-amber-500	 mb-8">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.services.map((service) => {
                    return (
                      <div
                        key={service.serviceId}
                        className="bg-red-200 p-6 rounded-lg"
                      >
                        <h3 className="text-xl font-semibold mb-4">
                          {" "}
                          {service.name}
                        </h3>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    );
                  })}

                  
                  
                </div>
              </div>
            </section>


          </div> */}









        </div>
       

        <Ourteam />
        <Teamtable />
        <Equitable />
        {/* <Testimonial testimonialData={data} /> */}

        <FooterWithSocialMediaIcons />
      </div>
    </>
  );
};

export default About;
