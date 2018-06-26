const db = require("../db")
const ContactGroup = require("../contact-group")

class ModelContactGroup {
  static insert (contact_id, group_id, callback) {
    const contactGroup = new ContactGroup (contact_id, group_id)
    const queryInsert = `INSERT INTO GroupContacts 
                        ( contact_id, group_id) 
                        VALUES ("${contactGroup.contact_id}", "${contactGroup.group_id}")`
    db.run(queryInsert, (err, data) => {
      if (err) throw err;
      const message = `Contact id ${contactGroup.contact_id} and
                      group id ${contactGroup.group_id} success to add database`
      callback(message)
    }) 
  } 

  static update (id, contact_id,  group_id, callback) {
    const contactGroup = new ContactGroup (contact_id, group_id)
    const queryUpdate = `UPDATE GroupContacts
                          SET contact_id = "${contactGroup.contact_id}",
                              group_id = "${contactGroup.group_id}"
                          WHERE id = ${id}`
    db.run(queryUpdate, (err, data) => {
      if (err) throw err;
      const message = `Contact group id ${id} success updated`
      callback(message)
    })
  }
}

module.exports = ModelContactGroup