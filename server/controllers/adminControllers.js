import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const adminLogin = async(req, res) => {
    try {
        const {email, password} = req.body;

        if(email != process.env.ADMIN_EMAIL || password != process.env.ADMIN_PASSWORD){
            return res.json({sucess: false, message: "Invalid Credentials"})
        }
        console.log("Login JWT_SECRET:", process.env.JWT_SECRET);
        const token = jwt.sign({email}, process.env.JWT_SECRET);
        res.json({success: true, token});
    } catch (error) {
        res.json({success: false, message: error.message});
    }   
}

