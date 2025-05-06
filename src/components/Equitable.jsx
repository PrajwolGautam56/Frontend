import { useState } from "react";
import "../CSS/table.css";
import equi from "../equi.json"
import cam from "../equi.json"


const Equitable = () => {
const [show, setShow] = useState(false);

const ShowTable =() => {
  if (show == true) {
    setShow(false)
  }
    else {
      setShow(true)
    }
  }
;

  
  
  return (

   
    <div className="p-24 proj">
      <h2 onClick={ShowTable} className="border-spacing-1  text-center  cursor-pointer mb-4 text-2xl tracking-tight font-extrabold text-amber-500 dark:text-white ">
      View Office  Equipments 
      </h2>

    {
      show && (<>
      <div className="proj-table border-spacing-1 border-solid border-2 p-3">
      <table className="w-full  border border-black text-center rounded-sm overflow-scroll proj-table  ">
        <thead className="border border-black p-5">
          <tr>
           <th className="tableHeader  w-1/5"> S.N.</th>
            <th className="tableHeader w-1/5">Name </th>
            <th className="tableHeader w-1/5"> Quantities</th>
            <th className="tableHeader  w-2/5"> Specifications/ Remarks</th>
            
          </tr>
        </thead>

        <tbody>
          {/* Filling Dummy data for now */}
          {equi.equi.map((equi,id)=>{
            return(
              <tr key={id}>
            <td className="tableBody">{id+1}.</td>
            <td className="tableBody text-left">{equi.particulars} </td>
            <td className="tableBody">{equi.quantities}</td>
            <td className="tableBody">{equi.specifications}</td>
          </tr>

            )

          })}
         
        </tbody>
      </table>
      </div>


<br /><br /><br /><br />


      <h2 className="text-center mb-4 text-2xl tracking-tight font-extrabold text-amber-500 dark:text-white ">
      Photo/Video Equipments
      </h2>
      <div className="proj-table border-spacing-1 border-solid border-2 p-3">
      <table className="w-full  border border-black text-center rounded-sm   proj-table  ">
        <thead className="border border-black p-5">
          <tr>
           <th className="tableHeader  w-1/12"> S.N.</th>
            <th className="tableHeader w-1/5">Camera Body </th>
            <th className="tableHeader w-1/5"> Lens Attached</th>
            {/* <th className="tableHeader  w-2/5"> Specifications/ Remarks</th> */}
            
          </tr>
        </thead>

        <tbody>
          {/* Filling Dummy data for now */}
          {cam.cam.map((cam,id)=>{
            return(
              <tr className="h-8" key={id}>
            <td className="h-8 tableBody">{id+1}.</td>
            <td className="h-8 tableBody text-left">{cam.particulars} </td>
            <td className=" h-8 tableBody">{cam.lens}</td>
             
          </tr>

            )

          })}
         
        </tbody>
      </table>
      </div>

      </>)

    }
     
     
      
    </div>
  );
};

export default Equitable;
