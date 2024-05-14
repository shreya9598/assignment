const { getById, update, create, login, list } = require('../services/UserService')
const UserModel = require('../user')

exports.get = async (req, res)=>{
    const isAdmin = req.isAdmin
    const userId = req.id
    if(isAdmin || userId == req.params.id){
        const user = await getById(req.params.id)
        return res.json(user)
    } 
    res.json({"msg": "Invalid Request"})
}

exports.update = async (req,res)=>{
    const id = req.params.id
    const user = req.body
    const result = await update(id, user)
    res.json(result)
}

exports.create = async (req,res)=>{
    const user = req.body
    const result = await create(user)
    res.json(result)
}

exports.login = async(req,res)=>{
    const user = req.body
    const result = await login(user)
    return res.json(result)
}

exports.list = async(req, res) =>{
    const isAdmin = req.isAdmin
    const result = await list(isAdmin)
    return res.json(result)
}
