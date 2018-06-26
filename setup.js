const db = require('./db.js')

var querykKontak = `CREATE TABLE IF NOT EXISTS kontak 
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
            nama VARCHAR(50),
            nama_perusahaan VARCHAR(50),
            nomor_telp VARCHAR(50) UNIQUE,
            email VARCHAR(50) UNIQUE)`

var queryGrup = `CREATE TABLE IF NOT EXISTS grup
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                nama VARCHAR(50))`

var queryKontakGrup = `CREATE TABLE IF NOT EXISTS grup_kontak 
                        (id INTEGER PRIMARY KEY AUTOINCREMENT,
                        grup_Id INTEGER,
                        kontak_id INTEGER,
                        FOREIGN KEY (grup_id) REFERENCES grup(id),
                        FOREIGN KEY (kontak_id) REFERENCES kontak(id))`

db.serialize( function(err){
    if(err) throw err
    db.run(querykKontak)
    db.run(queryGrup)
    db.run(queryKontakGrup)
})


