const db = require('./db')

class createDatabase {
    static kontakData(){
        let query = `CREATE TABLE IF NOT EXISTS Contacts (kontakId INTEGER PRIMARY KEY AUTOINCREMENT,
                                          name VARCHAR,
                                          perusahaan VARCHAR,
                                          nomer_telepon VARCHAR,
                                          email VARCHAR)`
        
        db.run(query,function(err){
            if (err) throw err;
        })
    }

    static groupData(){
        let query = `CREATE TABLE IF NOT EXISTS Groups (groupId INTEGER PRIMARY KEY AUTOINCREMENT,
                                                        group_name VARCHAR)`

        db.run(query,function(err){
            if (err) throw err;
        })
    }

    static groupKontakData(){
        let query = `CREATE TABLE IF NOT EXISTS GroupContacts (groupContactId INTEGER PRIMARY KEY AUTOINCREMENT,
                                                               kontakId INTEGER,
                                                               groupId INTEGER,
                                                               FOREIGN KEY (kontakId) REFERENCES Contacts(KontakId),
                                                               FOREIGN KEY (groupId)  REFERENCES Groups(groupId))`

        db.run(query,function(err){
            if (err) throw err;
        })
    }
}

createDatabase.kontakData()
createDatabase.groupData()
createDatabase.groupKontakData()