import Image from "next/image";

import team from "@/public/team.jpeg"; 


const DevList = () => {
  return (
    <>
       <div className="all-dev-data">
                  <div className="single-dev p-5 shadow border flex gap-6 items-center mb-2 ">
                     <Image 
                        src={team} 
                        alt="photo" 
                        width={120} 
                        height={80} 
                        className="rounded-full w-16 h-16 "
                        />
                        <h2> Goutam Ray </h2>
                        <h3> Mern Stack </h3>
                        <h3> Rangpur </h3>
                        <div className="flex gap-2">
                           <button className="bg-green-600 text-white px-2 py-1 rounded-md "> Edit </button>
                          <button className="bg-red-500 text-white rounded-md px-2 py-1 "> Del </button>
                        </div>
                  </div>
                  <div className="single-dev p-5 shadow border flex gap-6 items-center mb-2 ">
                     <Image 
                        src={team} 
                        alt="photo" 
                        width={120} 
                        height={80} 
                        className="rounded-full w-16 h-16 "
                        />
                        <h2> Goutam Ray </h2>
                        <h3> Mern Stack </h3>
                        <h3> Rangpur </h3>
                        <div className="flex gap-2">
                           <button className="bg-green-600 text-white px-2 py-1 rounded-md "> Edit </button>
                          <button className="bg-red-500 text-white rounded-md px-2 py-1 "> Del </button>
                        </div>
                  </div>
               </div>
    </>
  )
}

export default DevList



