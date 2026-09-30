import mongoose from "mongoose";
 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requred:true
    },
    email:{
        type:String,
        require:true
    }
 })
 export default mongoose.model("User",userSchema)