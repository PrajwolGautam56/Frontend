import React from "react";

const icons = [
  {
    name: "Disaster Risk Reduction & Management",
    imageUrl: "images/icons/1.png",
  },
  {
    name: "Development Planning & Management",
    imageUrl: "images/icons/2.png",
  },
  {
    name: "Digital Mapping",
    imageUrl: "images/icons/3.png",
  },
  {
    name: "Land Reform & Management",
    imageUrl: "images/icons/4.png",
  },
  {
    name: "Climate Change & Environment",
    imageUrl: "images/icons/5.png",
  },
  {
    name: "Agriculture",
    imageUrl: "images/icons/6.png",
  },
  {
    name: "Geospatial Analysis",
    imageUrl: "images/icons/7.png",
  },
  {
    name: "Heritage Conservation & Promotion",
    imageUrl: "images/icons/8.png",
  },
  {
    name: "Training and Campaign",
    imageUrl: "images/icons/11.jpg",
  },
  {
    name: "Software and IT",
    imageUrl: "images/icons/12.png",
  }

  // More people...
];
function Area() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12 dotted">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="title font-bold text-2xl text-amber-500">
            Areas of Work
          </h2>
        </div>

        <div className="w-full">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {icons.map((icon) => (
              <li key={icon.imageUrl} className="flex items-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors duration-200">
                <img
                  src={icon.imageUrl}
                  alt={icon.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full"
                />
                <p className="ml-3 md:ml-4 text-sm md:text-base text-gray-800">{icon.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Area;

{
  /* <li className='flex lg:p-2 '>

<img
    src="public/images/services/1.png"
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Tool for Data Collection & Visualization</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Mapping</p>
</li>
 <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Web GIS</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Drone Consulting Services</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Geospatial Analysis</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Map Literacy Trainings</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Creative Graphic Design</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Participatory Community Mapping (Hybrid Approach)</p>
</li> */
}
