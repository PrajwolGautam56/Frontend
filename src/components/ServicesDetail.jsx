import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import services from "../API/services.json";
function ServicesDetail() {
  return (
    <>
      <section className="bg_service  px-8 py-12">
        {/* Heading section for Services */}
        <div
          data-aos=" justify zoom-in"
          className="  mx-1 lg:text-5xl font-extrabold   "
        >
          <div className=" py-4  text-2xl   ">
            <h1 className="text-left text-[#F59E0B]	"> Our Services</h1>{" "}
          </div>
          <p className=" font-sans	 Montserrat text-xl   text-white  md:text-xl  font-medium	 mx-auto sm:text-sm py-8">
            <span className="text-[#5DB85E] sm:text-xl md:text-2xl ">
              EERC-{" "}
            </span>
            Empowering Progress through Innovative  <br></br>  
            Engineering and Environmental Research.
          </p>
        </div>


      {/* Content section for rendering services from JSON  */}
      <div className="mt-5  grid grid-cols-1 md:grid-cols-3 gap-8  parent place-content-center">
        {services.services.map((service) => {
         
          return (
            //

            <div  key={service.serviceId} className="place-content-center bg-transparent rounded backdrop-blur-sm  shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105">
              
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
                <h3 className="flex items-center text-xl font-semibold text-white mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                  {service.name}
                </h3>
                <p className="text-white">{service.description}</p>
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

export default ServicesDetail;
