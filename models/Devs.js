
import mongoose from "mongoose";

// create schema 
const devsSchema = mongoose.Schema({
name : {
  type : String,
  default : null
},
email : {
  type : String,
  required : true,
  trim : true
},
skill : {
  type : String,
}, 
location : {
  type : String,
}, 
photo : {
  type : String,
}
},
{
timestamps: true,
}
)


// check models 
const schema = mongoose.models.Dev || mongoose.model("Dev", devsSchema);

// export default schema 
export default schema

