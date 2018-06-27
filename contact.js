const db = require('./db');

class Contact{
    addContact(nama,perusahaan,noTelp,email){
        var query = `INSERT INTO Contacts VALUES 
        ("${nama}","${perusahaan}","${noTelp}","${email}")`

        db.run(query,function (err) {
            if (err) throw err
        })
    }

}
