const db = require('./db')

class Group {
    static createGroup(group_name,callback){
        let create_query = `INSERT INTO Groups (group_name) VALUES ("${group_name}")`

        db.run(create_query,function(err){
            if(err) {
                callback(err,null)
            }else {
                callback(err,`${group_name} has been created`)
            }
        })
    }

    static updateGroup(id,group_name,callback){
        let update_query = `UPDATE Groups SET group_name = "${group_name}"
                                                WHERE groupId = ${id}`
                        
        db.run(update_query,function(err){
            if (err) {
                callback(err,null)
            }else {
                callback(err,`Group with id : ${id} has been updated`)
            }
        })
    }

    static deleteGroup(id,callback){
        let delete_query = `DELETE FROM Groups WHERE GroupId = "${id}"`

        db.run(delete_query,function(err){
            if (err){
                callback(err,null)
            }else {
                callback(err,`Group with id : ${id} has been Deleted`)
            }
        })
    }
}

module.exports = Group