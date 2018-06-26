const db = require('../setup')

class AssignContactToGroup{
    static assign(phoneNumber, groupName, callback){
        db.serialize(function(){
            // check phone number exist or not in contact table
            let checkContact = `SELECT * FROM contacts WHERE phone = '${phoneNumber}'`
            db.all(checkContact, function(err, phone){
                if(err) throw err
                if(phone.length === 0){
                    callback([false, `Phone number ${phoneNumber} is not exists in the contact list, make sure you have create into table contacts!`])
                } else{
                    // then check the group name is exist or not
                    let checkGroup = `SELECT * FROM groups WHERE groupName = '${groupName.join(" ")}'`
                    db.all(checkGroup, function(err, group){
                        if(err) throw err
                        if(group.length === 0){
                            callback(`Group name ${groupName.join(" ")} is not exists in the groups table!`)
                        } else{
                            // if phone number & group name are OK then check already assig in contactgroup or not
                            let check = `select contacts.id, name, company, phone, email, groups.id AS groupId, groupName from Contacts
                                        left join ContactGroup on Contacts.id = ContactGroup.contactId
                                        join Groups on Groups.id = ContactGroup.groupId
                                        where phone = '${phoneNumber}' and groupName = '${groupName.join(" ")}'`
                            db.all(check, function(err, contactInGroup){
                                if(err) throw err
                                if(contactInGroup.length === 0){ // if the status is not assign yet then do insert
                                    let query = `INSERT INTO ContactGroup (contactId, groupId) VALUES ('${phone[0].id}', '${group[0].id}')`
                                    db.run(query, function(err){
                                        if(err) throw err
                                        callback([true, `Successfully add number ${phoneNumber} into group ${groupName.join(" ")}`])
                                    })
                                } else{ // if already assign
                                    callback([Number(contactInGroup[0].groupId), `Phone number ${phoneNumber} already exists in group ${groupName.join(" ")}`])
                                }
                            })
                        }
                    })
                }
            })
        })
    }
}

module.exports = AssignContactToGroup