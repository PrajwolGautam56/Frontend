const client = [
  {
     
    imageUrl:'images/clients/1.png'
  },
  {
     
    imageUrl:'images/clients/2.png'
  },
  {
     
    imageUrl:'images/clients/3.png'
  },
  {
     
    imageUrl:'images/clients/4.png'
  },
  {
     
    imageUrl:'images/clients/5.png'
  },
  {
     
    imageUrl:'images/clients/6.png'
  },
  {
     
    imageUrl:'images/clients/7.png'
  },
  {
     
    imageUrl:'images/clients/8.png'
  },
  {
     
    imageUrl:'images/clients/9.png'
  },
  {
     
    imageUrl:'images/clients/10.png'
  },  
  {
     
    imageUrl:'images/clients/11.png'
  },  
  {
     
    imageUrl:'images/clients/12.png'
  },  
  {
     
    imageUrl:'images/clients/13.png'
  }, 
  {
     
    imageUrl:'images/clients/14.png'
  }, 
  {
     
    imageUrl:'images/clients/15.png'
  },  {
     
    imageUrl:'images/clients/16.png'
  },  {
     
    imageUrl:'images/clients/17.png'
  },  {
     
    imageUrl:'images/clients/18.png'
  },  {
     
    imageUrl:'images/clients/19.png'
  }, 
    
    
  // More people...
]

export default function Clients() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-bold text-2xl text-amber-500 pb-8">
            Major Clients
          </h2>
          
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 ">
            
          {client.map((clients) => (
            <div key={clients.imageUrl} >
            <img 
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1  "
              src={clients.imageUrl}
              alt="Transistor"
              width={158}
              height={58}
            />

</div>  
        ))}
        
{/* 
            <img
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1 border-solid border-2 border-black "
              src=" public/images/unfpa.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1 border-solid border-2 border-black "
              src="public/images/mercy.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-14 w-full object-contain sm:col-start-2 lg:col-span-1 border-solid border-2 border-black "
              src="public/images/adra.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1 border-solid border-2 border-black "
              src="public/images/cifrc.svg"
              alt="Statamic"
              width={158}
              height={48}
            /> */}
          </div>

          



 

           
          
        </div>
      </div>
    )
  }
  