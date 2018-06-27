const db = require("./db")
const fs = require("fs")

class DataContacts {
  static insertData () {
    db.serialize(() => {
      const data = fs.readFileSync("./data_contact.csv", "utf-8").split("\n")
      
      for (let i = 1; i < data.length; i++) {
        let dataSplit = data[i].split(",")
        let name = dataSplit[0]
        let perusahaan = dataSplit[1]
        let number_phone = dataSplit[2]
        let email = dataSplit[3]

        const queryInsert = `INSERT INTO Contacts (name, perusahaan, number_phone, email)
                            VALUES ("${name}","${perusahaan}","${number_phone}","${email}")`
        db.run(queryInsert, (err, data) => {
          if (err) throw err;
          console.log("Data Contacts successfully add to database");
        })
      }
    })
  }
}

class DataGroups {
  static insertData () {
    db.serialize(() => {
      const data = fs.readFileSync("./data_group.csv", "utf-8").split("\n")

      for (let i = 1; i < data.length; i++) {
        const queryInsert = `INSERT INTO Groups (nameGroup) VALUES ("${data[i]}")`
        db.run(queryInsert, (err, data) => {
          if (err) throw err;
          console.log("Data Groups successfully add to database");
        })
      }
    })
  }
}

class DataGroupContacts {
  static insertData () {
    db.serialize(() => {
      const data = fs.readFileSync("./data_group_contact.csv", "utf-8").split("\n")
      for (let i = 1; i < data.length; i++) {
        let dataSplit = data[i].split(",")
        let contact_id = dataSplit[0]
        let group_id = dataSplit[1]

        const queryInsert = `INSERT INTO GroupContacts (contact_id, group_id) 
                            VALUES (
                              "${contact_id}",
                              "${group_id}"
                            )`
        db.run(queryInsert, (err, data) => {
          if (err) throw err;
          console.log("Data Groups successfully add to database");
        })
        
      }
    })
  }
}

DataContacts.insertData()
DataGroups.insertData()
DataGroupContacts.insertData()


module.exports = DataContacts, DataGroups, DataGroupContacts