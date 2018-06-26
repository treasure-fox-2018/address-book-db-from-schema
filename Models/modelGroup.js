const db = require('../setup')

class Group{
    static create(name, callback){
        let check = `SELECT * FROM groups WHERE groupName = '${name}'`
        db.all(check, function(err, group){
            if(err) throw err
            if(group.length === 0){
                let query = `INSERT INTO groups VALUES (null, '${name}')`
                db.run(query, function(err){
                    if(err) throw err
                    callback([true, name])
                })
            } else{
                callback([false, `Group name ${name} already exists`])
            }
        })
    }

    static update(id, coloumn, newUpdate, callback){
        let check = `SELECT * FROM groups WHERE id = '${id}'`
        db.all(check, function(err, group){
            if(err) throw err
            if(group.length === 0){
                callback([false, `ID ${id} not found!`])
            } else{
                let query = `UPDATE groups SET ${coloumn} = '${newUpdate.join(" ")}' WHERE id = '${id}'`
                db.run(query, function(err){
                    if(err) throw err
                    callback([true, id])
                })
            }
        })
    }

    static delete(id, callback){
        let check = `SELECT * FROM groups WHERE id = '${id}'`
        db.all(check, function(err, group){
            if(err) throw err
            if(group.length === 0){
                callback([false, `ID ${id} not found!`])
            } else{
                let query = `DELETE FROM groups WHERE id = '${id}'`
                db.run(query, function(err){
                    if(err) throw err
                    callback([true, group[0].groupName])
                })
            }
        })
    }

    static show(id, callback){
        if(id === undefined){
            // show all groups with the all contacts inside group
            let query = `select Groups.id, groupName, name from Contacts
                        left join ContactGroup on Contacts.id = ContactGroup.contactId
                        join Groups on Groups.id = ContactGroup.groupId
                        order by Groups.id`
            db.all(query, function(err, groups){
                if(err) throw err
                callback(groups)
            })
        } else{
            // show group and all the contacts inside group
            let query = `select Groups.id, groupName, name from Contacts
                        left join ContactGroup on Contacts.id = ContactGroup.contactId
                        join Groups on Groups.id = ContactGroup.groupId
                        where Groups.id = 1`
            db.all(query, function(err, group){
                if(err) throw err
                callback(group)
            })
        }
    }
}

module.exports = Group