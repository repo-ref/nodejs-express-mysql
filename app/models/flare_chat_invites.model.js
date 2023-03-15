const sql = require("./db.js")

const FlareChatInvites = function(invs){
    this.address = invs.address;
    this.num = invs.num;
}

FlareChatInvites.create = (newInv,result) =>{
    sql.query("insert into invites set ?",newInv,(err,res)=>{
        if(err){
            console.log("error:",err)
            result(err,null);
            return;
        }
        console.log("created invites:",{id:res.insertId,...newInv})
        result(null,{id:res.insertId,...newInv})
    })
}

module.exports = FlareChatInvites;