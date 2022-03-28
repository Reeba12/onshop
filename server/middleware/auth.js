 const authenticate=(permission)=>{
    return (req,res,next)=>{
        const userRole=req.body.role
        console.log(userRole)
        if(permission.includes(userRole)){
            next()
        }
        else{
            res.json({error:"dan,t have access"})
        }
    }

}
module.exports=authenticate