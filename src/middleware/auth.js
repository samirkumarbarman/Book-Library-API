import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const auth = (req, res, next) =>{
 const token = req.header("Authorization");
    if (!token){
    return res.status(404).json({message:"No token, authorization denied"});
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        res.user(decoded);
        next();
    } catch (error) {
        res.error(401).json({message:"Token not found"});
    }

};

