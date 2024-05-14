const express = require("express")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "hjh238821bs229"

exports.generateToken = (reqUser)=>{
    return jwt.sign(reqUser, SECRET_KEY, {expiresIn: 60 * 60})
}

exports.verifyToken= (token)=>{
    return jwt.verify(token, SECRET_KEY)
}

exports.getTokenContent = (token)=>{
    return jwt.decode(token)
}