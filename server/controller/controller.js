const Userdb = require('../model/model')

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'Content cannot be empty!'});
        return;
    }
    
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    user
       .save(user)
       .then(data=>{
            res.send(data)
       })
       .catch(err=>{
            res.status(500).send({
                message:err.message || 'Some error occured while creating a create operation'
            })
       })

    }


exports.update=(req,res)=>{
    let id = req.params.id;
    
}
exports.delete=(req,res)=>{
    
}
exports.find=(req,res)=>{
    Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:error||'Some error has occured while retrieving user info'})
        })
}