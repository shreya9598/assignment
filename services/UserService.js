const { generateToken } = require("../auth/token")
const user = require("../user")

exports.getById = (id)=>{
    return user.findById(id)
}

exports.update = (id, reqUser)=>{
    return user.updateOne({_id:id}, reqUser)
}

exports.create = (reqUser)=>{
    return user.create(reqUser)
}

exports.login = async (reqUser)=>{
    const username = reqUser.username
    const password = reqUser.password
    const resUser = await user.findOne({"profile.username":username})

    console.log(username, password)
    console.log(resUser)
    if(!resUser){
        return {"msg":"Authorization Failed"}
    } 

    if(password == resUser.password) return generateToken({"username":username, "role":resUser.role, "id":resUser.id})
    return false
}

exports.list = async (isAdmin = false)=>{
    const filter = {}
    if (!isAdmin) {
        filter.isPublic = true
    }
    const userList = await user.find(filter)

    return userList.map(ele => ele.profile)

}