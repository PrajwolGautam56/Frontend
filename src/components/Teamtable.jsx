import "../CSS/table.css";
import team from "../team.json"
const Teamtable = () => {
  
  return (
    <div className="p-24 proj">
      <h2 className="text-center mb-4 text-2xl tracking-tight font-extrabold text-amber-500 dark:text-white pb-12 ">
        Team and Experts
      </h2>
      <div className="proj-table border-spacing-1 border-solid border-2 p-3">
      <table className="w-full  border border-black text-center rounded-sm overflow-scroll proj-table  ">
        <thead className="border border-black p-5">
          <tr>
          <th className="tableHeader  w-1/5"> S.N.</th>
            <th className="tableHeader w-2/5">Name </th>
            <th className="tableHeader w-2/5"> Designation</th>
            <th className="tableHeader  w-1/5"> Area of Expertise</th>
            <th className="tableHeader  w-1/5"> Years of Experience</th>
          </tr>
        </thead>

        <tbody>
          {/* Filling Dummy data for now */}
          {team.team.map((team,id)=>{
            return(
              <tr key={id}>
              <td className="tableBody">{id+1}.</td>
            <td className="tableBody">{team.Name} </td>
            <td className="tableBody text-left">{team.Designation} </td>
            <td className="tableBody">{team.Area}</td>
            <td className="tableBody">{team.Years}</td>
          </tr>

            )

          })}
         
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default Teamtable;
