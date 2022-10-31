const asyncHandler = require('express-async-handler')

exports.register = asyncHandler(
    async(req, res)=>{
        const {email, name, password} = req.body
        //validacion
        if(!name || !email || !password){
            res.status(400)
            throw new Error('Please include all fields')
           
        }
        res.send("resgister ")
    }
)   

exports.login=asyncHandler(async(req, res)=>{
    res.send("login")
})