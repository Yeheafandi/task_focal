const logger =(req ,res,next)=>{
    console.log("Hi",req.method,req.url);
    next();
}

module.exports=logger;