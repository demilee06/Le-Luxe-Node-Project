import { compare } from "bcrypt";
import { getUserdb } from "../model/userdb.js";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv';
config()

const checkUser = async (req,res,next) => {
    const {emailAdd,userPass} = req.body; 

    let hashedPassword = (await getUserdb(emailAdd)).userPass
    
    let result = await compare (userPass,hashedPassword) 
    try{
        if(result == true){
            let token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY ,{expiresIn:'1hr'})
            console.log(token);
            jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
                if(err){
                    res.json({message:'Token is invalid'})
                }
                req.body.emailAdd = decoded.userPass
            })
            
            req.body.token = token 
            next();
            return
        }else{
            res.send('Password is incorrect')
        }
    }catch(e){
        res.json({
            status: 404,
            message: ('An Error has occured')
        })
    }
      
}

const verifyAToken =(req,res,next)=>{
    let {cookie} = req.headers //acts as a conditional statement
    // checks if the token exists first
    let token = cookie && cookie.split('=')[1]//indexing to target the array
    console.log(req.headers);
    next()
    
}

export{checkUser,verifyAToken}