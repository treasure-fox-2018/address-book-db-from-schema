var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('AddressBook.db');

class Contact{
    static Create(name,company,phone,email,cbAdd){
        db.run(`insert into Contacts values (null,"${name}","${company}","${phone}","${email}")`,(err)=>{
            if(err) throw err
            else{
                cbAdd(true)
            }
        })
    }
    static Delete(id,cbDel){
        db.run(`delete from Contacts where id = ${id}`,(err)=>{
            if(err) throw err
            else{
                db.run(`delete from Contact_Group where contactId = ${id}`,(err)=>{
                    cbDel(true)
                })
            }
        })
    }
    static Update(id,colomn,value,cbUpdate){
        db.run(`update Contacts set ${colomn} = "${value}" where id = ${id}`,(err)=>{
            if(err) throw err
            else{
                cbUpdate(true)
            }
        })
    }
    static Show(cbShow){
        db.all(`select Contacts.name,company,phoneNumber,email,Groups.name as nameGroup
                from Contacts
                join Contact_Group on Contacts.id = Contact_Group.contactId
                join Groups on Contact_Group.groupId = Groups.id`,(err,contacts)=>{
                if(err) throw err
                else{
                    cbShow(contacts)
                }
            })
    }
}

class Group{
    static Create(name,cbAdd){
        db.run(`insert into Groups values (null,"${name}")`,(err)=>{
            if(err) throw err
            else{
                cbAdd(true)
            }
        })
    }
    static Delete(id,cbDel){
        db.run(`delete from Groups where id = ${id}`,(err)=>{
            if(err) throw err
            else{
                db.run(`delete from Contact_Group where groupId = ${id}`,(err)=>{
                    cbDel(true)
                })
            }
        })
    }
    static Update(id,colomn,value,cbUpdate){
        db.run(`update Groups set ${colomn} = "${value}" where id = ${id}`,(err)=>{
            if(err) throw err
            else{
                cbUpdate(true)
            }
        })
    }
    static Show(cbShow){
        db.all(`select Groups.name as groupName, Contacts.name, company, 
                phoneNumber, email from Groups
                join Contact_Group on Groups.id = Contact_Group.groupId
                join Contacts on Contact_Group.contactId = Contacts.id`,(err,contacts)=>{
                if(err) throw err
                else{
                    cbShow(contacts)
                }
            })
    }
}

module.exports = {
    Contact,
    Group
}
