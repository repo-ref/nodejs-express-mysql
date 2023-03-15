const Invite = require("../models/flare_chat_invites.model")

exports.create = (req,res) => {
    console.log('enter /api/flare/invite controller')
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!",
        })
        return;
    }
    
    const invt =  new Invite({
        address:req.body.address,
        num:req.body.num
    })
    console.log(invt)

    Invite.create(invt,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message || 'some error occurred while create flare chat invit'
            })
        } else {
            res.send(data)
        }
    })
}