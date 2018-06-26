class Contact{
    static Create(status){
        if(status){
            console.log("data contact berhasil ditambahkan");
        }
    }
    static Delete(status){
        if(status){
            console.log("data berhasil dihapus");
        }
    }
    static Update(status){
        if(status){
            console.log("data berhasil di update");
        }
    }
    static Show(result){
        console.log(result);
    }
}

class Group{
    static Create(status){
        if(status){
            console.log("data contact berhasil ditambahkan");
        }
    }
    static Delete(status){
        if(status){
            console.log("data berhasil dihapus");
        }
    }
    static Update(status){
        if(status){
            console.log("data berhasil di update");
        }
    }
    static Show(result){
        console.log(result);
    }
}

module.exports = {
    Contact,
    Group
}