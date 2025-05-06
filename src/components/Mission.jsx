import React from 'react'

function Mission() {
  return (
    <div className='px-8'>
      <div className="mt-5  grid grid-cols-1 md:grid-cols-3 gap-8  parent place-content-center px-5">
         
         
{/* Mission */}
            <div    className="place-content-center bg-transparent rounded backdrop-blur-sm  shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105 ">
              
              <div className="p-4">
                <div className="relative">
                  <img
                    src="images/mission.png"
                    alt="Service 1"
                    className="w-20 h-30 object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className="flex items-center text-xl font-semibold text-black mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                 Our Mission
                </h3>
                <p className="text-black"> The mission of Environment and Engineering Research Center Pvt. Ltd is to conduct research
and provide consultancy services related to environment, engineering and various development
sector activities.</p>
              </div>
            </div>


            {/* Vision */}
            <div    className="place-content-center bg-transparent rounded backdrop-blur-sm  shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105 ">
              
              <div className="p-4">
                <div className="relative">
                  <img
                    src="images/vision.png"
                    alt="Service 1"
                    className="w-20 h-30 object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className="flex items-center text-xl font-semibold text-black mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                 Our Vision
                </h3>
                <p className="text-black"> Environment and Engineering Research Center Pvt. Ltd vision is to be a leading research,
training and advisory institution on strategic research areas as well consulting service in
environment and engineering sector in close collaboration with national and international
organizations.</p>
              </div>
            </div>


              {/* Vision */}
              <div    className="place-content-center bg-transparent rounded backdrop-blur-sm  shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105 ">
              
              <div className="p-4">
                <div className="relative">
                  <img
                    src="images/core.png"
                    alt="Service 1"
                    className="w-20 h-30 object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className="flex items-center text-xl font-semibold text-black mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                 Core Values
                </h3>
                <p className="text-black">  Combining development of new analytical and scientific approaches with testing in practical
pilot applications, Effective teamwork, mentorship and collaboration, Upholding professionalism, ethical standards and meritocracy, Freedom of thought and expression in theoretical inquiry and other activities, Ensure safeguarding the environment while practicing engineering works.</p>
              </div>
            </div>



            
          
      </div>
    </div>
  )
}

export default Mission
