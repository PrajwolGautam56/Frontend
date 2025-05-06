import { Button } from "flowbite-react";
import Earth from "../components/Earth";
import "../CSS/Home.css";
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import ServicesDetail from "../components/ServicesDetail";
import Project from "../components/Project";
import ProjectSection from "../components/ProjectSection";
import FooterWithSocialMediaIcons from "../components/FooterWithSocialMediaIcons";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Abouts from "../components/Abouts";
import Clients from "../components/Clients";
import Area from "../components/Area";
import Ourteam from "../components/Ourteam";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function Home() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="landing-home">
      <Nav className="z-50" />
      <div className="flex flex-row">
        <div className="basis-5/5 -mt-12">
          <div className="banner-content-two min-[10px]:pl-5 min-[400px]:px-8 min-[1250px]:px-28 pt-40 firstView text-[#ffffff]">
            <br></br> <br></br>
            <br></br> <br></br>
            <br></br><br></br>
            <span className="sub-title sm:text-md lg:text-xl">
            </span>
            <h2 className="title py-4 font-extrabold titleFont sm:text-6xl md:text-5xl min-[1200px]:text-5xl tracking-wide">
              Building Resilience, <br /> Protecting our
              <span className="text-[#5DB85E]"> Planet.</span>
              <br />
            </h2>
            <div className="banner-content-bottom flex pt-12">
            </div>
          </div>
        </div>
        <div className="scroll-container">
          <div className="container-scroll" onClick={handleScroll}>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text-scroll">Scroll down</span>
          </div>
        </div>

        <div className="earthComponent">
          <Earth />
          <Abouts />
          <ServicesDetail />
          <Project />
          <Area />
          <Ourteam />
          <Clients />
          <Newsletter />
          <FooterWithSocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
