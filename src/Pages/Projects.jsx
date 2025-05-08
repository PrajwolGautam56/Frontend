// Inside AboutUs.js
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Nav from "../components/Nav";
import ServicesDetail from "../components/ServicesDetail";
import services from "../API/services.json";
import FooterWithSocialMediaIcons from "../components/FooterWithSocialMediaIcons";
import Project from "../components/Project";
import Clients from "../components/Clients";
import ProjectsTable from "../components/ProjectsTable";

const Projects = () => {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <Project />
        <ProjectsTable />
        <Clients />
        <FooterWithSocialMediaIcons />
      </div>
    </>
  );
};

export default Projects;
