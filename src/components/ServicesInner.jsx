import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import services from "../API/services.json";
function ServicesInner() {
  return (
    <>
      <section className="  px-8 py-12">
        {/* Heading section for Services */}
        <div
          data-aos=" justify zoom-in"
          className=" p-6 mx-1 lg:text-5xl font-extrabold   "
        >
          <div className=" py-4  text-2xl   ">
            <h1 className="text-left text-[#F59E0B]	">Services</h1>{" "}
          </div>
           
        </div>


      {/* Content section for rendering services from JSON  */}
      <div className="mt-5 p-8   grid grid-cols-1 md:grid-cols-3 gap-8  parent place-content-center text-black">
        {services.services.map((service) => {
         
          return (
            //

            <div  key={service.serviceId} className=" text-black place-content-center bg-transparent rounded backdrop-blur-sm  shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105">
              
              <div className="p-4">
                <div className="relative">
                  <img
                    src={`images/services/${service.serviceId}.png`}
                    alt="Service 1"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className="flex items-center text-xl font-semibold  mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                  {service.name}
                </h3>
                <p className="">{service.description}</p>
              </div>
            </div>
            // </div>
          );
        })}
      </div>
      </section> 
     

    </>
  );
}

export default ServicesInner;
