import User from "../models/User.js";

export const createUser = async (req, res) => {

    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            });
        }

        const user = await User.create({
            name,
            email
        });

        res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
export const getUser = async (req,res)=>{
    try{
        const users=await User.find();
        res.json(users);
    }
    catch(error){
        res.status(500).json({
            message:"Server error",
            error:error.message
        });
    }
};