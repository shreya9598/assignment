const { verifyToken, getTokenContent } = require("../auth/token")

exports.authenticate = (req, res, next)=>{
    const bearerHeader = req.headers["authorization"]
    if(typeof bearerHeader == "undefined"){
        return res.status(401).json("Unauthorized")
    }

    const bearerToken = bearerHeader.split(" ")[1]
    if(!verifyToken(bearerToken)) return res.status(401).json("Unauthorized")
    const tokenContent = getTokenContent(bearerToken)
    req.isAdmin= tokenContent.role == "ADMIN"
    req.userId = tokenContent.id
    next()
}