  "use server"
  import { cloudUpload } from "@/utilis/CloudUpload";
  import Devs from "@/models/Devs"; 
import { mongoDbConnection } from "@/config/mongoDb";
import { revalidatePath } from "next/cache";


/**
 * Create new Dev 
 * @param {*} formData 
 */
export const createDevData = async ( formData ) => {

  await mongoDbConnection();

  // get form data 
  const name = formData.get("name");
  const email = formData.get("email");
  const skill = formData.get("skill");
  const location = formData.get("location");

  // photo upload to cloud 
  const fileData = await cloudUpload({
    file :  formData.get("photo"), 
    preset : "next-app", 
    cloudName: "dbtksv1tc"
  }); 

await Devs.create({
  name,
  email,
  skill,
  location,
  photo : fileData.secure_url
});

revalidatePath("/devs"); 
}


/**
 * Get all devs data
 */
export const getAllDevsData = async () => {
  await mongoDbConnection();

  const devs = await Devs.find(); 

  return devs; 
}


/**
 * Delete single dev data
 */
export const deleteDevData = async (id) => {
  await mongoDbConnection();

  const dev = await Devs.findByIdAndDelete(id); 

  revalidatePath("/devs"); 
}





