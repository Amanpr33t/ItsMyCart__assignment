const notFound=(req,res)=>{
    res.status(404).json({status:'failed',msg:'Route does not exist'})
}
module.exports= notFound