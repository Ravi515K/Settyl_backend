const jwt=require("jsonwebtoken");

const authenticate = (req,res,next)=>{
    //console.log("req",req.query)
   
    let token =req.headers.authorization
    console.log(token,"token")
    if(token ){
        jwt.verify(token,"SECRET",(err,decoded)=>{
            if(decoded){
                console.log(decoded)
                next()
            }else{
                res.send({"msg":"Please Logg In"})
            }
        })
    }else{
        res.send({"msg":"Please Logg In first"})
    }
}

module.exports=authenticate