 


    const jwt = require("jsonwebtoken")

     const Authenticate=(req,res,next)=>{

           const token = req.headers.authorization
           if(token){
            jwt.verify(token, "sau", (err,decoded) =>{
                if(decoded){
                    const userID = decoded.userID
                    req.body.userID = userID
                    next()
                }else{
                    res.send({"msg":"Login First"})
                }
            })
           }else{
            res.send({"msg":"Login First"})
           }
     }

     module.exports = {Authenticate}