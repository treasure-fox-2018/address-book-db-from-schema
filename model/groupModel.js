var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./address.db");

class Model{
    static create(name,cb){
        let query = `INSERT INTO Groups (name) VALUES("${name}")`
        db.run(query,function(err){
            if(err){
                throw err
            }else{
                let groupData = `SELECT * FROM Groups WHERE name = "${name}"`
                db.all(groupData,function(err,data){
                    if(err){
                        throw err
                    }else{
                        cb(data)
                    }
                })
            }
        })
    }

    static update(id,column,value,cb){
        let query = `UPDATE Groups SET ${column} = "${value}" WHERE id = ${id}`
        db.run(query,function(err,data){
            if(err){
                throw err
            }else{
                cb(data)
            }
        })
    }

    static delete(id,cb){
        let query = `SELECT * FROM Groups WHERE id = ${id}`
        db.all(query,function(err,data){
            if(err){
                throw err
            }else{
                let delQuery = `DELETE FROM Groups WHERE id = ${id}`
                db.run(delQuery,function(err){
                    if(err){
                        throw err
                    }else{
                        let delCon = `DELETE FROM ContactGroup WHERE id = ${id}`
                        db.run(delCon,function(err){
                            if(err){
                                throw err
                            }else{
                                cb(data)
                            }
                        })
                        
                    }
                })
            }
        })
    }

    static show(cb){
        let query = `SELECT * FROM Groups`
        db.all(query,function(err,data){
            cb(data)
        })
    }
}

module.exports = Model