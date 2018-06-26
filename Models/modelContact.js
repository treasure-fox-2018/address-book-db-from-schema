const db = require('../setup')

class Contact{
    static create(name, company, phone, email, callback){
        if(phone.length > 12){
            callback(`Phone number can not more than 12 digits`)
        } else{
            let check = `SELECT * FROM contacts WHERE phone = '${phone}' OR email = '${email}'`
            db.all(check, function(err, checkContact){
                if(err) throw err
                if(checkContact.length === 0){
                    let query = `INSERT INTO contacts VALUES (null, '${name}','${company}', '${phone}', '${email}')`
                    db.run(query, function(err){
                        if(err) throw err
                        callback([true, `New contact has been created`])
                    })
                } else {
                    callback([false, `Contact already exists with id ${checkContact[0].id}`])
                }
            })
        }
    }

    static update(id, coloumn, newUpdate, callback){
        let query = `SELECT * FROM contacts WHERE id = '${id}'`
        db.all(query, function(err, contact){
            if(err) throw err
            if(contact.length !== 0){
                let insertQuery = `UPDATE contacts SET ${coloumn} = '${newUpdate.join(" ")}' WHERE id = '${id}'`
                db.run(insertQuery, function(err){
                    if(err) throw err
                    callback([true, `${id}`])
                })
            } else{
                callback([false, `ID ${id} not found!`])
            }
        })
    }

    static delete(id, callback){
        let check = `SELECT * FROM contacts WHERE id = '${id}'`
        db.all(check, function(err, contact){
            if(err) throw err
            if(contact.length !== 0){
                let query = `DELETE FROM contacts WHERE id = '${id}'`
                db.run(query, function(err){
                    if(err) throw err
                    callback([true, `${id}`])
                })
            } else{
                callback([false, `ID ${id} not found!`])
            }
        })
        
    }

    static show(id, callback){
        if(id === undefined){
            let query = `select contacts.id, name, company, phone, email, groupName from Contacts
                        left join ContactGroup on Contacts.id = ContactGroup.contactId
                        join Groups on Groups.id = ContactGroup.groupId`
            db.all(query, function(err, dataContacts){
                if(err) throw err
                callback([true, dataContacts])
            })
        } else {
            let query = `select contacts.id, name, company, phone, email, groupName from Contacts
                        left join ContactGroup on Contacts.id = ContactGroup.contactId
                        join Groups on Groups.id = ContactGroup.groupId
                        where contacts.id = '${id}'`
            db.all(query, function(err, dataContacts){
                if(err) throw err
                if(dataContacts.length > 0){
                    callback([false, dataContacts])
                } else{
                    callback(id)
                }
            })
        }
    }
}

module.exports = Contact