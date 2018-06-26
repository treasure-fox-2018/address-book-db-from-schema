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
    
    static deleteGroup(name,callback){
        var query = `DELETE FROM grup WHERE nama = '${name}'`

        db.run(query, function(err,data){
            if(err) throw err
            callback(name)
        })
    }
}

module.exports = Group