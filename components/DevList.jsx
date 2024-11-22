import Image from "next/image";

import { getAllDevsData } from "@/actions/devsAction";
import Button from "./Button";



const DevList = async() => {

   const devs = await getAllDevsData(); 

  

  return (
    <>
       <div className="all-dev-data">
         {
            devs?.length !== 0 && 
            devs?.map((item, index) => {
               return  <div className="single-dev p-5 shadow border flex gap-6 items-center mb-2 justify-between" key={index}>
               <Image 
                  src={item?.photo} 
                  alt="photo" 
                  width={120} 
                  height={80} 
                  className="rounded-full w-16 h-16 "
                  />
                  <h2> {item?.name} </h2>
                  <h3> {item?.skill} </h3>
                  <h3> {item?.location} </h3>
                  <div className="flex gap-2">
                     <button className="bg-green-600 text-white px-2 py-1 rounded-md "> Edit </button>
                     <Button id={item?._id.toString()}/>
                  </div>
            </div>
            })
         }
                 
     </div>
    </>
  )
}

export default DevList



