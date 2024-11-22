import mongoose from "mongoose";

// create mongodb connection 
export const mongoDbConnection = async(req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(` MongoDb connection Successfully Done `);
  } catch (error) {
    console.log(` MongoDb connection Failed `);
  }
}














