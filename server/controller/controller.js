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
            // res.send(`User updated succesfully`)
            res.redirect('/adduser')
       })
       .catch(err=>{
            res.status(500).send({
                message:err.message || 'Some error occured while creating a create operation'
            })
       })

    }

exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send('message:Data to update cannot be empty')
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(400).send({message:'Invalid user, NO such user available'})
            }
            else{
                res.send(data)

            }
        })
        .catch(err=>{
            res.status(500).send({message:'Error occured while updating user data'})
        })

    
}
exports.delete=(req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:'No such user'})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:'Error occurder while deleting user'})
    })
}
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(400).send({message:'No such user'})
                }
                else{
                    res.send(data)
                }       
            })
            .catch(err=>{
                res.status(500).send({message:'Error occured obtaining user data'})
            })
    }
    else{
        Userdb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(err=>{
                res.status(500).send({message:err||'Some error has occured while retrieving user info'})
            })
    }
}
