const db = require('../db.js')

class Contact_group{
    static cek(){
        console.log('Contact_group');
        
    }

    static readDataKontak(callback){
        db.all(`SELECT * FROM kontak`,(err,data) => {
            if(err) console.log('baca data kontak error');
            callback(data)
        })
    }

    static readDataGrup(callback){
        db.all(`SELECT * FROM grup`,(err,data) => {
            if(err) console.log('baca data grup error');
            callback(data)
        })
    }

    static assignContactToGroup(idKontak, idGrup,callback){
        var query = `INSERT INTO grup_kontak VALUES (null,'${idGrup}','${idKontak}')`

        var that = this
        this.readDataGrup(function(data){
            for(var i = 0; i < data.length; i++){
                if(Number(idGrup) === data[i].id){
                    that.readDataKontak(function(dataKontak){
                        for(var i = 0; i < dataKontak.length;i++){
                            if(Number(idKontak) === dataKontak[i].id){
                                db.run(query,function(err,data){
                                    if(err)console.log('assign error');
                                    callback(data)
                                })
                            }
                        }
                    })
                }
            }
        })
        
    }
}

module.exports = Contact_group