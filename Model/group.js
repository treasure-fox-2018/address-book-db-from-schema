const db = require('../db.js')

class Group{
    static cek(){
        console.log('modelGrup');
        
    }

    static addGroup(name,callback){
        var query = `INSERT INTO grup VALUES (null,'${name}')`

        db.run(query, function(err, data){
            if(err) throw err
            callback(name)
        })
    }

    static updateGroup(oldName, newName, callback){
        var query = `UPDATE grup 
                    SET nama = '${newName}'
                    WHERE nama = '${oldName}'`
        
        db.run(query, function(err,data){
            if(err) throw err
            callback(newName)
        })
    }

    static readGroup(callback){
        var query = `SELECT * FROM grup`

        db.all(query,function(err,data){
            callback(data)
        })
    }
    
    static deleteGroup(id,callback){
        var queryGrup = `DELETE FROM grup WHERE id = '${id}'`
        var queryGrupKontak = `DELETE FROM grup_kontak WHERE grup_id = ${id}`
        var readGrup = `SELECT * FROM grup`
        db.serialize(() =>{
            db.run(queryGrup, function(err){
                if(err) throw err

            })
            db.run(queryGrupKontak, function(err){
                if(err) throw err

            })
            db.all(readGrup, function(err,data){
                if(err) throw err
                callback(data)
            })


        })
    }
}

module.exports = Group