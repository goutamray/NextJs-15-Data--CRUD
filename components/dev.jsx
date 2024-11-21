import { cloudUpload } from "@/utilis/CloudUpload"
import DevList from "./DevList"


const Dev = () => {

  const createDevData = async ( formData ) => {
    "use server"

    await cloudUpload({
      file :  formData.get("photo"), 
      preset : "next-app", 
      cloudName: "dbtksv1tc"
    }); 

    

  }

  return (
    <div className="px-20 py-20">
      <h2 className="text-center mb-5 text-5xl "> All Dev List Data  </h2>
      <div className="container">
        <div className="row flex justify-between">
           <div className="col-md-6 w-[500px] shadow p-5">
              <h2 className="text-center mb-2 font-medium text-2xl"> Add new Dev </h2>
             <form action={createDevData}>
               <label htmlFor=""> Name </label>
                <input 
                  type="text" 
                  className="border border-gray-400 px-2 py-1 mb-2 w-full" placeholder="Type your name "
                  name="name"
                />
                 <label htmlFor=""> Email </label>
                <input 
                  type="text" 
                  className="border border-gray-400 px-2 py-1 mb-2 w-full" placeholder="Type your Email "
                  name="email"
                />
                 <label htmlFor=""> Skill </label>
                <input 
                  type="text" 
                  className="border border-gray-400 px-2 py-1 mb-2 w-full" placeholder="Type your Skill "
                  name="skill"
                />
                 <label htmlFor=""> Location </label>
                <input 
                  type="text" 
                  className="border border-gray-400 px-2 py-1 mb-2 w-full" placeholder="Type your location "
                  name="location"
                />
                 <label htmlFor=""> Photo </label>
                <input 
                  type="file" 
                  className="border border-gray-400 px-2 py-1 mb-1 w-full" placeholder="Type your name "
                  name="photo"
                />
                <button className="bg-blue-500 text-white px-3 py-2 rounded-md ml-1 mt-3"> Create </button>
             </form>
           </div>
           <div className="col-md-6 w-[600px]  ">
             <h2 className="font-medium text-2xl mb-3"> All dev List </h2>
               <DevList />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Dev
