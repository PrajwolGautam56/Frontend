import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./ProjectSection";
AOS.init();

const Project = () => {
  return (
    <section className="    ">
      <br></br>
      <br></br>
      <div className="container mx-auto px-4">
        <div
          data-aos=" justify zoom-in"
          className="   text-5xl font-extrabold   h-40"
        >
          <div className="title  font-bold text-2xl  tracking-wide  float-right">
            <h1 className="float-right text-right  text-amber-500	">
              {" "}
              Hightlight Projects
            </h1>{" "}
          </div>
          <br></br>
          <p className="  font-sans	 Montserrat text-xl   text-black   md:text-xl  font-medium	 mx-auto sm:text-sm  float-right text-right">
          Unleashing
            <span className="text-[#5DB85E]  "> Innovation  </span>
             , Creativity and Excellence <br></br>  in our Pioneering Project.
          </p>
        </div>

        
       
          
         
      </div>
     <br></br>
     < ProjectSection />
    </section>
  );
};

export default Project;
