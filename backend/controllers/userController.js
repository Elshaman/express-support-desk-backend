const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

exports.register = asyncHandler(
    async(req, res)=>{
        const {email, name, password} = req.body
        //validacion
        if(!name || !email || !password){
            res.status(400)
            throw new Error('Please include all fields')
           
        }

        //find if user already exists
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error('user already exists')
        }

        //Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)
        
        //create user
        const newUser = User.create({
            name,
            email,
            password : hashedPassword
        })

        if(newUser){
            res.status(201).json(newUser)
        }else{
            res.status(400)
            throw  new error('Invalid user data')
        }

       
    }
)   

exports.login=asyncHandler(async(req, res)=>{
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email
            })
    }else{
        res.status(401)
        throw new Error('Invalid credentials')
    }

})