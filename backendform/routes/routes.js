const { request, response} = require('express')
const express = require('express')
const router = express.Router()
const mongoose =require('mongoose')
const signUpTemplate=require('../model/modelform')
const bcrypt = require('bcrypt')

router.post('/signup', async(request, response)=>{
    const saltPassword= await bcrypt.genSalt(9)
    const securePassword= await bcrypt.hash(request.body.password, saltPassword)

    const SignupUser= new signUpTemplate({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })

    SignupUser.save().then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports= router